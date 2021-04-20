import { WalkEntry, walkSync } from "fs";
import { Node } from "markdown_tree";
import { digForHeadingContent } from "./parseMarkdown.ts";
import { FileData } from "./types.ts";

/* Examples:
  Read file: await Deno.readFile(filename));

  Parse with Marked:
    Marked.setOptions({
        renderer: new Renderer()
    });
    const markup = Marked.parse(markdown);

*/

async function parseFile(path: string, name: string): Promise<FileData> {
  const decoder = new TextDecoder("utf-8");
  const filename = path;
  const markdown = decoder.decode(await Deno.readFile(filename));
  const markdownNode = Node.from(markdown);
  const result = {
    path,
    name,
    content: digForHeadingContent(markdownNode),
  };
  return result;
}

const mapPathToFileData = (entry: WalkEntry): Promise<FileData> | undefined => {
  if (entry.isFile) {
    return parseFile(entry.path, entry.name);
  }
};

const isDefinedEntry = (entry: FileData | undefined): entry is FileData =>
  typeof entry !== "undefined";

export const parseFilesOnPaths = async (
  dirs: string[]
): Promise<FileData[]> => {
  const results: FileData[] = (
    await Promise.all(
      dirs.flatMap((dir) =>
        Array.from(walkSync(dir)).map(mapPathToFileData)
      )
    )
  ).filter(isDefinedEntry);

  return results;
};
