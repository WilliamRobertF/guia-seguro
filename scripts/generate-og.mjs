import { deflateSync } from "node:zlib";
import { writeFile } from "node:fs/promises";

const width = 1200;
const height = 630;
const paper = [0x2a, 0x1e, 0x50];
const ink = [0xfb, 0xf8, 0xff];
const trust = [0xe7, 0xa5, 0x19];

const pixels = Buffer.alloc(width * height * 3);
for (let i = 0; i < pixels.length; i += 3) {
  pixels[i] = paper[0];
  pixels[i + 1] = paper[1];
  pixels[i + 2] = paper[2];
}

function rect(x, y, w, h, color) {
  for (let py = y; py < y + h; py += 1) {
    if (py < 0 || py >= height) continue;
    for (let px = x; px < x + w; px += 1) {
      if (px < 0 || px >= width) continue;
      const i = (py * width + px) * 3;
      pixels[i] = color[0];
      pixels[i + 1] = color[1];
      pixels[i + 2] = color[2];
    }
  }
}

const glyphs = {
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  C: ["01110", "10001", "10000", "10000", "10000", "10001", "01110"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  ".": ["00000", "00000", "00000", "00000", "00000", "01100", "01100"],
  " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
};

function drawText(text, x, y, scale, color) {
  let cursor = x;
  for (const character of text) {
    const glyph = glyphs[character];
    if (!glyph) throw new Error(`Caractere sem desenho: ${character}`);
    glyph.forEach((row, rowIndex) => {
      [...row].forEach((bit, columnIndex) => {
        if (bit === "1") {
          rect(cursor + columnIndex * scale, y + rowIndex * scale, scale, scale, color);
        }
      });
    });
    cursor += 6 * scale;
  }
}

drawText("PARE. RESPIRE.", 120, 200, 11, ink);
drawText("CONFIRME.", 120, 368, 11, ink);
rect(120, 150, 96, 8, trust);

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeAndData = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([length, typeAndData, crc]);
}

const header = Buffer.alloc(13);
header.writeUInt32BE(width, 0);
header.writeUInt32BE(height, 4);
header[8] = 8;
header[9] = 2;
header[10] = 0;
header[11] = 0;
header[12] = 0;

const stride = width * 3;
const raw = Buffer.alloc((stride + 1) * height);
for (let y = 0; y < height; y += 1) {
  raw[y * (stride + 1)] = 0;
  pixels.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
}

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk("IHDR", header),
  chunk("IDAT", deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

await writeFile("public/og.png", png);
console.log("Imagem gerada em public/og.png");
