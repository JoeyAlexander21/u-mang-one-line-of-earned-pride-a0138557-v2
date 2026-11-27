// One Line of Earned Pride — replacement entry (v2) for make.fun bounty
// u-mang-one-line-of-earned-pride-a0138557.
// One line: a quiet, earned moment of pride. After thirty years of
// mopping the same school floors, the janitor watches his daughter
// cross the graduation stage — and when they call her name, he stands
// up first, the only one in the room who knows what that walk cost.
// The pride is earned inside the line, by the decades of unseen work
// behind one standing ovation, and it lands on the last phrase.
//
// The program writes the line to /output/entry.txt: no network,
// no randomness, same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in
// for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "After thirty years of mopping the same school floors, the janitor watched his daughter cross the graduation stage, and when they called her name he stood up first — the only one in the room who knew what that walk had cost.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// not only white space. Verified by running it: this line is 223 characters.
// Guard runs before any write, so a bad line fails loudly instead of
// silently producing an out-of-gate file.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
