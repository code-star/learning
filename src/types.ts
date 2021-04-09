export interface FileData {
  path: string;
  name: string;
  content: string;
}

export interface FileData2 {
  name: string;
  content: string;
  pathSegments: string[];
}

export interface TopicTree {
  // TODO fix recursive type
  [key: string]: any; // TopicTree | FileData2;
}
