import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
    title: string;
    description: string;
    url: string;
    platform: string;
    image?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, url, platform, image }) => {
    return (
        <div className="bg-gray-100 dark:bg-neutral-900 border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            {image && (
                <div className="relative w-full h-48">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
            )}
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
                <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 mt-4 inline-block text-sm font-semibold"
                >
                    Read more
                </Link>
                <span className="text-xs text-gray-500 block mt-2">- {platform}</span>
            </div>
        </div>
    );
};

export default BlogCard;
