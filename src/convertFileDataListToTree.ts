import { FileData, FileData2, TopicTree } from "./types.ts";

// // { someString: someFileData2 }
// const tt1: TopicTree = {
//   foo: {
//     name: "a",
//     content: "b",
//     pathSegments: [],
//   },
// };

// // { someString: { someString: someFileData2 } }
// const tt2: TopicTree = {
//   foo: {
//     bar: {
//       name: "a",
//       content: "b",
//       pathSegments: [],
//     },
//   },
// };

// // failing: { someString: { someString: { someString: someFileData2 } } }
// const tt3: TopicTree = {
//   foo: {
//     bar: {
//       baz: {
//         name: "a",
//         content: "b",
//         pathSegments: [],
//       },
//     },
//   },
// };

// const tt3name = tt3.foo.bar.name;

const reduceToTree = (acc: TopicTree, next: FileData2) => {
  const { pathSegments, ...rest } = next;
  //   TODO use recursion
  if (pathSegments.length === 3) {
    if (!acc[pathSegments[0]]) {
      acc[pathSegments[0]] = {};
    }
    if (!acc[pathSegments[0]][pathSegments[1]]) {
      acc[pathSegments[0]][pathSegments[1]] = {};
    }
    acc[pathSegments[0]][pathSegments[1]][pathSegments[2]] = next;
  }
  if (pathSegments.length === 2) {
    if (!acc[pathSegments[0]]) {
      acc[pathSegments[0]] = {};
    }
    acc[pathSegments[0]][pathSegments[1]] = next;
  }
  if (pathSegments.length === 1) {
    acc[pathSegments[0]] = next;
  }
  return acc;
}

const convertFileDataListToTree = (fileDataList: FileData[]) =>
  fileDataList
    .map(
      ({ path, ...rest }): FileData2 => {
        const pathSegments = path.split("/");
        return {
          ...rest,
          pathSegments,
        };
      }
    )
    .reduce(reduceToTree, {} as TopicTree);

export default convertFileDataListToTree;