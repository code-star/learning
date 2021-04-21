const cardStyle = {
    display: "block",
    padding: "0.1rem 1rem 1rem",
    margin: "0.5rem 0 1rem",
};
const ContentListItem = ({ pathSegments, node }) => {
    const [isFolded, setIsFolded] = React.useState(true);
    const onClick = (ev) => {
        ev.preventDefault();
        setIsFolded(!isFolded);
    };
    const details = isFolded ? ("") : (React.createElement("div", { className: "aside_card", style: cardStyle, dangerouslySetInnerHTML: { __html: node.section } }));
    return (React.createElement("li", null,
        "\uD83D\uDCDA ",
        node.heading,
        " ",
        React.createElement("a", { onClick: onClick, href: pathSegments.join("/") }, "details"),
        details));
};
export default ContentListItem;
