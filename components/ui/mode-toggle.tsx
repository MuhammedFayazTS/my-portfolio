"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
        relative
        flex items-center justify-center
        h-8 w-8
        rounded-full
        text-neutral-600 dark:text-neutral-300
        hover:text-black dark:hover:text-white
        hover:bg-neutral-200/70 dark:hover:bg-white/10
        transition-all duration-300
      "
        >
            {/* Sun */}
            <Sun
                className="
          h-[1.2rem] w-[1.2rem]
          text-amber-500
          rotate-0 scale-100
          transition-all duration-300
          dark:-rotate-90 dark:scale-0
        "
            />

            {/* Moon */}
            <Moon
                className="
          absolute
          h-[1.2rem] w-[1.2rem]
          text-indigo-400
          rotate-90 scale-0
          transition-all duration-300
          dark:rotate-0 dark:scale-100
        "
            />
        </button>
    );
}