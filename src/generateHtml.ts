import { formatFileName } from "./formatters.ts";
import { FileData2, TopicTree } from "./types.ts";

const byKey = (entry: [string, unknown], otherEntry: [string, unknown]): number => {
  if(entry[0] > otherEntry[0])  {
    return 1;
  }
  if(entry[0] < otherEntry[0])  {
    return -1;
  }
  return 0;
}

const renderTree = (topicTree: TopicTree): string => {
  const listStr = Object.entries(topicTree).sort(byKey).map(([entryKey, entryVal]) => {
    const { pathSegments, content, name, ...rest } = entryVal as
      | TopicTree
      | FileData2;
    const contentStr = content ? `<ul><li>${content}</li></ul>` : "";
    const hasRest = Object.keys(rest).length > 0;
    return hasRest
      ? `<li>${entryKey}<ul>${renderTree(rest)}</ul></li>\n`
      : `<li>${formatFileName(entryKey)} ${contentStr}</li>\n`;
  });
  return `${listStr.join("")}\n`;
};

const generateHtml = (topicTree: TopicTree) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codestar learning</title>
    <style>
html, body {
  font-family: sans-serif;
}    
    </style>
</head>
<body>
    ${renderTree(topicTree)} 
</body>
</html>`;

export default generateHtml;