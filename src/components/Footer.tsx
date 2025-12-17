// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '/icons8-instagram-50.svg', href: 'https://instagram.com/datingadvice' },
    { name: 'Facebook', icon: '/icons8-facebook-50.svg', href: 'https://facebook.com/datingadvice' },
    { name: 'X', icon: '/icons8-x-50.svg', href: 'https://x.com/datingadvice' },
    { name: 'YouTube', icon: '/icons8-youtube-50.svg', href: 'https://youtube.com/datingadvice' },
  ];

  const linkColumns = [
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Use', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' }
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Success Stories', href: '/stories' },
        { name: 'Affiliates', href: '#' }
      ],
    },
  ];

  return (
    <footer className="bg-dark-surface py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 pb-10 border-b border-gray-800">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-2xl font-extrabold text-white">
              DatingAdvice.<span className="text-cta-vibrant">io</span>
            </h3>
            <p className="text-sm text-gray-400 mt-2">Your AI-Powered Dating Edge.</p>
          </div>

          {linkColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-lg font-bold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-cta-vibrant transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-sans text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer">
                  <img src={social.icon} alt={social.name} className="w-8 h-8 hover:opacity-80 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} DatingAdvice.io. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
