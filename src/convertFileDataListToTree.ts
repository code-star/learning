import { FileData } from "./types.ts";

const convertFileDataListToTree = (fileDataList: FileData[]) => fileDataList
.map(({ path, ...rest }) => {
  const x = path.split("/");
  return {
    ...rest,
    path: x,
  };
})
.reduce((acc, next) => {
  const { path, ...rest } = next;
  if (path.length === 3) {
    if (!acc[path[0]]) {
      acc[path[0]] = {};
    }
    if (!acc[path[0]][path[1]]) {
      acc[path[0]][path[1]] = {};
    }
    acc[path[0]][path[1]][path[2]] = next;
  }
  if (path.length === 2) {
    if (!acc[path[0]]) {
      acc[path[0]] = {};
    }
    acc[path[0]][path[1]] = next;
  }
  if (path.length === 1) {
    acc[path[0]] = next;
  }
  return acc;
}, {} as any);

export default convertFileDataListToTree;