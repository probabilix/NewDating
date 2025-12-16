import React from 'react';
import { NAV_LINKS, DROPDOWN_PRODUCTS } from '../data/HeaderData';


const allLinks = [
    // Include the 'Features' dropdown links
    ...DROPDOWN_PRODUCTS.map(item => ({ name: item.title, href: item.href })),
    // Include the standard NAV_LINKS (Services, Trust, FAQ)
    ...NAV_LINKS,
];


interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}


const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 bg-secondary-cream dark:bg-dark-surface">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-3xl font-extrabold text-cta-vibrant"
            >
                ×
            </button>


            <nav className="mt-24 px-6 flex flex-col gap-6">
                {/* Main Navigation Links */}
                {allLinks.map(link => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        // FIX: Ensure text is white in dark mode for contrast
                        className="relative text-xl font-bold text-gray-900 dark:text-white hover:text-cta-vibrant"
                    >
                        {link.name}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-cta-vibrant scale-x-0 hover:scale-x-100 transition-transform origin-left" />
                    </a>
                ))}


                {/* LOGIN / SIGNUP Button - CONVERTED TO ANCHOR TAG WITH /login LINK */}
                <a 
                    href="/login" // <-- CRITICAL FIX: Add link to the AuthPage
                    onClick={onClose} // Close menu on click
                    className="mt-10 px-6 py-3 bg-cta-vibrant text-white rounded-full font-bold text-center transition-opacity hover:opacity-90"
                >
                    Login / Signup
                </a>
            </nav>
        </div>
    );
};


export default MobileMenu;