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
  features: {
    tableOfContents: {
      items: {
        id: string;
        level: number;
        slug: string;
        title: string;
        parentId: string;
      }[];
    };
  };
};

export type Tag = {
  name: string;
};
