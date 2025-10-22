import React, { FC } from "react";
import { Icon, iconName } from "@/assets/icons/icons";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    name: string;
    duration: string;
    image?: string;
    stack: iconName[];
    github?: string;
    live?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
    name,
    duration,
    stack,
    github,
    live,
    image,
}) => {
    return (
        <div
            className="group flex items-center justify-between border-b border-gray-300 dark:border-gray-700 py-4 px-2 hover:bg-gray-100 dark:hover:bg-gray-800/40 transition-all duration-200"
        >
            {/* Left section */}
            <div className="flex items-center gap-4">
                {image && (
                    <div className="w-16 h-16 relative flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                            sizes="36px"
                        />
                    </div>
                )}
                <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        {duration}
                    </span>
                    <div className="flex gap-2 mt-1">
                        {stack.map((tech) => (
                            <Icon key={tech} iconName={tech} className="w-4 h-4" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center text-xs">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                    >
                        <Github size={14} /> Code
                    </a>
                )}
                {live && (
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                    >
                        <ExternalLink size={14} /> Live
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
