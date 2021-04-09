export const formatFileName = (fileName: string): string => {
  if (fileName.indexOf(".md") > 0) {
    return `<strong>${fileName.substr(0, fileName.indexOf(".md"))}</strong>`;
  }
  return fileName;
};

export const formatLeaf = ([fileName, obj]: [string, unknown]) => {
  const { path, name, content, ...rest2 } = obj as any;
  const contentStr = content ? `<ul><li>${content}</li></ul>` : "";
  return `<li>${formatFileName(fileName)} ${contentStr}</li>`;
};
