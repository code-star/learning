import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import { formatFileName } from "./_formatters.tsx";
import { FileData2, TopicTree } from "../../types.ts";

const byKey = (entry: [string, unknown], otherEntry: [string, unknown]): number => {
  if(entry[0] > otherEntry[0])  {
    return 1;
  }
  if(entry[0] < otherEntry[0])  {
    return -1;
  }
  return 0;
}

const renderTree = (topicTree: TopicTree): JSX.Element => {
  const listStr = Object.entries(topicTree).sort(byKey).map(([entryKey, entryVal]) => {
    const { pathSegments, content, name, ...rest } = entryVal as
      | TopicTree
      | FileData2;
    const contentStr = content ? (<ul><li>{content}</li></ul>) : "";
    const hasRest = Object.keys(rest).length > 0;
    return hasRest
      ? <li>{entryKey}<ul>{renderTree(rest)}</ul></li>
      : <li>{formatFileName(entryKey)} {contentStr}</li>;
  });
  return <>{listStr}</>;
};

const generateHtml = (topicTree: TopicTree) => renderTree(topicTree);

export default generateHtml;
