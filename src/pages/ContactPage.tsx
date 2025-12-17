// src/pages/ContactPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-secondary-cream dark:bg-dark-background min-h-screen transition-colors duration-500">
            <Header />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="font-serif text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Contact <span className="text-primary-soft">Us</span></h1>
                    <p className="font-sans text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-xl mx-auto">
                        Need technical support or have a partnership inquiry? Drop us a message and our team will get back to you within 24 hours.
                    </p>

                    <form className="bg-white dark:bg-dark-surface p-8 md:p-12 rounded-3xl shadow-2xl space-y-6 text-left border border-transparent dark:border-white/5">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Name</label>
                                <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-xl bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-cta-vibrant" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Email</label>
                                <input type="email" placeholder="email@example.com" className="w-full p-4 border rounded-xl bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-cta-vibrant" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Message</label>
                            <textarea placeholder="How can we help?" className="w-full p-4 border rounded-xl h-32 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-cta-vibrant"></textarea>
                        </div>
                        <button className="w-full py-4 bg-cta-vibrant text-white font-bold rounded-full shadow-lg hover:scale-[1.01] transition-transform active:scale-95">
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