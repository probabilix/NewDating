// src/components/HeroSection.tsx
import React from 'react';

// ----------------------------------------------------
// Image Visual Component (16:9 Vertical Carousel)
// ----------------------------------------------------
const ImageVisual: React.FC = () => {
    // Array of the 4 images (as shown in your file structure)
    const images = [
        "/photohero.png", 
        "/photohero1.jpeg", 
        "/photohero2.jpeg", 
        "/photohero3.jpeg",
    ];
    // Calculate total height needed for the vertical track (4 images = 400%)
    const totalTrackHeight = images.length * 100; // 400%

    return (
        <div className="relative w-full h-full flex items-center justify-center py-12">
            
            {/* Outer container: Fixed to approximate 16:9 aspect ratio (500px x 281px) */}
            <div className={`
                bg-white dark:bg-dark-surface p-2 rounded-2xl shadow-xl
                w-[500px] h-[341px] overflow-hidden 
                transform scale-[1.05] transition-all duration-700
            `}>
                
                {/* Carousel Track: Holds all 4 images vertically */}
                {/* Height is 400% to contain 4 images */}
                <div 
                    className="carousel-track w-full flex flex-col" 
                    style={{ height: `${totalTrackHeight}%` }} 
                >
                    {images.map((src, index) => (
                        <div 
                            key={index} 
                            className="w-full h-[25%] p-1 flex items-center justify-center" // Each image takes 25% height of the 4x track
                        >
                            <img
                                src={src}
                                alt={`Dating Coach Visual ${index + 1}`}
                                // object-cover ensures no blank space while maintaining aspect ratio fill
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};


// ----------------------------------------------------
// Hero Section Component (Intact)
// ----------------------------------------------------
const HeroSection: React.FC = () => {
  // Uses h-screen to ensure content fits the viewport
  const heroClasses = "h-screen bg-secondary-cream dark:bg-dark-background pt-20 transition-colors duration-500 overflow-hidden";
    
  return (
    <section id="hero" className={heroClasses}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        
        {/* ASMMETRICAL LAYOUT: Height adjusted for screen fit */}
        <div className="grid md:grid-cols-2 gap-10 items-center h-[calc(100vh-80px)]"> 
          
          {/* LEFT COLUMN: TEXT & CTA */}
          <div className="text-left py-8 md:py-0">
            
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-gray-900 dark:text-dark-text mb-4 leading-[1.05] tracking-tight transition-colors">
              Find Your <span className="text-cta-vibrant">Dating</span> 
              <br />
              <span className="text-primary-soft">Edge</span> with AI.
            </h1>
            
            {/* Body Text: Using font-sans (Inter) and smaller size */}
            <p className="font-sans text-lg md:text-xl text-gray-700 dark:text-gray-400 mt-4 mb-8 max-w-md transition-colors">
              Personalized voice coaching, real-time advice, and 12 expert personas built to make you unstoppable.
            </p>
            
            {/* Get Started Button (CTA) */}
            <button className="text-xl px-12 py-4 bg-cta-vibrant text-white rounded-full font-bold shadow-2xl 
                                hover:bg-opacity-95 hover:scale-[1.02] transition-all duration-300 transform">
                Start Coaching Now
            </button>
            
            <p className="font-sans mt-3 text-sm text-gray-500 dark:text-gray-500">
                No credit card required.
            </p>
          </div>
          
          {/* RIGHT COLUMN: VISUAL (The Vertical Carousel) */}
          <div className="hidden md:flex justify-center items-center h-full">
            <ImageVisual /> 
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;