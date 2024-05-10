export type PostExcerpt = {
  id: string;
  title: string;
  brief: string;
  url: string;
  tags: Tag[];
  publishedAt: string;
  slug: string;
};

export type Post = {
  title: string;
  content: {
    html: string;
  };
  tags: Tag[];
  publishedAt: string;
  readTimeInMinutes: number;
};

export type Tag = {
  name: string;
};
