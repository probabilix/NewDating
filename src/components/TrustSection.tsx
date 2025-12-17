// src/components/TrustSection.tsx
import React from 'react';

// Hardcoded data for the statistical proof points
const STATS = [
    { number: '92%', label: 'Users feel more confident on dates.' },
    { number: '1.2M', label: 'Interactions analyzed daily for optimal advice.' },
    { number: '80%', label: 'Increase in quality matches reported by early users.' },
];

const TrustSection: React.FC = () => {
  return (
    // PADDING REDUCED FOR MOBILE COMPACTNESS
    <section id="trust-authority" className="py-16 md:py-24 bg-white dark:bg-dark-surface transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Size reduced, Spacing reduced) */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-dark-text mb-12 sm:mb-16">
          The Edge of <span className="text-primary-soft">Intelligent Coaching</span>
        </h2>

        {/* Two-Column Layout (Swapped for better flow on mobile) */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          
          {/* LEFT: Visual/Concept Explanation (ORDERED FIRST ON MOBILE) */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-dark-text mb-3 sm:mb-4">
              Engineered for Connection.
            </h3>
            <p className="font-sans text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-6 sm:mb-8">
              We don't rely on gut feelings. Our proprietary AI processes millions of dating interactions, behavioral patterns, and psychological cues to deliver advice that is scientifically proven to work. Stop guessing, start knowing.
            </p>
            
            {/* Immediate Final CTA - MODIFIED TO <a> with /login href */}
            <a
                href="/login" 
                className="inline-block text-base sm:text-xl px-8 py-3 sm:px-10 sm:py-4 bg-cta-vibrant text-white rounded-full font-bold shadow-2xl font-sans hover:bg-opacity-95 hover:scale-[1.02] transition-all duration-300 transform text-center"
            >
                Start Your Free Analysis
            </a>
          </div>
          
          {/* RIGHT: Statistical Proof Points (ORDERED SECOND ON MOBILE) */}
          <div className="order-1 md:order-2 space-y-6 sm:space-y-8">
            {STATS.map((stat, index) => (
              <div key={index} className="flex items-start">
                <div className="text-left w-full">
                  {/* Large Number (Size reduced on mobile) */}
                  <span className="font-serif text-5xl sm:text-6xl font-extrabold text-cta-vibrant dark:text-primary-soft/90 block leading-none">
                    {stat.number}
                  </span>
                  {/* Label (Size reduced on mobile) */}
                  <span className="font-sans text-base sm:text-lg font-semibold text-gray-800 dark:text-dark-text block mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TrustSection;