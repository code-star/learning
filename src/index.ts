// import generateHtml from "./generateHtml.ts";
import convertFileDataListToTree from "./convertFileDataListToTree.ts";
import { parseFilesOnPaths } from "./parseFiles.ts";
import { ensureDirSync } from "fs";

const parsedFiles = await parseFilesOnPaths(Deno.args.slice(0,2));
const resultsTree = convertFileDataListToTree(parsedFiles);
// const outputHtml = generateHtml(resultsTree);

ensureDirSync("./src/generated");
Deno.writeTextFileSync("./src/generated/_guide.ts", `export const guide = ${JSON.stringify(resultsTree)};`);
console.log("Wrote to ./src/generated/_guide.ts");