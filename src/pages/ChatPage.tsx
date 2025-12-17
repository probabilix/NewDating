// src/pages/ChatPage.tsx
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';

// No Advisor type import needed!
import { ADVISORS } from '../data/AdvisorsData';

const ChatPage: React.FC = () => {
    const pathParts = window.location.pathname.split('/');
    const urlId = pathParts[pathParts.length - 1];
    
    // Advisor is recognized globally
    const advisor = ADVISORS.find(a => a.config_id === urlId);
    
    const [messages, setMessages] = useState([{ text: `Hello! I'm ${advisor?.name}. How can I help?`, sender: 'ai' }]);
    const [input, setInput] = useState('');
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

    const send = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
    };

    if (!advisor) return <div className="pt-40 text-center dark:text-white">Advisor not found.</div>;

    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen flex flex-col">
            <Header />
            <div className="pt-24 pb-4 px-6 border-b border-gray-200 dark:border-white/10 bg-white/50 dark:bg-dark-surface/50 backdrop-blur-md sticky top-0 z-10">
                <div className="max-w-4xl mx-auto flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: advisor.imageColor }}>
                        {advisor.name[0]}
                    </div>
                    <h2 className="text-lg font-bold dark:text-white">{advisor.name}</h2>
                </div>
            </div>

            <main className="flex-grow overflow-y-auto px-6 py-8">
                <div className="max-w-4xl mx-auto space-y-4">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-4 rounded-2xl ${msg.sender === 'user' ? 'bg-cta-vibrant text-white' : 'bg-white dark:bg-dark-surface dark:text-white'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={endRef} />
                </div>
            </main>

            <div className="p-6 bg-white dark:bg-dark-surface border-t dark:border-white/10">
                <form onSubmit={send} className="max-w-4xl mx-auto flex gap-4">
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." 
                           className="flex-grow p-4 rounded-xl bg-gray-100 dark:bg-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-cta-vibrant" />
                    <button type="submit" className="bg-cta-vibrant text-white px-6 rounded-xl font-bold">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ChatPage;