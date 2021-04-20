import { Node } from "markdown_tree";

// TODO use recursion and type guards
export function digForHeadingContent(n: Node): string {
  if (!n.children) {
    // throw Error("no children");
    // console.log(n, "no children");
    return "";
  }
  const heading = n.children
    .filter((h) => h.props)
    .find((h) => h.props && h.props.type === "heading");
  if (!heading) {
    // throw Error("no heading");
    // console.log("no heading");
    return "";
  }
  const t = heading.children?.find((h) => h.props && h.props.type === "text");
  // @ts-ignore
  return t && t.props && t.props.content;
}
