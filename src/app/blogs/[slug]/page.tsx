import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";
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
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-4xl p-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors mb-8"
      >
        ← Back to posts
      </Link>

      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl w-full object-cover mb-8 shadow-lg"
          width={550}
          height={310}
        />
      )}

      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
        {post.title}
      </h1>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">
        Published: {new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>

      <article className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-pre:p-0 prose-pre:bg-transparent prose-pre:m-0 max-w-none">
        {Array.isArray(post.body) && (
          <PortableText
            value={post.body}
            components={RichTextComponents}
          />
        )}
      </article>
    </main>
  );
}
