import Badge from "@/components/badge";
import formatDate from "@/lib/format-date";
import truncate from "@/lib/truncate";
import { PostExcerpt } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function PostTile({ post }: { post: PostExcerpt }) {
  return (
    <Link href={`/${post.slug}`}>
      <article className="md:flex">
        <h2 className="content-date h-full mt-px">
          <a>{formatDate(post.publishedAt)}</a>
        </h2>
        <div className="content-block pb-20">
          <div className="feed-border"></div>
          <div className="feed-dot"></div>
          {post.tags.map((tag) => (
            <Badge
              label={tag.name}
              key={tag.name}
              className={"absolute -top-6 right-0 md:static mb-4 mr-4"}
            />
          ))}
          <h1 className="text-xl sm:text-3xl font-bold mb-4">{post.title}</h1>
          <article className="text-sm leading-7 text-slate-500 prose max-w-none">
            {truncate(post.brief, 160)}
          </article>
          <div className="mt-4 relative">
            <Image
              src={"https://suhailkakar-com.vercel.app/og?title=" + post.title}
              alt={post.title}
              height={1200}
              width={630}
              className={"object-cover rounded-2xl w-full my-4"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-[#ffffff90] rounded-2xl" />
          </div>
        </div>
      </article>
    </Link>
  );
}
