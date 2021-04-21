import RenderTree from "./_RenderTree.js";
export const contentToListItems = (pathSegments) => (c) => (React.createElement("li", { style: { cursor: "help" }, title: c.paragraph.join("\n") },
    "\uD83D\uDCDA ",
    c.heading,
    " ",
    React.createElement("a", { href: pathSegments.join("/") }, "details")));
const FoldableListItem = ({ label, content, tree }) => {
    const [isFolded, setIsFolded] = React.useState(true);
    const clickableLabel = (React.createElement("span", { style: { cursor: "pointer" }, onClick: () => {
            setIsFolded(!isFolded);
        } },
        label,
        " ",
        isFolded ? "ᐅ" : "▼"));
    const contentStr = content ? content.map(contentToListItems([])) : "";
    const result = isFolded ? ("") : (React.createElement("ul", null,
        React.createElement(RenderTree, { topicTree: tree }),
        contentStr));
    return (React.createElement("li", null,
        clickableLabel,
        result));
};
export default FoldableListItem;
