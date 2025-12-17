// src/pages/SuccessStoriesPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SuccessStoriesPage: React.FC = () => {
    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen transition-colors duration-500">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cta-vibrant to-primary-soft rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <img 
                            src="/photo2.png" 
                            alt="Happy Couple" 
                            className="relative rounded-3xl shadow-2xl dark:filter dark:brightness-90 transition-all duration-700" 
                        />
                    </div>
                    <div className="space-y-8">
                        <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            Real People. <br/><span className="text-cta-vibrant">Real Edges.</span>
                        </h1>
                        <p className="font-sans text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            Our users don't just get more matches; they get better connections. By using AI behavioral analysis, we help you understand the "why" behind every interaction.
                        </p>
                        <blockquote className="border-l-4 border-cta-vibrant pl-6 py-4 italic text-2xl text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 rounded-r-2xl">
                            "I finally stopped overthinking my texts. The Chat Advisor gave me the confidence to be myself."
                            <footer className="mt-4 font-bold text-gray-900 dark:text-white text-lg">— Alex D., Found a partner in 3 months</footer>
                        </blockquote>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SuccessStoriesPage;