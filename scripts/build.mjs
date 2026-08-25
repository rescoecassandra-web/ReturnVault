import { access } from "node:fs/promises";
import { constants } from "node:fs";

const entrypoint = new URL("../public/index.html", import.meta.url);

try {
  await access(entrypoint, constants.R_OK);
  console.log("Static site is ready for deployment from public.");
} catch {
  console.error("Build failed: public/index.html is missing or unreadable.");
  process.exitCode = 1;
}
