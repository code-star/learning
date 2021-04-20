import convertFileDataListToTree from "./convertFileDataListToTree.ts";
import { parseFilesOnPaths } from "./parseFiles.ts";
import { ensureDirSync } from "fs";

const OUTPUT_PATH = "./src/client/generated/_guide.tsx";

const parsedFiles = await parseFilesOnPaths(Deno.args.slice(0,2));
const resultsTree = convertFileDataListToTree(parsedFiles);

ensureDirSync("./src/client/generated");
Deno.writeTextFileSync(OUTPUT_PATH, `export const guide = ${JSON.stringify(resultsTree)};`);
console.log(`Wrote to ${OUTPUT_PATH}`);