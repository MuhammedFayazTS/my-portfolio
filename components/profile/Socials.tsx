import { quickSocials } from "@/content/data";
import Link from "next/link";
import { Icon } from "../common/Icons";

const brandStyles: Record<
    string,
    {
        border: string;
        shadow: string;
        hoverBorder: string;
        hoverBg: string;
        shine: string;
        icon: string;
    }
> = {
    github: {
        border: "border-neutral-300 dark:border-neutral-700",
        shadow: "hover:shadow-neutral-400/30 dark:hover:shadow-white/20",
        hoverBorder: "hover:border-neutral-500 dark:hover:border-white/30",
        hoverBg: "hover:from-neutral-200/40 hover:to-neutral-300/10 dark:hover:from-white/10 dark:hover:to-black/40",
        shine: "via-neutral-300/30 dark:via-white/10",
        icon: "text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white",
    },

    linkedin: {
        border: "border-blue-500/30 dark:border-blue-500/20",
        shadow: "hover:shadow-blue-500/30",
        hoverBorder: "hover:border-blue-500/60",
        hoverBg: "hover:from-blue-500/10 hover:to-transparent",
        shine: "via-blue-400/20",
        icon: "text-blue-600 dark:text-blue-500 group-hover:text-blue-500 dark:group-hover:text-blue-400",
    },

    mail: {
        border: "border-red-500/30 dark:border-red-500/20",
        shadow: "hover:shadow-red-500/30",
        hoverBorder: "hover:border-red-500/60",
        hoverBg: "hover:from-red-500/10 hover:to-transparent",
        shine: "via-red-400/20",
        icon: "text-red-600 dark:text-red-500 group-hover:text-red-500 dark:group-hover:text-red-400",
    },
};

const Socials = () => {
    return (
        <div className="flex items-center justify-center gap-2 mt-4">
            {quickSocials.map(({ iconName, url }) => {
                const style = brandStyles[iconName] ?? brandStyles.github;

                return (
                    <Link
                        key={iconName}
                        href={url}
                        target="_blank"
                        className={`
              size-10 flex items-center justify-center
              rounded-full backdrop-blur-md

              bg-gradient-to-tr
              from-white/70 to-white/40
              dark:from-neutral-900/70 dark:to-neutral-900/40

              border ${style.border}

              shadow-sm hover:shadow-lg ${style.shadow}

              hover:scale-110 hover:rotate-3
              active:scale-95 active:rotate-0

              transition-all duration-300 ease-out
              cursor-pointer group relative overflow-hidden

              ${style.hoverBorder} ${style.hoverBg}
            `}
                    >
                        {/* shine sweep */}
                        <div
                            className={`
                absolute inset-0
                bg-gradient-to-r from-transparent ${style.shine} to-transparent
                -translate-x-full group-hover:translate-x-full
                transition-transform duration-700 ease-out
              `}
                        />

                        <Icon
                            iconName={iconName}
                            className={`relative z-10 w-4 h-4 ${style.icon} transition-colors duration-300`}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;