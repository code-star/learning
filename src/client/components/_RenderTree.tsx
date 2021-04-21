import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import { formatFileName } from "../utils/_formatters.tsx";
import { FileData, TopicTree } from "../../types.ts";
import FoldableListItem, { contentToListItems } from "./_FoldableListItem.tsx";

const byKey = (
  entry: [string, unknown],
  otherEntry: [string, unknown]
): number => {
  if (entry[0] > otherEntry[0]) {
    return 1;
  }
  if (entry[0] < otherEntry[0]) {
    return -1;
  }
  return 0;
};

interface Props {
  topicTree: TopicTree;
}

const distillFileData = (node: TopicTree): [FileData, TopicTree] => {
  const { pathSegments, content, name, ...rest } = node;
  const fileData: FileData = { content, name, pathSegments };
  return [fileData, rest];
};

const RenderTree: React.FC<Props> = ({ topicTree }) => {
  const listStr = Object.entries(topicTree)
    .sort(byKey)
    .map(([entryKey, entryVal]) => {
      const [fileData, rest] = distillFileData(entryVal);
      const { pathSegments, content, name } = fileData;
      const contentStr = content ? (
        <ul>{content.map(contentToListItems(pathSegments))}</ul>
      ) : (
        ""
      );
      const hasRest = Object.keys(rest).length > 0;
      return hasRest ? (
        <FoldableListItem label={entryKey} content={content} tree={rest} />
      ) : (
        <li>
          {formatFileName(entryKey)} {contentStr}
        </li>
      );
    });
  return <>{listStr}</>;
};

export default RenderTree;
