export const formatFileName = (fileName) => {
    if (fileName.indexOf(".md") > 0) {
        return React.createElement("strong", null, fileName.substr(0, fileName.indexOf(".md")));
    }
    return React.createElement(React.Fragment, null, fileName);
};
export const formatLeaf = ([fileName, obj]) => {
    const { path, name, content, ...rest2 } = obj;
    const contentStr = content ? React.createElement("ul", null,
        React.createElement("li", null, content)) : "";
    return React.createElement("li", null,
        formatFileName(fileName),
        " ",
        contentStr);
};
