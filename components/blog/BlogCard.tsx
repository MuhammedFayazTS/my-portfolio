import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
    title: string;
    description: string;
    url: string;
    platform: string;
    image?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    title,
    description,
    url,
    platform,
    image,
}) => {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
        group relative overflow-hidden
        rounded-lg
        border border-neutral-200 dark:border-neutral-800
        
        bg-white/60 dark:bg-neutral-900/50
        backdrop-blur-md
        
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30
      "
        >
            {/* glow background */}
            <div
                className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition-opacity duration-300
        bg-radial from-neutral-400/20 via-neutral-400/10 to-transparent
        dark:from-white/10 dark:via-white/5
      "
            />

            {image && (
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
                    />
                </div>
            )}

            <div className="relative p-5 flex flex-col gap-3">
                <h3
                    className="
          text-lg font-semibold
          text-neutral-800 dark:text-neutral-200
          group-hover:text-neutral-900 dark:group-hover:text-white
          transition-colors
        "
                >
                    {title}
                </h3>

                <p className="text-sm text-neutral-500 line-clamp-3">
                    {description}
                </p>

                <div className="flex items-center justify-between pt-2">
                    <span
                        className="
            text-xs px-2.5 py-1
            rounded-md
            border border-neutral-200 dark:border-neutral-800
            bg-white/70 dark:bg-neutral-800/50
            text-neutral-600 dark:text-neutral-400
          "
                    >
                        {platform}
                    </span>

                    <span
                        className="
            flex items-center gap-1
            text-sm font-medium
            text-neutral-500
            group-hover:text-neutral-900
            dark:group-hover:text-white
            transition-colors
          "
                    >
                        Read
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;