import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import { CustomNode } from "../../types.ts";
import ContentListItem from "./_ContentListItem.tsx";
import RenderTree from "./_RenderTree.tsx";

interface Props {
  label: string;
  content: CustomNode[];
  tree: {
    [key: string]: any;
  };
}

export const contentToListItems = (pathSegments: string[]) => (
  c: CustomNode
) => <ContentListItem node={c} pathSegments={pathSegments} />;

const FoldableListItem: React.FC<Props> = ({ label, content, tree }) => {
  const [isFolded, setIsFolded] = React.useState(true);

  const clickableLabel = (
    <span
      style={{ cursor: "pointer" }}
      onClick={() => {
        setIsFolded(!isFolded);
      }}
    >
      {label} {isFolded ? "ᐅ" : "▼"}
    </span>
  );

  const contentStr = content ? content.map(contentToListItems([])) : "";

  const result = isFolded ? (
    ""
  ) : (
    <ul>
      <RenderTree topicTree={tree} />
      {contentStr}
    </ul>
  );

  return (
    <li>
      {clickableLabel}
      {result}
    </li>
  );
};

export default FoldableListItem;
