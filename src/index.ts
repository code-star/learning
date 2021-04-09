// import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
// import { Marked, Renderer } from "markdown";
// import { Node } from "https://deno.land/x/markdown_tree@1.1.0/mod.ts";
import { Node } from "markdown_tree";
import { walkSync } from "https://deno.land/std@0.92.0/fs/mod.ts";
import generateHtml from "./generateHtml.ts";
import convertFileDataListToTree from "./convertFileDataListToTree.ts";
import { FileData } from "./types.ts";

async function parseFile(path: string, name: string): Promise<FileData> {
  const decoder = new TextDecoder("utf-8");
  const filename = path; // Deno.args[0];
  // console.log(await Deno.readFile(filename));
  const markdown = decoder.decode(await Deno.readFile(filename));
  // console.log(markdown);
  // Marked.setOptions({
  //     renderer: new Renderer()
  // });
  // const markup = Marked.parse(markdown);
  // console.log(markup.content);
  // console.log(JSON.stringify(markup.meta));
  const markdownNode = Node.from(markdown);
  //   console.log(JSON.stringify(markdownNode));
  //   console.log(digForHeadingContent(markdownNode));
  const result = {
    path,
    name,
    content: digForHeadingContent(markdownNode),
  };
  //   console.log(result);
  return result;
}

// TODO use recursion and type guards
function digForHeadingContent(n: Node): string {
  if (!n.children) {
    // throw Error("no children");
    // console.log(n, "no children");
    return "";
  }
  const heading = n.children
    .filter((h) => h.props)
    .find((h) => h.props && h.props.type === "heading");
  if (!heading) {
    // throw Error("no heading");
    // console.log("no heading");
    return "";
  }
  const t = heading.children?.find((h) => h.props && h.props.type === "text");
  // @ts-ignore
  return t && t.props && t.props.content;
}

// directory path
const dir1 = Deno.args[0]; // "./Backend/";
const dir2 = Deno.args[1]; // "./Backend/";

// list all files in the directory

const dirs = [dir1, dir2];

let results: FileData[] = [];

for (const dir of dirs) {
  for (const entry of walkSync(dir)) {
    if (entry.isFile) {
      console.log("found file", entry.path, entry);
      results.push(await parseFile(entry.path, entry.name));
    } else {
      console.log("found dir", entry.path);
    }
  }
}

const resultsTree = convertFileDataListToTree(results);

// const formatFileName = (fileName: string): string => {
//     if(fileName.indexOf(".md") > 0) {
//         return `<strong>${fileName.substr(0, fileName.indexOf(".md"))}</strong>`;
//     }
//     return fileName;
// }

// const formatLeaf = ([fileName, obj]: [string, unknown]) => {
//   const { path, name, content, ...rest2 } = obj as any;
//   const contentStr = content ? `<ul><li>${content}</li></ul>` : "";
//   const x = fileName;
//   return `<li>${formatFileName(fileName)} ${contentStr}</li>`;
// };

const outputHtml = generateHtml(resultsTree);

const write = Deno.writeTextFileSync("./index.html", outputHtml);
