import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import { CustomNode } from "../../types.ts";

interface Props {
  pathSegments: string[];
  node: CustomNode;
}

const cardStyle = {
  display: "block",
  padding: "0.1rem 1rem 1rem",
  margin: "0.5rem 0 1rem",
};

const ContentListItem: React.FC<Props> = ({ pathSegments, node }) => {
  const [isFolded, setIsFolded] = React.useState(true);
  const onClick: React.DOMAttributes<HTMLAnchorElement>["onClick"] = (ev) => {
    ev.preventDefault();
    setIsFolded(!isFolded);
  };

  const details = isFolded ? (
    ""
  ) : (
    <div
      className="aside_card"
      style={cardStyle}
      dangerouslySetInnerHTML={{ __html: node.section }}
    ></div>
  );

  return (
    <li>
      📚 {node.heading}{" "}
      <a onClick={onClick} href={pathSegments.join("/")}>
        details
      </a>
      {details}
    </li>
  );
};

export default ContentListItem;
