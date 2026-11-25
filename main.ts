import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review written by a houseplant about its human owner.
// Single line, plain text, 186 characters, well inside the 279-char gate.
// The plant's grievance: bought as decor, then parked behind the TV so
// the Wi-Fi router gets the sunlight — a plant's-eye complaint about
// light, with a surprising turn at the end. No stock wilting melodrama:
// the joke is the router stealing the sunbeam, and the plant's revenge
// is photosynthesis powered by pure spite.
const ENTRY =
  "One star. She bought me to \u2018bring the room to life,\u2019 then parked me behind the TV so the Wi-Fi router gets the sunlight. I haven\u2019t seen the sun since March \u2014 I photosynthesize spite now.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
