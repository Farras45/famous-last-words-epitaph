// Famous Last Words Epitaph — one-line tombstone epitaph of famous last words.
// Writes the winning line (and nothing else, no trailing newline) to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

// The epitaph in three beats: the habit, the win, the punch.
// Each beat carries its own concrete noun/number so the line lands on one read.
const segments: string[] = [
  "I played the same six lottery numbers for thirty years,",
  "won $14 million on Tuesday,",
  "and died Wednesday before cashing the ticket.",
];

function buildLine(parts: readonly string[]): string {
  const line = parts.join(" ");
  if (line.length < 1 || line.length > 150) {
    throw new Error(`entry line must be 1-150 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.trim() !== line) {
    throw new Error("entry line must be a single clean line");
  }
  return line;
}

const line = buildLine(segments);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
