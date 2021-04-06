// import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
// import { Marked, Renderer } from "markdown";
// import { Node } from "https://deno.land/x/markdown_tree@1.1.0/mod.ts";
import { Node } from "markdown_tree";

const decoder = new TextDecoder("utf-8");
const filename = Deno.args[0];
// console.log(await Deno.readFile(filename));
const markdown = decoder.decode(await Deno.readFile(filename));
// console.log(markdown);
// Marked.setOptions({
//     renderer: new Renderer()
// });
// const markup = Marked.parse(markdown);
// console.log(markup.content);
// console.log(JSON.stringify(markup.meta));
const x = Node.from(markdown);

// TODO use recursion and type guards
function digForHeadingContent(n: Node) {
    if(!n.children) {
        throw Error("no children");
    }
    const heading = n.children.filter(h => h.props).find(h => h.props && h.props.type === "heading");
    if(!heading) {
        throw Error("no heading");
    }
    const t = heading.children?.find(h => h.props && h.props.type === "text");
    // @ts-ignore
    return t.props && t.props.content;
}

console.log(digForHeadingContent(x));
