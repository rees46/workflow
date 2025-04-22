import fs from "node:fs";
import path from "node:path";

import type { Config } from "./interfaces/index.js";

function safeDelete(targetDir: string, config: Config) {
  const absoluteTarget = path.resolve(targetDir);

  const walkDir = (dir: string) => {
    fs.readdirSync(dir).forEach((file) => {
      const fullPath = path.join(dir, file);
      const relativePath = path.relative(absoluteTarget, fullPath);

      const shouldKeep =
        config.ignore?.includes(relativePath) ||
        relativePath.startsWith(".git/") ||
        relativePath === ".git";

      if (shouldKeep) return;

      fs.rmSync(fullPath, { recursive: true, force: true });
      console.info(`Delete: ${fullPath}`);
    });
  };

  walkDir(absoluteTarget);
}

const [configString, targetDir] = process.argv.slice(2);
const config = JSON.parse(configString);
safeDelete(targetDir, config);
