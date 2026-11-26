// Write the selected family scene as the contest entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  'At dinner, my son tucked a napkin under Dad\'s chin. "Your turn to be the baby." Dad let the gravy win.';

if ([...text].length < 1 || [...text].length > 280 || !text.trim()) {
  throw new Error("Entry must contain 1-280 non-whitespace characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, { encoding: "utf8" });
