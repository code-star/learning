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

// const foo = (pathSegments: string[]): string => {
//   console.log(pathSegments[0], pathSegments);
//   if (pathSegments.length <= 1) {
//     return pathSegments[0];
//   }
//   return foo(pathSegments.slice(1));
// };

// console.log(foo(["a", "b", "c"]));

// gegeven een acc en een pathSegments
//   als pathSegment length = 1
//   dan assign acc[pathSegments[0]] = fd
//   en return
// als pathSegments length > 1
//   dan acc[pathSegments[0]]
//   en ... pathSegments.slice(1)
//   en ...

// const bar = (
//   pathSegments: string[],
//   acc: TopicTree,
//   fd: FileData2
// ): TopicTree => {
//   console.log(pathSegments[0], pathSegments);
//   if (pathSegments.length < 1) {
//     return acc;
//   }
//   if (pathSegments.length === 1) {
//     acc[pathSegments[0]] = fd;
//     // return pathSegments[0];
//     return acc;
//   }
//   return bar(pathSegments.slice(1), acc, fd);
// };

const reduceSegmentsToLeaf = (fileData: FileData2) => (ref: TopicTree, seg: string, index: number, segments: string[]) => {
  const isLastSegment = segments.length === index + 1;

  if(!ref[seg]) {
    ref[seg] = {};
  }

  // If the leaf
  if(isLastSegment) {
    ref[seg] = fileData;
  // Otherwise, dig further
  } else {
    ref = ref[seg];
  }

  return ref;
}

const reduceToTree = (acc: TopicTree, nextFileData: FileData2) => {
  const { pathSegments, ...rest } = nextFileData;
  // console.log(bar(pathSegments, acc, nextFileData));

  // if (pathSegments.length === 3) {
  //   if (!acc[pathSegments[0]]) {
  //     acc[pathSegments[0]] = {};
  //   }
  //   if (!acc[pathSegments[0]][pathSegments[1]]) {
  //     acc[pathSegments[0]][pathSegments[1]] = {};
  //   }
  //   acc[pathSegments[0]][pathSegments[1]][pathSegments[2]] = nextFileData;
  // }
  // if (pathSegments.length === 2) {
  //   if (!acc[pathSegments[0]]) {
  //     acc[pathSegments[0]] = {};
  //   }
  //   acc[pathSegments[0]][pathSegments[1]] = nextFileData;
  // }
  // if (pathSegments.length === 1) {
  //   acc[pathSegments[0]] = nextFileData;
  // }

  // let ref = acc;

  // pathSegments.forEach((seg, index) => {
  //   if(!ref[seg]) {
  //     ref[seg] = {};
  //   }

  //   // If the leaf
  //   if(pathSegments.length === index + 1) {
  //     ref[seg] = nextFileData;
  //   // Otherwise, dig
  //   } else {
  //     ref = ref[seg];
  //   }
  // });

  // return acc;

  pathSegments.reduce(reduceSegmentsToLeaf(nextFileData), acc);
  return acc;
};

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
