import { formatLeaf } from "./formatters.ts";

const generateHtml = (resultsTree: any) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codestar learning</title>
</head>
<body>
    ${Object.entries(resultsTree)
      .map(([name1, x]) => {
        const { path, name, content, ...rest } = x as any;
        const y = rest
          ? Object.entries(rest)
              .map(([name2, y1]) => {
                const { path, name, content, ...rest1 } = y1 as any;
                const z = rest1
                  ? Object.entries(rest1).map(formatLeaf).join("")
                  : "";
                return `<li>${name2}<ul>${z}</ul></li>`;
              })
              .join("")
          : "";
        return `<li>${name1}<ul>${y}</ul></li>`;
      })
      .join("")}
</body>
</html>`;

export default generateHtml;