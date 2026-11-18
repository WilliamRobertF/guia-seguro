import { writeFile } from "node:fs/promises";

const size = 32;
const trust = [0x0f, 0x5a, 0x8c];
const white = [0xff, 0xff, 0xff];
const radius = 7;
const samples = 4;

function insideRoundedSquare(x, y) {
  const cx = Math.min(Math.max(x, radius), size - radius);
  const cy = Math.min(Math.max(y, radius), size - radius);
  return (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2;
}

function segmentDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSquared = dx * dx + dy * dy;
  const t = Math.max(
    0,
    Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lengthSquared),
  );
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

const pixels = Buffer.alloc(size * size * 4);

for (let y = 0; y < size; y += 1) {
  for (let x = 0; x < size; x += 1) {
    let covered = 0;
    let red = 0;
    let green = 0;
    let blue = 0;

    for (let sy = 0; sy < samples; sy += 1) {
      for (let sx = 0; sx < samples; sx += 1) {
        const px = x + (sx + 0.5) / samples;
        const py = y + (sy + 0.5) / samples;
        if (!insideRoundedSquare(px, py)) continue;

        const checkDistance = Math.min(
          segmentDistance(px, py, 8.5, 17.5, 14, 23),
          segmentDistance(px, py, 14, 23, 24, 9.5),
        );
        const color = checkDistance <= 1.9 ? white : trust;

        covered += 1;
        red += color[0];
        green += color[1];
        blue += color[2];
      }
    }

    const index = (y * size + x) * 4;
    if (covered === 0) continue;

    pixels[index] = Math.round(red / covered);
    pixels[index + 1] = Math.round(green / covered);
    pixels[index + 2] = Math.round(blue / covered);
    pixels[index + 3] = Math.round((covered / (samples * samples)) * 255);
  }
}

const xor = Buffer.alloc(size * size * 4);
const and = Buffer.alloc(size * 4);

for (let y = 0; y < size; y += 1) {
  const row = size - 1 - y;
  for (let x = 0; x < size; x += 1) {
    const source = (y * size + x) * 4;
    const target = (row * size + x) * 4;
    xor[target] = pixels[source + 2];
    xor[target + 1] = pixels[source + 1];
    xor[target + 2] = pixels[source];
    xor[target + 3] = pixels[source + 3];

    if (pixels[source + 3] === 0) {
      and[row * 4 + (x >> 3)] |= 0x80 >> (x % 8);
    }
  }
}

const header = Buffer.alloc(40);
header.writeUInt32LE(40, 0);
header.writeInt32LE(size, 4);
header.writeInt32LE(size * 2, 8);
header.writeUInt16LE(1, 12);
header.writeUInt16LE(32, 14);
header.writeUInt32LE(0, 16);
header.writeUInt32LE(xor.length, 20);

const image = Buffer.concat([header, xor, and]);

const directory = Buffer.alloc(6);
directory.writeUInt16LE(0, 0);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(1, 4);

const entry = Buffer.alloc(16);
entry[0] = size;
entry[1] = size;
entry[2] = 0;
entry[3] = 0;
entry.writeUInt16LE(1, 4);
entry.writeUInt16LE(32, 6);
entry.writeUInt32LE(image.length, 8);
entry.writeUInt32LE(6 + 16, 12);

await writeFile("app/favicon.ico", Buffer.concat([directory, entry, image]));
console.log("Favicon gerado em app/favicon.ico");
