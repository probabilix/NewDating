// src/pages/LegalPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LEGAL_CONTENT } from '../data/PageContent';

interface LegalPageProps {
    type: 'privacy' | 'terms' | 'cookies';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
    const content = LEGAL_CONTENT[type];

    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen transition-colors duration-500">
            <Header />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto bg-white dark:bg-dark-surface p-8 md:p-16 rounded-3xl shadow-xl border border-transparent dark:border-white/5">
                    <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        {content.title}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 italic">Last Updated: {content.lastUpdated}</p>
                    
                    <div className="space-y-10">
                        {content.sections.map((section, idx) => (
                            <div key={idx} className="group">
                                <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-primary-soft mb-3 group-hover:text-cta-vibrant transition-colors">
                                    {section.h}
                                </h2>
                                <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                    {section.p}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LegalPage;