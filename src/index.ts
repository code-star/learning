// import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
// import { Marked, Renderer } from "markdown";
// import { Node } from "https://deno.land/x/markdown_tree@1.1.0/mod.ts";
import { walkSync } from "https://deno.land/std@0.92.0/fs/mod.ts";
import generateHtml from "./generateHtml.ts";
import convertFileDataListToTree from "./convertFileDataListToTree.ts";
import { FileData } from "./types.ts";
import { parseFilesOnPaths } from "./parseFiles.ts";

// directory path
// const dir1 = Deno.args[0]; // "./Backend/";
// const dir2 = Deno.args[1]; // "./Backend/";

const parsedFiles = await parseFilesOnPaths(Deno.args.slice(0,1));
const resultsTree = convertFileDataListToTree(parsedFiles);
const outputHtml = generateHtml(resultsTree);

Deno.writeTextFileSync("./index.html", outputHtml);
console.log("Wrote to index.html");