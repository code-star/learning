import { Node } from "markdown_tree";

// TODO use recursion and type guards
export function digForHeadingContent(n: Node): string[] {
  if (!n.children) {
    // throw Error("no children");
    // console.log(n, "no children");
    return [];
  }
  const headings = n.children
    .filter((h) => h.props)
    .filter((h) => h.props && h.props.type === "heading")
    .flatMap((h) => h.children)
    .filter((h) => h && h.props && h.props.type === "text")
    // @ts-expect-error
    .map((t) => t && t.props && t.props.content);
  return headings;
  // if (!heading) {
  //   // throw Error("no heading");
  //   // console.log("no heading");
  //   return "";
  // }
  // const t = heading.children?.find((h) => h.props && h.props.type === "text");
  // return t && t.props && t.props.content;
}
