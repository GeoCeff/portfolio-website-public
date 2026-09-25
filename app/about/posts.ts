export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; width: number; height: number; caption?: string };

export type AboutPost = {
  slug: string;
  topic: string;
  title: string;
  date: string;
  excerpt: string;
  blocks: PostBlock[];
};

export const aboutPosts: AboutPost[] = [];
