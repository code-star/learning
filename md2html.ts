// import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
// import { Marked, Renderer } from "markdown";
// import { Node } from "https://deno.land/x/markdown_tree@1.1.0/mod.ts";
import { Node } from "markdown_tree";
import { walkSync } from "https://deno.land/std@0.92.0/fs/mod.ts";

interface FileResult {
  path: string;
  name: string;
  content: string;
}

async function parseFile(path: string, name: string): Promise<FileResult> {
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
// Async
// async function printFilesNames() {
//   for await (const entry of walk(dir)) {
//     console.log(entry.path);
//   }
// }

// printFilesNames().then(() => console.log("Done!"));

const dirs = [dir1, dir2];

let results: FileResult[] = [];

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

// console.log(results);

const resultsTree = results
  .map(({ path, ...rest }) => {
    const x = path.split("/");
    return {
      ...rest,
      path: x,
    };
  })
  .reduce((acc, next) => {
    const { path, ...rest } = next;
    if (path.length === 3) {
      if (!acc[path[0]]) {
        acc[path[0]] = {};
      }
      if (!acc[path[0]][path[1]]) {
        acc[path[0]][path[1]] = {};
      }
      acc[path[0]][path[1]][path[2]] = next;
    }
    if (path.length === 2) {
      if (!acc[path[0]]) {
        acc[path[0]] = {};
      }
      acc[path[0]][path[1]] = next;
    }
    if (path.length === 1) {
      acc[path[0]] = next;
    }
    return acc;
  }, {} as any);

// console.log("results tree: ", resultsTree);

// <ul>
// ${results
//   .map(
//     ({ path, name, content }) =>
//       `<li>${name}: ${content} (${path})</li>`
//   )
//   .join("")}
// </ul>

const formatFileName = (fileName: string): string => {
    if(fileName.indexOf(".md") > 0) {
        return `<strong>${fileName.substr(0, fileName.indexOf(".md"))}</strong>`;
    }
    return fileName;
}

const formatLeaf = ([fileName, obj]: [string, unknown]) => {
  const { path, name, content, ...rest2 } = obj as any;
  const contentStr = content ? `<ul><li>${content}</li></ul>` : "";
  const x = fileName;
  return `<li>${formatFileName(fileName)} ${contentStr}</li>`;
};

const outputHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codestar learning</title>
</head>
<body>
    ${Object.entries(resultsTree)
      .map(([name1, x]) => {
        const { path, name, content, ...rest } = x as any;
        const y = rest
          ? Object.entries(rest)
              .map(([name2, y1]) => {
                const { path, name, content, ...rest1 } = y1 as any;
                const z = rest1
                  ? Object.entries(rest1).map(formatLeaf).join("")
                  : "";
                return `<li>${name2}<ul>${z}</ul></li>`;
              })
              .join("")
          : "";
        return `<li>${name1}<ul>${y}</ul></li>`;
      })
      .join("")}
</body>
</html>`;

// console.log(outputHtml);

const write = Deno.writeTextFileSync("./index.html", outputHtml);
// write.then(() => console.log("File written to ./hello.txt"));
