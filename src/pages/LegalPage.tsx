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
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen">
            <Header />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto bg-white dark:bg-dark-surface p-8 md:p-16 rounded-3xl shadow-xl">
                    <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
                        {content.title}
                    </h1>
                    <p className="text-sm text-gray-500 mb-10">Last Updated: {content.lastUpdated}</p>
                    
                    <div className="space-y-8">
                        {content.sections.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-dark-text mb-3">{section.h}</h2>
                                <p className="font-sans text-gray-700 dark:text-gray-400 leading-relaxed">{section.p}</p>
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