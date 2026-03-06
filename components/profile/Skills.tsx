import React from "react";
import { Icon } from "../common/Icons";
import { skills } from "@/content/data";

const Skills = () => {
    return (
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 my-6 px-8 lg:px-20">
            {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
            ))}
        </div>
    );
};

export default Skills;

type SkillCardProps = {
    name: string;
    iconName: any;
    hover?: string;
};

function SkillCard({ name, iconName, hover }: SkillCardProps) {
    return (
        <div
            className={`
        group relative overflow-hidden
        flex flex-col items-center justify-center gap-1.5
        h-20

        rounded-lg
        border border-current
        text-neutral-300 dark:text-neutral-700

        bg-white/60 dark:bg-neutral-900/50
        backdrop-blur-md

        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/30

        ${hover ?? ""}
        select-none
      `}
        >
            {/* Magic glow background */}
            <div
                className={`
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-radial from-current/20 via-current/10 to-transparent
        `}
            />

            <div className="relative transition-transform duration-300 group-hover:scale-110">
                <Icon iconName={iconName} className="w-8 h-8" />
            </div>

            <span
                className="
          relative
          text-sm font-medium
          text-neutral-600 dark:text-neutral-400
          group-hover:text-neutral-900 dark:group-hover:text-white
          transition-colors
        "
            >
                {name}
            </span>
        </div>
    );
}