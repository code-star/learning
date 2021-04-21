import { WalkEntry, walkSync } from "fs";
import { Node } from "markdown_tree";
import { digForHeadingContent } from "./parseMarkdown.ts";
import { RawFileData } from "./types.ts";

/* Examples:
  Read file: await Deno.readFile(filename));

  Parse with Marked:
    Marked.setOptions({
        renderer: new Renderer()
    });
    const markup = Marked.parse(markdown);

*/

async function parseFile(path: string, name: string): Promise<RawFileData> {
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

const mapPathToFileData = (entry: WalkEntry): Promise<RawFileData> | undefined => {
  if (entry.isFile) {
    return parseFile(entry.path, entry.name);
  }
};

const isDefinedEntry = (entry: RawFileData | undefined): entry is RawFileData =>
  typeof entry !== "undefined";

export const parseFilesOnPaths = async (
  dirs: string[]
): Promise<RawFileData[]> => {
  const results: RawFileData[] = (
    await Promise.all(
      dirs.flatMap((dir) =>
        Array.from(walkSync(dir)).map(mapPathToFileData)
      )
    )
  ).filter(isDefinedEntry);

  return results;
};
