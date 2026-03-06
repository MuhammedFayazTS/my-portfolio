"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}

export const CodeBlock = ({
    code,
    language = "text",
    filename,
}: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const languageDisplayNames: Record<string, string> = {
        javascript: "JavaScript",
        typescript: "TypeScript",
        jsx: "JSX",
        tsx: "TSX",
        python: "Python",
        java: "Java",
        cpp: "C++",
        c: "C",
        csharp: "C#",
        go: "Go",
        rust: "Rust",
        ruby: "Ruby",
        php: "PHP",
        html: "HTML",
        css: "CSS",
        scss: "SCSS",
        json: "JSON",
        yaml: "YAML",
        markdown: "Markdown",
        bash: "Bash",
        shell: "Shell",
        sql: "SQL",
        text: "Text",
    };

    const displayLanguage =
        languageDisplayNames[language.toLowerCase()] || language;

    return (
        <div
            className="
      my-8 overflow-hidden
      rounded-lg
      border border-neutral-200 dark:border-neutral-800
      
      bg-neutral-50 dark:bg-neutral-900
      shadow-sm
    "
        >
            {/* Header */}
            <div
                className="
        flex items-center justify-between
        px-4 py-2
        border-b border-neutral-200 dark:border-neutral-800
        bg-white/60 dark:bg-neutral-900/50
        backdrop-blur
      "
            >
                <span
                    className="
          text-xs font-mono
          text-neutral-500 dark:text-neutral-400
        "
                >
                    {filename || displayLanguage}
                </span>

                <button
                    onClick={handleCopy}
                    className="
          flex items-center gap-1.5
          text-xs
          px-2.5 py-1
          rounded-md
          border border-neutral-200 dark:border-neutral-700
          
          text-neutral-600 dark:text-neutral-400
          hover:text-neutral-900 dark:hover:text-white
          
          bg-white/70 dark:bg-neutral-800/60
          transition
        "
                >
                    {copied ? (
                        <>
                            <Check className="w-3.5 h-3.5" />
                            Copied
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy
                        </>
                    )}
                </button>
            </div>

            {/* Code */}
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                showLineNumbers
                wrapLongLines={false}
                customStyle={{
                    margin: 0,
                    padding: "1.25rem",
                    background: "transparent",
                    fontSize: "0.875rem",
                    lineHeight: "1.7",
                }}
                lineNumberStyle={{
                    minWidth: "2.5em",
                    paddingRight: "1.25em",
                    color: "#6b7280",
                    userSelect: "none",
                }}
                codeTagProps={{
                    style: {
                        fontFamily:
                            "'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', monospace",
                    },
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};