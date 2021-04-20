import RenderTree from "./_RenderTree.js";
const FoldableListItem = ({ label, tree }) => {
    const [isFolded, setIsFolded] = React.useState(true);
    const clickableLabel = (React.createElement("span", { onClick: () => {
            setIsFolded(!isFolded);
        } },
        label,
        " ",
        isFolded ? "ᐅ" : "▼"));
    const result = isFolded ? ("") : (React.createElement("ul", null,
        React.createElement(RenderTree, { topicTree: tree })));
    return (React.createElement("li", null,
        clickableLabel,
        result));
};
export default FoldableListItem;
