import { formatFileName } from "../utils/_formatters.js";
import FoldableListItem from "./_FoldableListItem.js";
const byKey = (entry, otherEntry) => {
    if (entry[0] > otherEntry[0]) {
        return 1;
    }
    if (entry[0] < otherEntry[0]) {
        return -1;
    }
    return 0;
};
const RenderTree = ({ topicTree }) => {
    const listStr = Object.entries(topicTree)
        .sort(byKey)
        .map(([entryKey, entryVal]) => {
        const { pathSegments, content, name, ...rest } = entryVal;
        const contentStr = content ? (React.createElement("ul", null,
            React.createElement("li", null, content))) : ("");
        const hasRest = Object.keys(rest).length > 0;
        return hasRest ? (React.createElement(FoldableListItem, { label: entryKey, tree: rest })) : (React.createElement("li", null,
            formatFileName(entryKey),
            " ",
            contentStr));
    });
    return React.createElement(React.Fragment, null, listStr);
};
export default RenderTree;
