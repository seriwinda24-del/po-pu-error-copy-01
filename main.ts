import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "We charged your card twice: the retry button never checked if the first payment went through.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
