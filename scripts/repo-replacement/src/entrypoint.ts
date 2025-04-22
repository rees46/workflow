import type { Config } from "./interfaces/index.js";

import { checkDirectoryExist } from "./utils/index.js";
import { direcotryReplacementProcessor } from "./replacement-processors/index.js";
import { applyReplacementProcessor } from "./replacement-processors/index.js";
import { fileContentReplacementProcessor } from "./replacement-processors/index.js";
import { escapeRegExpUtil } from "./utils/index.js";

if (require.main === module) {
  const [configString, targetDir] = process.argv.slice(2);

  if (!configString || !targetDir) {
    console.error(
      "Usage: yarn process <config-json-string> <target-directory>",
    );
    process.exit(1);
  }

  main(configString, targetDir);
}

async function main(configString: string, targetDir: string) {
  try {
    const config: Config = JSON.parse(configString);

    checkDirectoryExist(targetDir);

    console.log("Starting replacement process...");
    await direcotryReplacementProcessor({
      directory: targetDir,
      config,
      applyReplacementProcessor,
      fileContentReplacementProcessor,
      escapeRegExpUtil,
    });
    console.log("Replacement completed successfully!");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}
