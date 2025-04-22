import type { Config } from "./interfaces/index.js";
import { getArguments } from "./getters/index.js";

import { checkDirectoryExist } from "./utils/index.js";
import { direcotryReplacementProcessor } from "./replacement-processors/index.js";
import { applyReplacementProcessor } from "./replacement-processors/index.js";
import { fileContentReplacementProcessor } from "./replacement-processors/index.js";
import { escapeRegExpUtil } from "./utils/index.js";
import { checkArgumentsUtil } from "./utils/index.js";
import { main } from "./replacement-processors/index.js";

const { configString, targetDir } = getArguments();
checkArgumentsUtil({ configString, targetDir });

main({
  configString,
  targetDir,
  checkDirectoryExist,
  direcotryReplacementProcessor,
  applyReplacementProcessor,
  fileContentReplacementProcessor,
  escapeRegExpUtil,
});
