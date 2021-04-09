import generateHtml from "./generateHtml.ts";
import convertFileDataListToTree from "./convertFileDataListToTree.ts";
import { parseFilesOnPaths } from "./parseFiles.ts";

const parsedFiles = await parseFilesOnPaths(Deno.args.slice(0,2));
const resultsTree = convertFileDataListToTree(parsedFiles);
const outputHtml = generateHtml(resultsTree);

Deno.writeTextFileSync("./index.html", outputHtml);
console.log("Wrote to index.html");