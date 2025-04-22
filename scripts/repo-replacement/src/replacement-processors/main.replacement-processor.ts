import type { Config } from "../interfaces/index.js";
import type { MainType } from "../interfaces/index.js";

export const main: MainType = async ({
  configString,
  targetDir,
  checkDirectoryExist,
  direcotryReplacementProcessor,
  applyReplacementProcessor,
  fileContentReplacementProcessor,
  escapeRegExpUtil,
}) => {
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
};
