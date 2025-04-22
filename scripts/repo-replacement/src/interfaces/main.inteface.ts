import type { CheckDirectoryExistType } from "./check-directory-exist.interface.js";
import type { DirecotryReplacementProcessorType } from "./directory-replacements-processor.interface.js";
import type { ApplyReplacementProcessorType } from "./apply-replacement-processor.interface.js";
import type { FileContentReplacementProcessorType } from "./file-content-replacement-processor.interface.js";
import type { EscapeRegExpUtilType } from "./escape-reg-exp-util.interface.js";

export interface MainProps {
  configString: string;
  targetDir: string;
  checkDirectoryExist: CheckDirectoryExistType;
  direcotryReplacementProcessor: DirecotryReplacementProcessorType;
  applyReplacementProcessor: ApplyReplacementProcessorType;
  fileContentReplacementProcessor: FileContentReplacementProcessorType;
  escapeRegExpUtil: EscapeRegExpUtilType;
}

export type MainType = (props: MainProps) => Promise<void>;
