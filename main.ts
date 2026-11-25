import { writeFileSync, mkdirSync } from "node:fs";

// The GPS's own excuse for sending the driver down the wrong road.
// Chosen from 3 candidates: smug and defensive, blames the map,
// fresh specific detail (the wedding) instead of a recalculating joke.
const TEXT =
  "I told you to turn at the wedding. You turned at the wrong wedding. The map and I are no longer speaking.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate guard (bounty gate: 1–200 chars, single line, not whitespace-only).
if (TEXT.includes("\n") || TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry violates gate: ${TEXT.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to ${outDir}/entry.txt`);
