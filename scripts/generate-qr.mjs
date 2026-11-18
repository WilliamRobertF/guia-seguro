import QRCode from "qrcode";
import { mkdir, writeFile } from "node:fs/promises";

const url = process.argv[2];
if (!url || !url.startsWith("https://")) {
  console.error("Uso: node scripts/generate-qr.mjs https://seu-endereco.vercel.app");
  process.exit(1);
}

await mkdir("qr", { recursive: true });
await QRCode.toFile("qr/qrcode.png", url, {
  errorCorrectionLevel: "M",
  margin: 4,
  width: 1200,
  color: { dark: "#000000", light: "#FFFFFF" },
});
const svg = await QRCode.toString(url, { type: "svg", errorCorrectionLevel: "M", margin: 4 });
await writeFile("qr/qrcode.svg", svg);
console.log("Arquivos gerados em qr/");
