import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Joke choice: hiccups are funniest when they strike at the worst possible
// social moment, so the "patch" relocates them to the one place nobody can
// hear them — alone in a car. The escalating list (date, interview, funeral)
// sells the bug before the fix lands the punchline.
const ENTRY_TEXT =
  "v2.4.1 — Fixed hiccups triggering during dates, job interviews, and funerals. They now only fire when you are alone in a car.";

const MAX_CHARS = 160;
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > MAX_CHARS) {
  throw new Error(`Entry text must be 1-${MAX_CHARS} characters.`);
}
if (/[\r\n]/.test(ENTRY_TEXT)) {
  throw new Error("Entry text must be a single line.");
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("Entry text must not be only whitespace.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
