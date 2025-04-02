'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Bot, ChevronDown, ChevronUp, SendHorizonal, Trash } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Input } from './ui/input';
import debounce from "lodash/debounce";
import ReactMarkdown from "react-markdown";
import { useChatBot } from '@/hooks/useChatBot';

type Message = {
    role: "assistant" | "user";
    content: string;
    timestamp: Date;
};

type ChatMessage = {
    role: "assistant" | "user";
    content: string;
};

type ConfirmClearState = {
    show: boolean;
    timeoutId?: NodeJS.Timeout;
};

type QuickOption = {
    text: string;
    message: string;
};

const RATE_LIMIT_KEY = "chatRateLimit";
const MAX_MESSAGES_PER_HOUR = 20;
const MESSAGE_HISTORY_LIMIT = 5;

const QUICK_OPTIONS: QuickOption[] = [
    {
        text: "👩‍💻 Skills & Experience",
        message: "Can you tell me about Fayaz's main skills and experience?",
    },
    {
        text: "🚀 Project Collaboration",
        message:
            "I'm interested in working with Fayaz. What's the best way to start?",
    },
    {
        text: "💼 Past Projects",
        message: "Could you share some examples of Fayaz's past projects?",
    },
];

const Chatbot = () => {
    const { isBotActive } = useChatBot();
    const [openBox, setOpenBox] = useState(false)
    
    const [remainingMessages, setRemainingMessages] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(RATE_LIMIT_KEY);
            if (stored) {
                const { count, timestamp } = JSON.parse(stored);
                if (Date.now() - timestamp > 3600000) {
                    return MAX_MESSAGES_PER_HOUR;
                }
                return count;
            }
        }
        return MAX_MESSAGES_PER_HOUR;
    });

    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
            "Hi! I'm Fayaz's AI assistant. I can help you learn more about his skills, experience, or how he can help with your project. What would you like to know?",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [confirmClear, setConfirmClear] = useState<ConfirmClearState>({
        show: false,
    });
    
    useEffect(() => {
        if (remainingMessages < MAX_MESSAGES_PER_HOUR) {
            localStorage.setItem(
                RATE_LIMIT_KEY,
                JSON.stringify({
                    count: remainingMessages,
                    timestamp: Date.now(),
                })
            );
        }
    }, [remainingMessages]);
    
    const debouncedApiCall = useCallback((chatMessages: ChatMessage[]) => {
        const apiCall = async () => {
            try {
                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        messages: chatMessages.slice(-MESSAGE_HISTORY_LIMIT),
                        config: {
                            temperature: 0.7,
                            maxTokens: 2048,
                        },
                    }),
                });

                if (!response.ok) throw new Error("Failed to get response");

                const data = await response.json();

                const content = data.content.replace(/<[^>]*>/g, "");
                
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant" as const,
                        content: content,
                        timestamp: new Date(),
                    },
                ]);
            } catch (error) {
                console.error("Chat Error:", error);
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant" as const,
                        content:
                        "I apologize, but I'm having trouble connecting right now. Please try again or use the contact form.",
                        timestamp: new Date(),
                    },
                ]);
            } finally {
                setIsTyping(false);
            }
        };
        return debounce(apiCall, 750)();
    }, []);

    const handleQuickOptionClick = (option: QuickOption) => {
        if (isTyping || remainingMessages <= 0) return;
        setInput(option.message);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handleSubmit(new Event("submit") as any);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        if (isTyping) return;

        if (remainingMessages <= 0) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "You've reached the maximum number of messages for now. Please try again later or use the contact form.",
                    timestamp: new Date(),
                },
            ]);
            return;
        }

        if (messages.length >= 15) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "I've enjoyed our chat! For more detailed discussions, please use the contact form or reach out directly via email.",
                    timestamp: new Date(),
                },
            ]);
            return;
        }

        const userMessage: Message = {
            role: "user",
            content: input.trim(),
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);
        setRemainingMessages((prev: number) => prev - 1);

        const chatMessages: ChatMessage[] = [...messages, userMessage].map(
            ({ role, content }) => ({
                role,
                content,
            })
        );

        debouncedApiCall(chatMessages);
    };

    const handleClearClick = () => {
        if (confirmClear.show) {
            setMessages([
                {
                    role: "assistant",
                    content:
                        "Hi! I'm Fayaz's AI assistant. I can help you learn more about his skills, experience, or how she can help with your project. What would you like to know?",
                    timestamp: new Date(),
                },
            ]);
            setConfirmClear({ show: false });
            if (confirmClear.timeoutId) {
                clearTimeout(confirmClear.timeoutId);
            }
        } else {
            const timeoutId = setTimeout(() => {
                setConfirmClear({ show: false });
            }, 3000);
            setConfirmClear({ show: true, timeoutId });
        }
    };

    useEffect(() => {
        return () => {
            if (confirmClear.timeoutId) {
                clearTimeout(confirmClear.timeoutId);
            }
        };
    }, [confirmClear.timeoutId]);


    const toggleOpenBox = () => setOpenBox(prev => !prev)

    return !isBotActive ? null:(
        <section className='fixed bottom-5 right-5 w-11/12 md:w-[350px] max-w-md border border-gray-500 bg-neutral-50 dark:bg-neutral-950 rounded z-[1005]'>
            <div className="w-full flex flex-col justify-start gap-y-1 p-3">
                <span className='text-sm font-semibold text-gray-800 dark:text-gray-300'>Chat with</span>
                <div className="w-full inline-flex items-center gap-x-2">
                    <span className='w-2 h-2 bg-green-500 animate-pulse rounded-full' />
                    <span className='text-gray-800 dark:text-gray-300'>Fayaz&#39;s Assistant</span>
                    <Button type='button' variant={"ghost"} className='ml-auto' onClick={toggleOpenBox} >
                        {openBox ?
                            <ChevronDown className='text-gray-900 dark:text-gray-100 w-5 h-5' />
                            :
                            <ChevronUp className='text-gray-900 dark:text-gray-100 w-5 h-5' />}
                    </Button>
                </div>
            </div>
            {
                openBox && <div className=''>
                    <ScrollArea className="w-full border-t border-b border-gray-600 h-[50vh] md:h-[250px] py-3 px-2 overflow-y-auto">
                        {/* Render the chat messages */}
                        {messages.map((message, index: number) => (
                            <div key={index} className='w-full inline-flex items-center gap-x-2 my-2'>
                                {message.role === "assistant" && <Bot className='w-5 h-5' />}
                                <div
                                    className={`w-fit p-2 rounded text-sm ${message.role === 'user' ? 'bg-gray-900 dark:bg-gray-50 text-gray-200 dark:text-gray-900 ml-auto' : 'border border-gray-600 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-400'}`}
                                >
                                    <ReactMarkdown
                                        components={{
                                            p: ({ children }) => (
                                                <p className="mb-2 last:mb-0">{children}</p>
                                            ),
                                            ul: ({ children }) => (
                                                <ul className="list-disc ml-4 mb-2">{children}</ul>
                                            ),
                                            ol: ({ children }) => (
                                                <ol className="list-decimal ml-4 mb-2">{children}</ol>
                                            ),
                                            li: ({ children }) => <li className="mb-1">{children}</li>,
                                            strong: ({ children }) => (
                                                <strong className="font-semibold">{children}</strong>
                                            ),
                                            em: ({ children }) => <em className="italic">{children}</em>,
                                            h1: ({ children }) => (
                                                <h1 className="text-lg font-bold mb-2">{children}</h1>
                                            ),
                                            h2: ({ children }) => (
                                                <h2 className="text-base font-bold mb-2">{children}</h2>
                                            ),
                                            h3: ({ children }) => (
                                                <h3 className="text-sm font-bold mb-2">{children}</h3>
                                            ),
                                            code: ({ children }) => (
                                                <code className="bg-background/50 rounded px-1">
                                                    {children}
                                                </code>
                                            ),
                                        }}
                                    >
                                        {message.content}
                                    </ReactMarkdown>

                                    {index === 0 && messages.length === 1 && (
                                        <div
                                            className="mt-4 flex flex-col gap-2"
                                        >
                                            {QUICK_OPTIONS.map((option) => (
                                                <button
                                                    key={option.text}
                                                    onClick={() => handleQuickOptionClick(option)}
                                                    className="text-left px-3 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm"
                                                    disabled={isTyping || remainingMessages <= 0}
                                                >
                                                    {option.text}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div
                                className="flex items-center gap-2"
                            >
                                <Bot className='w-5 h-5' />
                                <div className="bg-muted rounded-lg p-3">
                                    <span className="animate-pulse">...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </ScrollArea>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="p-2 flex w-full items-center space-x-2">
                            <Button variant={'outline'} type="button" onClick={handleClearClick}>
                                <Trash className='text-red-700' />
                            </Button>
                            <Input
                                type='text'
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-1 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                disabled={isTyping}
                            />
                            <Button
                                type="submit"
                                disabled={isTyping || !input.trim()}
                                className="p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
                                <SendHorizonal />
                            </Button>
                        </div>
                    </form>
                </div>
            }
        </section>
    );
};

export default Chatbot;
