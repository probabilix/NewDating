// src/pages/CareersPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CAREERS_CONTENT } from '../data/PageContent';

const CareersPage: React.FC = () => {
    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen">
            <Header />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-dark-text mb-6">
                        {CAREERS_CONTENT.title}
                    </h1>
                    <p className="font-sans text-xl text-gray-700 dark:text-gray-400 mb-16">
                        {CAREERS_CONTENT.intro}
                    </p>

                    <div className="space-y-6 text-left">
                        {CAREERS_CONTENT.jobs.map((job, idx) => (
                            <div 
                                key={idx} 
                                className="bg-white dark:bg-dark-surface p-6 rounded-2xl shadow-md border border-transparent hover:border-cta-vibrant transition-all flex flex-col md:flex-row md:items-center justify-between group"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text group-hover:text-cta-vibrant transition-colors">
                                        {job.role}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{job.type}</p>
                                </div>
                                <button className="mt-4 md:mt-0 px-6 py-2 bg-black dark:bg-gray-800 text-white font-bold rounded-full hover:bg-cta-vibrant dark:hover:bg-cta-vibrant transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-white dark:bg-dark-surface rounded-3xl shadow-inner">
                        <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-dark-text mb-4">Don't see a fit?</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            We are always looking for passionate creators. Send your CV to 
                            <span className="text-cta-vibrant font-bold ml-1">careers@datingadvice.io</span>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CareersPage;