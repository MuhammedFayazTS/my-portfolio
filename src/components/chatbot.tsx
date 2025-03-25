'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Bot, ChevronDown, ChevronUp, SendHorizonal, Trash } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Input } from './ui/input';
import { set } from 'zod';

const Chatbot = () => {
    const [openBox, setOpenBox] = useState(false)
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');

    const handleSendMessage = () => {
        if (userMessage.trim()) {
            const newMessages = [
                ...messages,
                { sender: 'user', text: userMessage },
                { sender: 'bot', text: 'Hello, how can I assist you today?' }, // Simple bot reply
            ];
            setMessages(newMessages);
            setUserMessage('');
        }
    };

    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };

    const toggleOpenBox = () => setOpenBox(prev => !prev)

    return (
        <section className='fixed bottom-5 right-5 w-11/12 md:w-[350px] max-w-md border border-gray-500 bg-neutral-50 dark:bg-neutral-950 rounded'>
            <div className="w-full flex flex-col justify-start gap-y-1 p-3">
                <span className='text-sm font-semibold text-gray-800 dark:text-gray-300'>Chat with</span>
                <div className="w-full inline-flex items-center gap-x-2">
                    <span className='w-2 h-2 bg-green-500 animate-pulse rounded-full' />
                    <span className='text-gray-800 darK:text-gray-200'>Fayaz's Assistant</span>
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
                        {messages.map((message, index) => (
                            <div key={index} className='w-full inline-flex items-center gap-x-2'>
                                {message.sender !== 'user' && <Bot className='w-5 h-5' />}
                                <div
                                    className={`w-fit p-2 rounded text-sm ${message.sender === 'user' ? 'bg-gray-900 dark:bg-gray-50 text-gray-200 dark:text-gray-900 ml-auto' : 'border border-gray-600 bg-gray-50 text-gray-900 dark:bg-gray-950 text-gray-200'}`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </ScrollArea>

                    <div className="p-2 flex w-full items-center space-x-2">
                        <Button variant={'outline'} type="button" onClick={handleSendMessage}>
                            <Trash className='text-red-700' />
                        </Button>
                        <Input
                            type='text'
                            placeholder="Enter Message"
                            value={userMessage}
                            onChange={handleInputChange}
                            className="flex-1"
                        />
                        <Button type="button" onClick={handleSendMessage}>
                            <SendHorizonal />
                        </Button>
                    </div>
                </div>
            }
        </section>
    );
};

export default Chatbot;
