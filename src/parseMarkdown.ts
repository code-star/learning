import { Node } from "markdown_tree";
import { CustomNode } from "./types.ts";

const getContent = (n: Node): string => {
  if (n?.props?.type === "paragraph") {
    const texts = n?.children?.filter((c) => c.props?.type === "text") ?? [];
    const text = texts.map((t) => (t?.props as any).content).join(" ");
    return text;
  }
  return "*not p element, not yet supported*";
};

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
    if (!last.paragraph) {
      last.paragraph = [];
    }
    last.paragraph.push(getContent(next));
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
      // const heading = y ? y : false;
      // if (heading) {
      //   return heading;
      // }
      // return child;
      return heading
        ? { type: "topic-content", heading, paragraph: [] }
        : child;
    })
    .reduce(reduceNodesToGroup, []);
  // console.log(newNode);
  return newNode;

  // const headings = n.children
  //   .filter((h) => h.props)
  //   .filter((h) => h.props && h.props.type === "heading")
  //   .flatMap((h) => h.children)
  //   .filter((h) => h && h.props && h.props.type === "text")
  //   // @ts-expect-error
  //   .map((t) => t && t.props && t.props.content);
  // return headings;
}
