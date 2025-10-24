"use client"

import React from 'react';
import { useChatBot } from '@/hooks/useChatBot';
import { Bot, BotOff } from 'lucide-react';
import { Button } from '../ui/button';

const ChatBotToggleButton = () => {
    const { isBotActive, toggleBotActive } = useChatBot();

    return (
        <Button variant="ghost" onClick={toggleBotActive}>
            {isBotActive ? <BotOff className="w-5 h-5 text-gray-300" /> : <Bot className="w-5 h-5 text-gray-300" />}
        </Button>
    );
};

export default ChatBotToggleButton;
