import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import { formatFileName } from "../utils/_formatters.tsx";
import { FileData2, TopicTree } from "../../types.ts";
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

// interface Props {
//   label: string;
//   tree: {
//     [key: string]: any;
//   };
// }

// const FoldableListItem: React.FC<Props> = ({ label, tree }) => {
//   const [isFolded, setIsFolded] = React.useState(true);
//   // ᐅ
//   const result = isFolded ? "▼" : <ul><RenderTree topicTree={tree} /></ul>;
//   return (
//     <li
//       onClick={() => {
//         alert("hoiooi");
//         setIsFolded(!isFolded);
//       }}
//     >
//       {label} {result}
//     </li>
//   );
// };

interface Props1 {
  topicTree: TopicTree;
}

const RenderTree: React.FC<Props1> = ({ topicTree }) => {
  const listStr = Object.entries(topicTree)
    .sort(byKey)
    .map(([entryKey, entryVal]) => {
      const { pathSegments, content, name, ...rest } = entryVal as
        | TopicTree
        | FileData2;
      const contentStr = content ? (
        <ul>
          <li>{content}</li>
        </ul>
      ) : (
        ""
      );
      const hasRest = Object.keys(rest).length > 0;
      return hasRest ? (
        // ? <li>{entryKey}<ul>x{renderTree(rest)}</ul></li>
        <FoldableListItem label={entryKey} tree={rest} />
      ) : (
        <li>
          {formatFileName(entryKey)} {contentStr}
        </li>
      );
    });
  return <>{listStr}</>;
};

export default RenderTree;
