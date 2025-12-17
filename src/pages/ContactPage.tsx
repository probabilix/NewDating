// src/pages/ContactPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen">
            <Header />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="font-serif text-5xl font-extrabold text-gray-900 dark:text-dark-text mb-6">Contact Us</h1>
                    <p className="font-sans text-lg text-gray-700 dark:text-gray-400 mb-12">
                        Need technical support or have a partnership inquiry? Drop us a message and our team will get back to you within 24 hours.
                    </p>

                    <form className="bg-white dark:bg-dark-surface p-8 md:p-12 rounded-3xl shadow-2xl space-y-6 text-left">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2 dark:text-dark-text">Name</label>
                                <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-xl dark:bg-gray-900 dark:border-gray-700 dark:text-white outline-none focus:border-cta-vibrant" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 dark:text-dark-text">Email</label>
                                <input type="email" placeholder="email@example.com" className="w-full p-4 border rounded-xl dark:bg-gray-900 dark:border-gray-700 dark:text-white outline-none focus:border-cta-vibrant" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 dark:text-dark-text">Message</label>
                            <textarea placeholder="How can we help?" className="w-full p-4 border rounded-xl h-32 dark:bg-gray-900 dark:border-gray-700 dark:text-white outline-none focus:border-cta-vibrant"></textarea>
                        </div>
                        <button className="w-full py-4 bg-cta-vibrant text-white font-bold rounded-full shadow-lg hover:scale-[1.01] transition-transform">
                            Send Message
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;