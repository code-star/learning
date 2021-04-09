import { walkSync } from "fs";
import { Node } from "markdown_tree";
import { digForHeadingContent } from "./parseMarkdown.ts";
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

export const parseFilesOnPaths = async (dirs: string[]): Promise<FileData[]> => {
    let results: FileData[] = [];
  
    for (const dir of dirs) {
      for (const entry of walkSync(dir)) {
        if (entry.isFile) {
          // console.log("found file", entry.path, entry);
          results.push(await parseFile(entry.path, entry.name));
        } else {
          // console.log("found dir", entry.path);
        }
      }
    }

    return results;
  }