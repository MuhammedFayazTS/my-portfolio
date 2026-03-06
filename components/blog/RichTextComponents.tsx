import Image from "next/image";
import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import { CodeBlock } from "./CodeBlock";
import { urlFor } from "@/lib/sanity-helper";

export const RichTextComponents: PortableTextComponents = {
    types: {
        code: ({ value }) => {
            return (
                <div className="my-6">
                    <CodeBlock
                        code={value.code}
                        language={value.language || "text"}
                        filename={value.filename}
                    />
                </div>
            );
        },

        image: ({ value }) => {
            if (!value?.asset) return null;

            const src = urlFor(value)?.url();
            if (!src) return null;
            return (
                <div className="my-8 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <Image
                        src={src}
                        alt={value.alt || "Image"}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                    />
                </div>
            );
        },
    },

    block: {
        h1: ({ children }) => (
            <h1 className="mt-12 mb-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {children}
            </h1>
        ),

        h2: ({ children }) => (
            <h2 className="mt-10 mb-4 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                {children}
            </h2>
        ),

        h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                {children}
            </h3>
        ),

        h4: ({ children }) => (
            <h4 className="mt-6 mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                {children}
            </h4>
        ),

        normal: ({ children }) => (
            <p className="leading-7 text-neutral-600 dark:text-neutral-400 my-4">
                {children}
            </p>
        ),

        blockquote: ({ children }) => (
            <blockquote
                className="
        my-6
        border-l-4 border-neutral-300 dark:border-neutral-700
        pl-4
        italic
        text-neutral-600 dark:text-neutral-400
      "
            >
                {children}
            </blockquote>
        ),
    },

    list: {
        bullet: ({ children }) => (
            <ul className="ml-6 my-4 list-disc space-y-2 text-neutral-600 dark:text-neutral-400">
                {children}
            </ul>
        ),

        number: ({ children }) => (
            <ol className="ml-6 my-4 list-decimal space-y-2 text-neutral-600 dark:text-neutral-400">
                {children}
            </ol>
        ),
    },

    marks: {
        strong: ({ children }) => (
            <strong className="font-semibold text-neutral-900 dark:text-white">
                {children}
            </strong>
        ),

        em: ({ children }) => (
            <em className="italic text-neutral-700 dark:text-neutral-300">
                {children}
            </em>
        ),

        code: ({ children }) => (
            <code
                className="
        px-1.5 py-0.5 mx-0.5
        text-sm font-mono
        rounded-md
        bg-neutral-100 dark:bg-neutral-800
        border border-neutral-200 dark:border-neutral-700
        text-neutral-800 dark:text-neutral-200
      "
            >
                {children}
            </code>
        ),

        link: ({ children, value }) => {
            const href = value?.href;
            const isInternal = href?.startsWith("/");

            const className = `
        font-medium
        text-neutral-900 dark:text-white
        underline underline-offset-4
        decoration-neutral-300 dark:decoration-neutral-700
        hover:decoration-neutral-900 dark:hover:decoration-white
        transition-colors
      `;

            if (isInternal) {
                return (
                    <Link href={href} className={className}>
                        {children}
                    </Link>
                );
            }

            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                >
                    {children}
                </a>
            );
        },
    },
};