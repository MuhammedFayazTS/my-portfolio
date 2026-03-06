import React, { FC } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Icon, iconName } from "../common/Icons";

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
            className="
      group
      flex flex-wrap items-center gap-3
      w-full min-w-0
      p-3
      rounded-lg
      border border-neutral-200 dark:border-neutral-800
      bg-white/60 dark:bg-neutral-900/60
      backdrop-blur
      transition-all duration-200
      hover:-translate-y-0.5
      hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/30
      "
        >
            {/* Thumbnail */}
            {image && (
                <div className="relative w-10 h-10 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition group-hover:scale-105"
                    />
                </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-sm font-semibold truncate">{name}</h3>
                <span className="text-xs text-neutral-500">{duration}</span>

                {/* Stack */}
                <div className="flex flex-wrap gap-1 mt-1">
                    {stack?.slice(0, 4).map((tech) => (
                        <Icon key={tech} iconName={tech} className="w-4 h-4 opacity-80" />
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-1 ml-auto opacity-60 group-hover:opacity-100 transition">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                    >
                        <Github size={16} />
                    </a>
                )}

                {live && (
                    <a
                        href={live}
                        target="_blank"
                        className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                    >
                        <ExternalLink size={16} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;