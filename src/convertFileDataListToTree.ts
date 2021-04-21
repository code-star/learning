import { RawFileData, FileData, TopicTree } from "./types.ts";

const reduceSegmentsToLeaf = (fileData: FileData) => (
  ref: TopicTree,
  seg: string,
  index: number,
  segments: string[]
) => {
  const isLastSegment = segments.length === index + 1;

  if(!ref[seg]) {
    ref[seg] = {};
  }

  // If the leaf
  if (isLastSegment) {
    ref[seg] = {
      ...ref[seg],
      ...fileData,
    };
    // Otherwise, dig further
  } else {
    ref = ref[seg];
  }

  return ref;
};

const reduceToTree = (acc: TopicTree, nextFileData: FileData) => {
  const { pathSegments, ...rest } = nextFileData;

  pathSegments.reduce(reduceSegmentsToLeaf(nextFileData), acc);
  return acc;
};

const convertFileDataListToTree = (fileDataList: RawFileData[]) =>
  fileDataList
    .map(
      ({ path, ...rest }): FileData => {
        const pathSegments = path.split("/");
        return {
          ...rest,
          pathSegments,
        };
      }
    )
    .map(({ name, pathSegments, ...rest }) => {
      // TODO integrate into map above
      // Normalize files and dirs with the same name
      const newName = name.indexOf(".md") > 0 ? name.substr(0, name.indexOf(".md")) : name;
      pathSegments[pathSegments.length - 1] = newName;

      return {
        ...rest,
        name:
          newName,
          pathSegments: pathSegments
      };
    })
    .reduce(reduceToTree, {} as TopicTree);

export default convertFileDataListToTree;
