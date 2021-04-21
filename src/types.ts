export interface CustomNode {
  type: "topic-content";
  heading: string;
  section: string;
}

export interface RawFileData {
  content: CustomNode[];
  name: string;
  path: string;
}

export interface FileData {
  content: CustomNode[];
  name: string;
  pathSegments: string[];
}

export interface TopicTree {
  // TODO fix recursive type
  [key: string]: any; // TopicTree | FileData;
}
