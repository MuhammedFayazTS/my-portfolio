import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import ChatBotToggleButton from "./chatbot-toggle";

const Header = () => {

    return (
        <header className="w-full flex justify-center">
            <div className="w-11/12 sm:w-10/12 md:w-7/12 xl:w-5/12 py-5 flex justify-between items-center">
                <ul className="flex items-center gap-x-2 text-sm font-semibold">
                    <Link href={'/blogs'} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Blog</Link>
                    <Link href={'/projects'} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Projects</Link>
                    <Link href={'/#contact'} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Contact</Link>
                </ul>
                <div className="flex gap-x-2 items-center">
                    <ChatBotToggleButton />
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
