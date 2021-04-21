export interface RawFileData {
  content: string;
  name: string;
  path: string;
}

export interface FileData {
  content: string;
  name: string;
  pathSegments: string[];
}

export interface TopicTree {
  // TODO fix recursive type
  [key: string]: any; // TopicTree | FileData;
}
