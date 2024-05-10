import Badge from "@/components/badge";
import formatDate from "@/lib/format-date";
import truncate from "@/lib/truncate";
import { PostExcerpt, Tag } from "@/lib/types";
import Image from "next/image";
import ImagePreview from "./image-preview";

export default function PostTile({ post }: { post: PostExcerpt }) {
  return (
      <article className="md:flex cursor-pointer">
        <h2 className="content-date h-full mt-px">
          <a>{formatDate(post.publishedAt)}</a>
        </h2>
        <div className="content-block pb-20">
          <div className="feed-border"></div>
          <div className="feed-dot"></div>
          {post.tags.map((tag:Tag) => (
            <Badge
              label={tag.name}
              key={tag.name}
              className={"absolute -top-6 right-0 md:static mb-4 mr-4"}
            />
          ))}
          <h1 className="text-xl sm:text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm leading-7 text-slate-500 prose max-w-none">
            {truncate(post.brief, 160)}
          </p>
          <div className="mt-4 relative">
            <ImagePreview title={post.title} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-[#ffffff90] rounded-2xl" />
          </div>
        </div>
      </article>
  );
}
