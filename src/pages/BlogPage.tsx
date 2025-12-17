// src/pages/BlogPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// This data will eventually move to your PageContent.ts or a database
const MOCK_BLOGS = [
    {
        title: "How AI is changing the first date",
        date: "Dec 15, 2025",
        excerpt: "Discover why personalized AI coaching is becoming the new standard for modern dating...",
        image: "/photohero1.jpeg"
    },
    {
        title: "The secret to the perfect profile assessment",
        date: "Dec 10, 2025",
        excerpt: "Our AI analyzed 1 million successful profiles to bring you these 3 core tips...",
        image: "/photohero2.jpeg"
    }
];

const BlogPage: React.FC = () => {
    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="font-serif text-5xl font-extrabold text-center text-gray-900 dark:text-dark-text mb-16">
                    Dating <span className="text-cta-vibrant">Insights</span>
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {MOCK_BLOGS.map((post, idx) => (
                        <div key={idx} className="bg-white dark:bg-dark-surface rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-xs text-cta-vibrant font-bold uppercase tracking-wider">{post.date}</span>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-dark-text mt-2 mb-3">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <button className="font-bold text-gray-900 dark:text-white underline hover:text-cta-vibrant transition-colors">
                                    Read Article
                                </button>
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