import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type SanityDocument } from "next-sanity";
import { cn } from "@/lib/utils";

interface BlogCardListProps {
    posts: SanityDocument[];
    isLatestBlogs?: boolean;
}

const BlogCardList: React.FC<BlogCardListProps> = ({
    posts,
    isLatestBlogs = false,
}) => {
    return (
        <div className={cn("w-full space-y-8", isLatestBlogs && "px-6 lg:px-20")}>
            {isLatestBlogs && (
                <div id="blogs" className="flex items-center gap-3">
                    <span
                        className="
            text-xs font-medium
            px-3 py-1.5
            rounded-md
            border border-neutral-200 dark:border-neutral-800
            bg-white/60 dark:bg-neutral-900/50
            backdrop-blur-md
            text-neutral-600 dark:text-neutral-400
          "
                    >
                        Latest Blogs
                    </span>

                    <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
                </div>
            )}

            <div
                className="
    grid gap-5
    grid-cols-1
    sm:grid-cols-2
  "
            >
                {posts?.map((post) => (
                    <Link
                        key={post._id}
                        href={`/blogs/${post.slug.current}`}
                        className="
              group relative overflow-hidden
              p-5 h-full

              rounded-lg
              border border-neutral-200 dark:border-neutral-800

              bg-white/60 dark:bg-neutral-900/50
              backdrop-blur-md

              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30
            "
                    >
                        {/* glow */}
                        <div
                            className="
              absolute inset-0 opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
              bg-radial from-neutral-400/20 via-neutral-400/10 to-transparent
              dark:from-white/10 dark:via-white/5
            "
                        />

                        <div className="relative flex flex-col h-full justify-between">
                            <div>
                                <h2
                                    className="
                  text-lg font-semibold
                  text-neutral-800 dark:text-neutral-200
                  group-hover:text-neutral-900 dark:group-hover:text-white
                  transition-colors
                "
                                >
                                    {post.title}
                                </h2>

                                <p className="text-sm text-neutral-500 mt-2">
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>

                            <div className="mt-6 flex items-center text-sm text-neutral-500 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                                Read article
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {isLatestBlogs && (
                <div className="flex justify-center pt-2">
                    <Link
                        href="/blogs"
                        className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-neutral-500 dark:text-neutral-400
            hover:text-neutral-900 dark:hover:text-white
            transition-colors
          "
                    >
                        View All Blogs
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default BlogCardList;