// src/pages/BlogPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MOCK_BLOGS = [
    {
        title: "How AI is changing the first date",
        date: "Dec 15, 2025",
        excerpt: "Discover why personalized AI coaching is becoming the new standard for modern dating and how it builds genuine confidence.",
        image: "/photohero1.jpeg"
    },
    {
        title: "The secret to the perfect profile",
        date: "Dec 10, 2025",
        excerpt: "Our AI analyzed 1 million successful profiles to bring you the 3 core tips that actually increase engagement.",
        image: "/photohero2.jpeg"
    }
];

const BlogPage: React.FC = () => {
    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen transition-colors duration-500">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
                    Dating <span className="text-cta-vibrant">Insights</span>
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {MOCK_BLOGS.map((post, idx) => (
                        <div key={idx} className="bg-white dark:bg-dark-surface rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent dark:border-white/5 flex flex-col">
                            <div className="relative overflow-hidden aspect-video">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover dark:brightness-90 hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <span className="text-xs text-cta-vibrant font-bold uppercase tracking-widest">{post.date}</span>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mt-3 mb-4 leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <button className="font-bold text-gray-900 dark:text-white group flex items-center hover:text-cta-vibrant transition-colors">
                                        Read Article
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPage;