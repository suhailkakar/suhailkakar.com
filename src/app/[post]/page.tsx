import Badge from "@/components/badge";
import ImagePreview from "@/components/image-preview";
import { HASHNODE_API } from "@/constants";
import formatDate from "@/lib/format-date";
import { GET_POST_BY_SLUG } from "@/lib/gql";
import { Tag, Post } from "@/lib/types";
import Image from "next/image";
import React from "react";

async function getPost(postSlug: string): Promise<Post> {
  const res = await fetch(HASHNODE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_POST_BY_SLUG,
      variables: { slug: postSlug },
    }),
  });

  const { data } = await res.json();
  return data.publication.post;
}

export default async function Page({ params }: { params: { post: string } }) {
  const postSlug = params.post;

  const post = await getPost(postSlug);

  return (
    <main className="min-h-screen relative pt-20">
      <section className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h1 className="text-xl sm:text-3xl font-bold">{post.title}</h1>
        <p className="my-2 text-sm leading-7 text-slate-500  ">
          {formatDate(post.publishedAt)} <span className="mx-2">•</span>{" "}
          {post.readTimeInMinutes} min read
        </p>
        {post.tags.map((tag: Tag) => (
          <Badge
            label={tag.name}
            key={tag.name}
            className={"absolute -top-6 right-0 md:static mb-2 mr-4"}
          />
        ))}
        <div className="relative my-2">
        <ImagePreview title={post.title} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-[#ffffff90] rounded-2xl" />
        </div>
        <article className="text-sm leading-7 text-slate-500 prose max-w-none my-4">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          ></div>
        </article>
      </section>
    </main>
  );
}
