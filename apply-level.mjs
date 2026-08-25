// Übernimmt einen Quelltext-Export aus dem Level-Editor in die index.html.
//
// Ablauf:
//   1. Im Spiel-Editor:  "⬇ Quelltext"  ->  default-rooms.txt
//   2. Hier:             node apply-level.mjs default-rooms.txt
//   3. Prüfen, committen, pushen.
//
// Das Skript ersetzt den Block zwischen den DEFAULT_ROOMS-Markern und
// erhöht DEFAULT_REV, damit unveränderte Spielstände das neue Level laden.
import fs from "node:fs";

const src = process.argv[2];
if (!src){
  console.error("Aufruf: node apply-level.mjs <default-rooms.txt>");
  process.exit(1);
}
const block = fs.readFileSync(src, "utf8").trim();
if (!block.startsWith("const DEFAULT_ROOMS")){
  console.error("Die Datei sieht nicht wie ein Quelltext-Export aus (erwartet: const DEFAULT_ROOMS = [...).");
  process.exit(1);
}

// Kartenzeilen validieren (jede muss exakt 32 Zeichen haben)
let rows = 0, fehler = 0;
for (const line of block.split(/\r?\n/)){
  const m = line.trim().match(/^"([#.=<>%^*SHVOBFPATGW!|()~]+)",$/);
  if (m){
    rows++;
    if (m[1].length !== 32){ console.error("Zeile mit Länge " + m[1].length + ": " + m[1]); fehler++; }
  }
}
if (fehler){ console.error(fehler + " fehlerhafte Kartenzeilen – abgebrochen."); process.exit(1); }

let html = fs.readFileSync("index.html", "utf8");
const re = /(\/\/ --- DEFAULT_ROOMS_START ---[^\n]*\n)[\s\S]*?(\n\/\/ --- DEFAULT_ROOMS_END ---)/;
if (!re.test(html)){
  console.error("DEFAULT_ROOMS-Marker in index.html nicht gefunden.");
  process.exit(1);
}
html = html.replace(re, (m, a, b) => a + block + b);
let neueRev = 0;
html = html.replace(/const DEFAULT_REV = (\d+);/, (m, n) => {
  neueRev = Number(n) + 1;
  return "const DEFAULT_REV = " + neueRev + ";";
});
fs.writeFileSync("index.html", html, "utf8");
// Exportdatei nach erfolgreicher Übernahme aufräumen
try{ fs.unlinkSync(src); }catch(e){}
console.log("OK: " + rows + " Kartenzeilen übernommen, DEFAULT_REV -> " + neueRev + ", " + src + " gelöscht.");
