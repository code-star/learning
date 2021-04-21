import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import { CustomNode } from "../../types.ts";
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
) => (
  <li style={{ cursor: "help" }} title={c.paragraph.join(" ")}>
    📚 {c.heading} <a href={pathSegments.join("/")}>details</a>
  </li>
);

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
