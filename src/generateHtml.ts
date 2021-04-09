import { formatLeaf } from "./formatters.ts";
import { FileData2, TopicTree } from "./types.ts";

const generateHtml = (resultsTree: any) => `<!DOCTYPE html>
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
    ${Object.entries(resultsTree)
      // TODO refactor to recursion
      .map(([entryKey1, entryVal1]) => {
        // TODO use entries generic with proper type instead of Record
        const { pathSegments, name, content, ...rest } = entryVal1 as Record<string, unknown>;
        const y = rest
          ? Object.entries(rest)
              .map(([entryKey2, entryVal2]) => {
                const { pathSegments, name, content, ...rest1 } = entryVal2 as Record<string, string>;
                const z = rest1
                  ? Object.entries(rest1).map(formatLeaf).join("")
                  : "";
                // TODO only add ul if z not empty
                return `<li>${entryKey2}<ul>${z}</ul></li>`;
              })
              .join("")
          : "";
        return `<li>${entryKey1}<ul>${y}</ul></li>`;
      })
      .join("")}
</body>
</html>`;

export default generateHtml;
