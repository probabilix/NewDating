// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ONLY import the data. The Advisor type is now global.
import { ADVISORS } from '../data/AdvisorsData'; 

const AdvisorAvatar: React.FC<{ color: string; initial: string }> = ({ color, initial }) => (
    <div className="w-full h-full rounded-2xl flex items-center justify-center shadow-inner" style={{ backgroundColor: `${color}20` }}>
        <svg viewBox="0 0 100 100" className="w-20 h-20">
            <circle cx="50" cy="40" r="25" fill={color} />
            <path d="M20 90 Q50 60 80 90" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round" />
            <text x="50" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{initial}</text>
        </svg>
    </div>
);

const Dashboard: React.FC = () => {
    // Advisor is recognized globally now
    const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);

    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl font-extrabold text-gray-900 dark:text-white">Expert AI Advisors</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ADVISORS.map((advisor) => (
                        <div key={advisor.id} onClick={() => setSelectedAdvisor(advisor)} 
                             className="bg-white dark:bg-dark-surface p-6 rounded-3xl shadow-lg cursor-pointer border-4 border-transparent hover:border-cta-vibrant transition-all flex flex-col items-center">
                            <div className="w-32 h-32 mb-4">
                                <AdvisorAvatar color={advisor.imageColor} initial={advisor.name[0]} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold dark:text-white">{advisor.name}</h3>
                            <p className="text-cta-vibrant font-bold text-center uppercase text-xs tracking-widest mt-1">{advisor.specialty}</p>
                        </div>
                    ))}
                </div>

                {selectedAdvisor && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
                        <div className="bg-white dark:bg-dark-surface w-full max-w-md rounded-[2.5rem] p-8 relative shadow-2xl border border-white/10">
                            <button onClick={() => setSelectedAdvisor(null)} className="absolute top-6 right-6 dark:text-white text-2xl">✕</button>
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 mb-4">
                                    <AdvisorAvatar color={selectedAdvisor.imageColor} initial={selectedAdvisor.name[0]} />
                                </div>
                                <h2 className="text-3xl font-serif font-bold dark:text-white">{selectedAdvisor.name}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-center my-6 leading-relaxed">
                                    {selectedAdvisor.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <a href={`/voice/${selectedAdvisor.config_id}`} className="py-4 bg-cta-vibrant text-white font-bold rounded-2xl text-center shadow-lg hover:opacity-90 transition-all">🎙️ Voice Call</a>
                                    <a href={`/chat/${selectedAdvisor.config_id}`} className="py-4 border-2 border-cta-vibrant text-cta-vibrant font-bold rounded-2xl text-center hover:bg-cta-vibrant hover:text-white transition-all">💬 Chat</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;