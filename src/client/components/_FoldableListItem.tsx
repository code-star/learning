import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import RenderTree from "./_RenderTree.tsx";

interface Props {
  label: string;
  content: string[];
  tree: {
    [key: string]: any;
  };
}

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

  // TODO deduplicate with similar snippet in RenderTree
  const contentStr = content ? content.map(c => <li>📚 {c}</li>) : "";

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
