import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import RenderTree from "./_RenderTree.tsx";

interface Props {
  label: string;
  tree: {
    [key: string]: any;
  };
}

const FoldableListItem: React.FC<Props> = ({ label, tree }) => {
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

  const result = isFolded ? (
    ""
  ) : (
    <ul>
      <RenderTree topicTree={tree} />
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
