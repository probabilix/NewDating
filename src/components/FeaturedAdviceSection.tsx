// src/components/FeaturedAdviceSection.tsx
import React from 'react';

// Mock data for the testimonial/success story
const FEATURED_STORY = {
    quote: "I was stuck in the same cycle for years. DatingAdvice.io didn't just give me advice—it gave me a new perspective and the confidence to find someone truly amazing.",
    author: "Sarah J., Found Her Edge in 2025",
    // Assumes /photo2.png is the full-color, high-quality image
    imageUrl: "/photo2.png", 
};

// Helper component for the Image Visual - FIX APPLIED HERE
const ImageVisual: React.FC = () => {
    return (
        <div className="relative w-full h-full">
            {/* FIX: Removed p-2 padding and background color from the container. 
              The image now uses object-cover directly to fill the parent div (which has rounded corners).
            */}
            <img
                src={FEATURED_STORY.imageUrl} 
                alt="Success Story Image"
                // CRITICAL FIX: Ensure image fills the container completely
                className="w-full h-full object-cover transition-all duration-700 rounded-3xl
                            dark:filter dark:brightness-75 dark:opacity-85"
            />
        </div>
    );
};


const FeaturedAdviceSection: React.FC = () => {
  return (
    // Mobile optimized vertical padding
    <section id="featured-advice" className="py-16 md:py-24 bg-white dark:bg-dark-surface transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-dark-text mb-12 md:mb-16">
          Your Success Story <span className="text-cta-vibrant">Starts Now.</span>
        </h2>

        {/* Testimonial Block (Image Left, Text Right on Desktop) */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center text-left">
          
          {/* COLUMN 1 (LEFT ON DESKTOP): VISUAL */}
          <div className="w-full h-80 md:h-96 bg-neutral-light dark:bg-dark-background rounded-3xl overflow-hidden shadow-2xl 
                        order-1 md:order-1"> 
            <ImageVisual />
          </div>

          
          {/* COLUMN 2 (RIGHT ON DESKTOP): Quote and CTA */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-2"> 
            <span className="font-serif text-4xl text-primary-soft dark:text-primary-soft/70">"</span>
            
            {/* The high-impact quote */}
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-dark-text leading-snug">
              {FEATURED_STORY.quote}
            </blockquote>
            
            <p className="font-sans text-base font-semibold text-gray-700 dark:text-gray-400">
              — {FEATURED_STORY.author}
            </p>

            {/* CTA Button - MODIFIED TO <a> */}
            <a 
                href="/login"
                className="inline-block font-sans px-8 py-3 bg-cta-vibrant text-white rounded-full font-bold shadow-lg hover:opacity-90 transition-opacity"
            >
              Join the Success (Start Free)
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedAdviceSection;