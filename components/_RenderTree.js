import { formatFileName } from "../utils/_formatters.js";
import FoldableListItem, { contentToListItems } from "./_FoldableListItem.js";
const byKey = (entry, otherEntry) => {
    if (entry[0] > otherEntry[0]) {
        return 1;
    }
    if (entry[0] < otherEntry[0]) {
        return -1;
    }
    return 0;
};
const distillFileData = (node) => {
    const { pathSegments, content, name, ...rest } = node;
    const fileData = { content, name, pathSegments };
    return [fileData, rest];
};
const RenderTree = ({ topicTree }) => {
    const listStr = Object.entries(topicTree)
        .sort(byKey)
        .map(([entryKey, entryVal]) => {
        const [fileData, rest] = distillFileData(entryVal);
        const { pathSegments, content, name } = fileData;
        const contentStr = content ? (React.createElement("ul", null, content.map(contentToListItems(pathSegments)))) : ("");
        const hasRest = Object.keys(rest).length > 0;
        return hasRest ? (React.createElement(FoldableListItem, { label: entryKey, content: content, tree: rest })) : (React.createElement("li", null,
            formatFileName(entryKey),
            " ",
            contentStr));
    });
    return React.createElement(React.Fragment, null, listStr);
};
export default RenderTree;
