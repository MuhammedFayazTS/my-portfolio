import { Copyright } from "lucide-react";
import Link from "next/link";
import React from "react";
import Socials from "./profile/Socials";

const Footer = () => {
    return (
        <footer className="w-full px-6 lg:px-20 py-10 mt-20">

            {/* divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">

                {/* copyright */}
                <span className="flex items-center gap-1">
                    <Copyright className="w-3 h-3" />
                    {new Date().getFullYear()}
                    <span className="mx-1">|</span>

                    <Link
                        href="/"
                        className="
              text-neutral-600 dark:text-neutral-400
              hover:text-neutral-900 dark:hover:text-white
              transition-colors
            "
                    >
                        muhammedfayazts.xyz
                    </Link>
                </span>

                {/* socials */}
                <Socials />

            </div>

        </footer>
    );
};

export default Footer;