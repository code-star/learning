import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";

export const formatFileName = (fileName: string): JSX.Element => {
  if (fileName.indexOf(".md") > 0) {
    return <strong>{fileName.substr(0, fileName.indexOf(".md"))}</strong>;
  }
  return <>{fileName}</>;
};

export const formatLeaf = ([fileName, obj]: [string, unknown]): JSX.Element => {
  const { path, name, content, ...rest2 } = obj as any;
  const contentStr = content ? <ul><li>{content}</li></ul> : "";
  return <li>{formatFileName(fileName)} {contentStr}</li>;
};
