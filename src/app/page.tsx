import Hero from "@/components/hero";
import PostTile from "@/components/post-tile";
import { HASHNODE_API } from "@/constants";
import { GET_POST } from "@/lib/gql";
import { type PostExcerpt } from "@/lib/types";
import Link from "next/link";

async function getPosts(): Promise<PostExcerpt[]> {
  const res = await fetch(HASHNODE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GET_POST }),
  });

  const { data } = await res.json();

  const posts = data.publication.posts.edges.map((edge: any) => edge.node);

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen relative">
      <Hero />
      <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        {posts.map((post: PostExcerpt) => (
         <Link href={`/${post.slug}`} key={post.id} legacyBehavior >
          <PostTile key={post.id} post={post} />
          </Link>
        ))}
      </section>
    </main>
  );
}
