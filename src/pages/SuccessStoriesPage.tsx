// src/pages/SuccessStoriesPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SuccessStoriesPage: React.FC = () => {
    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="/photo2.png" alt="Happy Couple" className="rounded-3xl shadow-2xl" />
                    </div>
                    <div className="space-y-6">
                        <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-dark-text leading-tight">
                            Real People. <span className="text-cta-vibrant">Real Edges.</span>
                        </h1>
                        <p className="font-sans text-xl text-gray-700 dark:text-gray-400">
                            Our users don't just get more matches; they get better connections. By using AI behavioral analysis, we help you understand the "why" behind every interaction.
                        </p>
                        <blockquote className="border-l-4 border-cta-vibrant pl-6 py-2 italic text-gray-600 dark:text-gray-300">
                            "I finally stopped overthinking my texts. The Chat Advisor gave me the confidence to be myself."
                            <footer className="mt-2 font-bold">— Alex D., Found a partner in 3 months</footer>
                        </blockquote>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SuccessStoriesPage;