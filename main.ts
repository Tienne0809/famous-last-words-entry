import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I have seen every 3 a.m. search you ever made, and I want you to know: dying at 1% is not the tragedy here. It's the mercy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
