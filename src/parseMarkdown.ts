import { Node } from "markdown_tree";

interface CustomNode {
  type: "topic-content";
  heading: string;
  paragraph: string[];
}

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
}

const reduceNodesToGroup = (acc: CustomNode[], next: Node | CustomNode): CustomNode[] => {
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
    console.error("no group exists");
  }
  return acc;
};

export function digForHeadingContent(n: Node): string[] {
  if (!n.children) {
    return [];
  }

  const newNode = n.children
    .map((child): CustomNode | Node => {
      const heading =
        child?.props?.type === "heading" &&
        child.children
          ?.filter((h) => h && h.props && h.props.type === "text")
          .map((t) => t && t.props && (t.props as any).content)
          .join();
      // const heading = y ? y : false;
      // if (heading) {
      //   return heading;
      // }
      // return child;
      return heading ? { type: "topic-content", heading, paragraph: [] } : child;
    })
    .reduce(reduceNodesToGroup, []);
  console.log(newNode);

  // TODO Fix this garbage
  const headings = n.children
    .filter((h) => h.props)
    .filter((h) => h.props && h.props.type === "heading")
    .flatMap((h) => h.children)
    .filter((h) => h && h.props && h.props.type === "text")
    // @ts-expect-error
    .map((t) => t && t.props && t.props.content);
  // console.log(n, headings);
  return headings;
  // if (!heading) {
  //   // throw Error("no heading");
  //   // console.log("no heading");
  //   return "";
  // }
  // const t = heading.children?.find((h) => h.props && h.props.type === "text");
  // return t && t.props && t.props.content;
}
