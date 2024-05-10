import Badge from "@/components/badge";
import ImagePreview from "@/components/image-preview";
import TableOfContent from "@/components/toc";
import { HASHNODE_API } from "@/constants";
import formatDate from "@/lib/format-date";
import { GET_POST_BY_SLUG } from "@/lib/gql";
import { type Tag, type Post } from "@/lib/types";
import { Metadata } from "next";
import React from "react";




export async function generateMetadata({
  params,
}:{
  params: { post: string }
}): Promise<Metadata | undefined> {
  let post = await getPost(params.post)
  if (!post) {
    return;
  }

  let ogImage = `https://suhailkakar-com.vercel.app/og?title=${post.title}`

  return {
    title: post.title,
    description:post.brief,
    openGraph: {
      title : post.title,
      description : post.brief,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `https://suhailkakar.com/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title : post.title,
      description : post.brief,
      images: [ogImage],
    },
  };
}


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
         <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            description: post.brief,
            image: `https://suhailkakar-com.vercel.app/og?title=${post.title}`,
            url: `https://suhailkakar.com/${postSlug}`,
            author: {
              '@type': 'Person',
              name: 'Suhail Kakar',
            },
          }),
        }}
      />
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
      <div className="top-60 left-20 h-full w-full fixed">
       <TableOfContent items={post.features.tableOfContents.items} />
      </div>
    </main>
  );
}
