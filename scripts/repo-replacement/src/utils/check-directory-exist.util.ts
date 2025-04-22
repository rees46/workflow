import fs from "node:fs";

export const checkDirectoryExist = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    throw new Error(`Directory ${dirPath} does not exist`);
  }
};
