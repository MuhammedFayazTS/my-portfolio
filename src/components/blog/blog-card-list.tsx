import React from 'react';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { ArrowRight } from 'lucide-react';

import { type SanityDocument } from "next-sanity";

interface BlogCardListProps {
    posts: SanityDocument[];
    isLatestBlogs?: boolean;
}

const BlogCardList: React.FC<BlogCardListProps> = ({ posts, isLatestBlogs = false }) => {

    return (
        <>
            {isLatestBlogs && (
                <div id="blogs" className="flex gap-x-2 mt-5">
                    <span className="w-fit p-2 text-xs mb-5 cursor-pointer bg-gray-100 dark:bg-gray-900/50 dark:hover:bg-gray-800/50 hover:bg-gray-200 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 text-gray-500 dark:text-gray-400 rounded">
                        Latest Blogs
                    </span>
                    <Separator className="flex-1 mt-4" />
                </div>
            )}

            <ul className="space-y-6">
                {posts?.map((post, idx) => (
                    <li key={post._id}>
                        <Link
                            href={`/blogs/${post.slug.current}`}
                            className="block group"
                        >
                            <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-sm text-muted-foreground mt-1">
                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                        </Link>

                        {/* Add separator under each item except last */}
                        {idx !== posts.length - 1 && (
                            <Separator className="mt-4" />
                        )}
                    </li>
                ))}
            </ul>

            {isLatestBlogs && (
                <Link
                    href="/blogs"
                    className="mt-8 text-center inline-flex justify-center items-center gap-x-1 text-gray-300 hover:text-blue-500"
                >
                    View More
                    <ArrowRight className="w-4 h-4" />
                </Link>
            )}
        </>
    );
};

export default BlogCardList;
