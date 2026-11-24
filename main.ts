import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of office comedy, 129 chars (gate max 200).
const joke =
  "We had a meeting to plan the meeting, and the meeting about the meeting got rescheduled because someone booked a meeting over it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, joke);
console.log(`wrote ${target} (${joke.length} chars, gate max 200)`);
