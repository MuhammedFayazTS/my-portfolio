import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
// import ChatBotToggleButton from "./chatbot/chatbot-toggle";
// import { ModeToggle } from "./ui/mode-toggle";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
];

const Header = () => {
    return (
        <header className="w-full flex justify-center fixed top-4 lg:top-6 z-[9999] pointer-events-none">

            <div
                className="
        pointer-events-auto
        flex items-center gap-6
        px-4 py-2
        rounded-full
        backdrop-blur-xl
        border border-neutral-200/60 dark:border-white/10
        bg-white/70 dark:bg-neutral-900/60
        shadow-lg shadow-black/5 dark:shadow-black/30
      "
            >
                {/* Nav Links */}
                <nav className="flex items-center gap-1 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="
              px-4 py-1.5 rounded-full
              text-neutral-600 dark:text-neutral-300
              hover:text-black dark:hover:text-white
              hover:bg-neutral-200/70 dark:hover:bg-white/10
              transition-all duration-200
              "
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Divider */}
                <div className="h-5 w-px bg-neutral-300 dark:bg-neutral-700" />

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* <ChatBotToggleButton /> */}
                    <ModeToggle />
                </div>
            </div>

        </header>
    );
};

export default Header;