import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { client } from "@/lib/sanity-client";
import { RichTextComponents } from "@/components/blog/RichTextComponents";
import { urlFor } from "@/lib/sanity-helper";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);

    const postImageUrl = post.image
        ? urlFor(post.image)?.width(1200).height(700).url()
        : null;

    return (
        <main className="max-w-5xl mx-auto px-6 pb-12 pt-24">
            {/* Back Button */}

            <Link
                href="/blogs"
                className="
        inline-flex items-center gap-2
        text-sm
        text-neutral-500
        hover:text-neutral-900
        dark:text-neutral-400
        dark:hover:text-white
        transition-colors
        mb-10
      "
            >
                <ArrowLeft className="w-4 h-4" />
                Back to blogs
            </Link>

            {/* Title */}

            <header className="mb-10 space-y-4">
                <h1
                    className="
          text-4xl md:text-5xl
          font-bold
          tracking-tight
          text-neutral-900
          dark:text-white
        "
                >
                    {post.title}
                </h1>

                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Published{" "}
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            </header>

            {/* Hero Image */}

            {postImageUrl && (
                <div
                    className="
          relative mb-12
          overflow-hidden
          rounded-xl
          border border-neutral-200 dark:border-neutral-800
        "
                >
                    <Image
                        src={postImageUrl}
                        alt={post.title}
                        width={1200}
                        height={700}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            )}

            {/* Article */}

            <article
                className="
        max-w-none
        
        text-neutral-700
        dark:text-neutral-300
        
        leading-relaxed
        
        [&>*]:scroll-mt-24
      "
            >
                {Array.isArray(post.body) && (
                    <PortableText value={post.body} components={RichTextComponents} />
                )}
            </article>
        </main>
    );
}