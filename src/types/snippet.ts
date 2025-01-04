export interface Tag {
  name: string;
  color: string;
}

export interface Snippet {
  id: number;
  title: string;
  code: string;
  language: string;
  description: string;
  author: string;
  tags: Tag[];
  topics: string[];
  created: string;
  lineNumbers: boolean;
}