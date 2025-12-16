import React, { useState, useRef, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import { NAV_LINKS, DROPDOWN_PRODUCTS } from '../data/HeaderData';
import useTheme from '../hooks/useTheme';


const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFeatureHovered, setIsFeatureHovered] = useState(false);
    const [isFeatureClicked, setIsFeatureClicked] = useState(false);
    const featureRef = useRef<HTMLDivElement>(null);


    const { isDarkMode, toggleTheme } = useTheme();


    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (featureRef.current && !featureRef.current.contains(e.target as Node)) {
                setIsFeatureClicked(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);


    const isFeatureOpen = isFeatureHovered || isFeatureClicked;


    return (
        <header className="fixed top-0 w-full z-30 bg-neutral-light dark:bg-dark-surface border-b border-black/5 dark:border-white/10">
            <div className="px-6">
                <div className="flex h-20 items-center justify-between">
                    <a className="text-3xl font-extrabold text-cta-vibrant">DatingAdvice<span className="text-primary-soft">.io</span></a>


                    <div className="hidden md:flex items-center gap-8">
                        <div
                            ref={featureRef}
                            className="relative"
                            onMouseEnter={() => setIsFeatureHovered(true)}
                            onMouseLeave={() => setIsFeatureHovered(false)}
                        >
                            <button
                                onClick={() => setIsFeatureClicked(p => !p)}
                                className="relative font-bold text-gray-800 dark:text-dark-text"
                            >
                                Features
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-cta-vibrant scale-x-0 hover:scale-x-100 transition-transform origin-left" />
                            </button>


                            {isFeatureOpen && (
                                <div className="absolute left-0 mt-3 w-80 rounded-xl bg-white dark:bg-dark-surface shadow-xl ring-1 ring-black/5 dark:ring-white/10">
                                    {DROPDOWN_PRODUCTS.map(item => (
                                        <a key={item.title} href={item.href} className="block px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5">
                                            <p className="font-bold text-gray-900 dark:text-dark-text">{item.title}</p>
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>


                        {NAV_LINKS.map(link => (
                            <a key={link.name} href={link.href} className="relative font-bold text-gray-700 dark:text-dark-text">
                                {link.name}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-cta-vibrant scale-x-0 hover:scale-x-100 transition-transform origin-left" />
                            </a>
                        ))}
                    </div>


                    <div className="flex items-center gap-4">
                        {/* THEME TOGGLE (Mobile/Desktop) */}
                        <button 
                            onClick={toggleTheme} 
                            className="text-2xl text-gray-900 dark:text-white"
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                        
                        {/* LOGIN/SIGNUP BUTTON (Desktop) - NOW REDIRECTS TO /login */}
                        <a 
                            href="/login" 
                            className="hidden md:block px-6 py-2 bg-cta-vibrant text-white rounded-full font-bold"
                        >
                            Login / Signup
                        </a>
                        
                        {/* MOBILE MENU ICON FIX */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(true)} 
                            className="md:hidden text-2xl text-gray-900 dark:text-white"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>


            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </header>
    );
};


export default Header;