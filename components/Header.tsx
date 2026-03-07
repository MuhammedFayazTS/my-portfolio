import Link from "next/link";
import { Home, FileText, FolderKanban, Mail } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";
import { cn } from "@/lib/utils";
// import ChatBotToggleButton from "./chatbot/chatbot-toggle";

const navItems = [
    { name: "Home", href: "/", icon: Home, shouldDisplayIconOnSm: true },
    { name: "Blog", href: "/blogs", icon: FileText, shouldDisplayIconOnSm: false },
    { name: "Projects", href: "/projects", icon: FolderKanban, shouldDisplayIconOnSm: false },
    { name: "Contact", href: "/#contact", icon: Mail, shouldDisplayIconOnSm: false },
];

const Header = () => {
    return (
        <header className="w-full flex justify-center fixed top-4 lg:top-6 z-[9999] pointer-events-none">

            <div
                className="
        pointer-events-auto
        flex items-center gap-1 sm:gap-6
        px-3 py-1.5 sm:px-4 sm:py-2
        rounded-full
        backdrop-blur-xl
        border border-neutral-200/60 dark:border-white/10
        bg-white/70 dark:bg-neutral-900/60
        shadow-lg shadow-black/5 dark:shadow-black/30
      "
            >
                {/* Nav Links */}
                <nav className="flex items-center gap-1 text-xs sm:text-sm font-medium">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const onlyIcon = item.shouldDisplayIconOnSm;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="
          px-2 py-1 sm:px-4 sm:py-1.5
          rounded-full
          text-neutral-600 dark:text-neutral-300
          hover:text-black dark:hover:text-white
          hover:bg-neutral-200/70 dark:hover:bg-white/10
          transition-all duration-200
          flex items-center justify-center gap-1.5
        "
                            >
                                {/* Icon for mobile */}
                                <Icon size={16} className={onlyIcon ? "sm:hidden" : "hidden"} />

                                {/* Text for larger screens */}
                                <span className={cn("sm:inline", onlyIcon ? "hidden" : "inline")}>{item.name}</span>
                            </Link>
                        );
                    })}
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