import React from 'react';
import BlogCard from './blog-card';
import { Separator } from './ui/separator';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Blog {
    id: number;
    title: string;
    description: string;
    url: string;
    platform: string;
    image?: string;
}

interface BlogCardListProps {
    blogs: Blog[];
    limit?: number
    isLatestBlogs?: boolean;
}

const BlogCardList: React.FC<BlogCardListProps> = ({ blogs, limit, isLatestBlogs = false }) => {
    return (
        <>
            {isLatestBlogs && <div id='blogs' className='flex gap-x-2 mt-5'>
                <span className='w-fit p-2 text-xs mb-5 cursor-pointer bg-gray-100 dark:bg-gray-900/50 dark:hover:bg-gray-800/50 hover:bg-gray-200 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 text-gray-500 dark:text-gray-400 rounded'>
                    Latest Blogs
                </span>
                <Separator className='flex-1 mt-4' />
            </div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(limit ? blogs.slice(0, limit) : blogs).map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        url={blog.url}
                        platform={blog.platform}
                        image={blog.image}
                    />
                ))}
            </div>
            {isLatestBlogs && <Link href={'/blogs'} className='mt-8 text-center inline-flex justify-center items-center gap-x-1 text-gray-300 hover:text-blue-500'>
                View More
                <ArrowRight className='w-4 h-4' />
            </Link>}
        </>
    );
};

export default BlogCardList;
