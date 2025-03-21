import React from "react";
import { ModeToggle } from "./mode-toggle";

const Header = () => {

    return (
        <header className="w-full flex justify-center">
            <div className="w-11/12 sm:w-10/12 md:w-7/12 xl:w-5/12 py-5 flex justify-between items-center">
                <ul className="flex items-center gap-x-2 text-sm font-semibold">
                    <li className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Blog</li>
                    <li className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Projects</li>
                    <li className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Contact</li>
                </ul>
                <div className="flex gap-x-2 items-center">
                    {/* <Bot className="w-5 h-5 text-gray-300" /> */}
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
