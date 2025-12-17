// src/pages/CareersPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CAREERS_CONTENT } from '../data/PageContent';

const CareersPage: React.FC = () => {
    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen transition-colors duration-500">
            <Header />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                        {CAREERS_CONTENT.title}
                    </h1>
                    <p className="font-sans text-xl text-gray-700 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                        {CAREERS_CONTENT.intro}
                    </p>

                    <div className="space-y-6 text-left">
                        {CAREERS_CONTENT.jobs.map((job, idx) => (
                            <div 
                                key={idx} 
                                className="bg-white dark:bg-dark-surface p-8 rounded-3xl shadow-md border border-transparent dark:border-white/5 hover:border-cta-vibrant dark:hover:border-cta-vibrant transition-all flex flex-col md:flex-row md:items-center justify-between group"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cta-vibrant transition-colors">
                                        {job.role}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium mt-1 uppercase tracking-wide text-xs">{job.type}</p>
                                </div>
                                <button className="mt-6 md:mt-0 px-8 py-3 bg-gray-900 dark:bg-gray-800 text-white font-bold rounded-full hover:bg-cta-vibrant dark:hover:bg-cta-vibrant transition-colors shadow-lg active:scale-95">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-white/50 dark:bg-dark-surface/50 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-white/5">
                        <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-4">Don't see a fit?</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            We are always looking for passionate creators. Send your CV to 
                            <span className="text-cta-vibrant font-bold ml-1 hover:underline cursor-pointer">careers@datingadvice.io</span>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CareersPage;