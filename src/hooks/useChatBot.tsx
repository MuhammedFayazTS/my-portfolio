"use client"

import React, { createContext, useState, useEffect, useContext } from 'react';

type ChatBotContextType = {
    isBotActive: boolean;
    toggleBotActive: () => void;
};

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export function ChatBotProvider({ children }: { children: React.ReactNode }) {
    const [isBotActive, setIsBotActive] = useState<boolean>(false);

    useEffect(() => {
        const storedState = localStorage.getItem('isBotActive');
        if (storedState) {
            setIsBotActive(JSON.parse(storedState));
        }
    }, []);

    const toggleBotActive = () => {
        setIsBotActive(prevState => {
            const newState = !prevState;
            localStorage.setItem('isBotActive', JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <ChatBotContext.Provider value={{ isBotActive, toggleBotActive }}>
            {children}
        </ChatBotContext.Provider>
    );
}

export function useChatBot() {
    const context = useContext(ChatBotContext);
    if (!context) {
        throw new Error('useChatBot must be used within a ChatBotProvider');
    }
    return context;
}
