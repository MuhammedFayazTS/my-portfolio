"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}

export const CodeBlock = ({ code, language = "text", filename }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Map common language names to display names
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

    const displayLanguage = languageDisplayNames[language.toLowerCase()] || language;

    return (
        <div className="my-6 rounded-lg overflow-hidden border border-gray-700 bg-[#1e1e1e] shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#2d2d2d] border-b border-gray-700">
                <div className="flex items-center gap-3">
                    {/* Terminal Dots */}
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>

                    {/* Filename or Language Badge */}
                    <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-mono text-gray-300">
                            {filename || displayLanguage}
                        </span>
                    </div>
                </div>

                {/* Copy Button */}
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-all duration-200"
                    aria-label="Copy code"
                >
                    {copied ? (
                        <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code Content */}
            <div className="relative">
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    showLineNumbers={true}
                    wrapLongLines={false}
                    customStyle={{
                        margin: 0,
                        padding: "1.25rem",
                        background: "#1e1e1e",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                    }}
                    lineNumberStyle={{
                        minWidth: "3em",
                        paddingRight: "1.5em",
                        color: "#858585",
                        userSelect: "none",
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: "'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
                        },
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};
