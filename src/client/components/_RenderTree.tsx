import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import { formatFileName } from "../utils/_formatters.tsx";
import { FileData, TopicTree } from "../../types.ts";
import FoldableListItem from "./_FoldableListItem.tsx";

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

const RenderTree: React.FC<Props> = ({ topicTree }) => {
  const listStr = Object.entries(topicTree)
    .sort(byKey)
    .map(([entryKey, entryVal]) => {
      const { pathSegments, content, name, ...rest } = entryVal as
        | TopicTree
        | FileData;
      const contentStr = content ? (
        <ul>
          {content.map((c: string) => (
            <li>📚 {c}</li>
          ))}
        </ul>
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
