import { urlFor } from "@/lib/sanity-helper";
import { PortableTextComponents } from "@portabletext/react";
import { CodeBlock } from "./CodeBlock";

export const RichTextComponents: PortableTextComponents = {
    types: {
        code: ({ value }) => {
            return (
                <CodeBlock
                    code={value.code}
                    language={value.language || "text"}
                    filename={value.filename}
                />
            );
        },
        image: ({ value }) => {
            if (!value.asset) return null;
            const src = urlFor(value)?.url();
            return <img src={src} alt={value.alt || "Image"} loading="lazy" />;
        },
    },
    block: {
        h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-semibold">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-semibold">{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-semibold">{children}</h4>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 pl-4 italic text-gray-600">{children}</blockquote>
        ),
        // add other block renderers if needed
    },
    list: {
        bullet: ({ children }) => <ul className="ml-6 py-2 list-disc space-y-2">{children}</ul>,
        number: ({ children }) => <ol className="ml-6 py-2 list-decimal space-y-2">{children}</ol>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => (
            <code className="px-1.5 py-0.5 mx-0.5 text-sm font-mono bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 rounded border border-gray-200 dark:border-gray-700">
                {children}
            </code>
        ),
        link: ({ children, value }) => {
            const href = value.href;
            const isInternal = href && href.startsWith("/");
            return (
                <a
                    href={href}
                    className="text-blue-600 hover:underline"
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noopener noreferrer"}
                >
                    {children}
                </a>
            );
        },
    },
};
