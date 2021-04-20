import generateHtml from "./generateHtml.ts";
import convertFileDataListToTree from "./convertFileDataListToTree.ts";
import { parseFilesOnPaths } from "./parseFiles.ts";
import { ensureDirSync } from "fs";

const parsedFiles = await parseFilesOnPaths(Deno.args.slice(0,2));
const resultsTree = convertFileDataListToTree(parsedFiles);
const outputHtml = generateHtml(resultsTree);

ensureDirSync("./dist");
Deno.writeTextFileSync("./dist/index.html", outputHtml);
console.log("Wrote to ./dist/index.html");