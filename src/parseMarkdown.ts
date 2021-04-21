import { Node } from "markdown_tree";
// import { Node } from "./treetest.ts";
import { CustomNode } from "./types.ts";

const isCustomNode = (n: Node | CustomNode): n is CustomNode => {
  return (n as CustomNode).type && (n as CustomNode).type === "topic-content";
};

const reduceNodesToGroup = (
  acc: CustomNode[],
  next: Node | CustomNode
): CustomNode[] => {
  if (isCustomNode(next)) {
    acc.push(next);
    return acc;
  }
  const last = acc[acc.length - 1];
  if (last) {
    last.section += next.xml("html", Node.HTMLHelper());
  } else {
    console.error("no group exists", acc, next);
  }
  return acc;
};

const getHeadingContent = (n: Node) => {
  return n.children
    ?.filter((h) => h && h.props && h.props.type === "text")
    .map((t) => t && t.props && (t.props as any).content)
    .join();
};

export function digForHeadingContent(n: Node): CustomNode[] {
  if (!n.children) {
    return [];
  }

  const newNode = n.children
    .map((child): CustomNode | Node => {
      const heading =
        child?.props?.type === "heading" && getHeadingContent(child);
      return heading ? { type: "topic-content", heading, section: "" } : child;
    })
    .reduce(reduceNodesToGroup, []);
  return newNode;
}
