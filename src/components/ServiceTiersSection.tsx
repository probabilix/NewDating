// src/components/ServiceTiersSection.tsx
import React from 'react';

// Define the interface locally for self-containment
interface ServiceTier {
    id: number;
    name: string; 
    subheading: string;
    isAvailable: boolean;
    ctaText: string; 
    ctaAction: 'Login' | 'Notify';
    features: string[];
    tag?: 'Popular' | 'Coming Soon';
    iconColor: string; // Tailwind color class for the icon background
}

// HARDCODED DATA: (UNCHANGED) Placeholder feature added for consistent height
const SERVICE_TIER_DETAILS: ServiceTier[] = [
    {
        id: 1,
        name: 'Chat Consultant',
        subheading: 'Uncover the perfect response for every text instantly.',
        isAvailable: true,
        ctaText: 'Unlock Insight',
        ctaAction: 'Login',
        features: [
            'Real-time messaging guidance on dating',
            'AI-driven profile assessment',
            'Access to core AI knowledge base',
            
        ],
        iconColor: 'bg-primary-soft', 
    },
    {
        id: 2,
        name: 'Voice Advisor',
        subheading: 'Practice dates and gain confidence with simulated audio coaching.',
        isAvailable: true,
        ctaText: 'Start Coaching',
        ctaAction: 'Login',
        features: [
            'Everything in Chat Consultant',
            'Unlimited audio conversation feedback',
            'Access to 12 expert AI personas',
            'Simulated date practice sessions',
        ],
        tag: 'Popular',
        iconColor: 'bg-cta-vibrant',
    },
    {
        id: 3,
        name: 'Video Consultant',
        subheading: 'Revolutionary analysis of your on-screen presence and body language.',
        isAvailable: false,
        ctaText: 'Notify Me',
        ctaAction: 'Notify',
        features: [
            'Everything in Voice Advisor',
            'Video profile optimization feedback',
            'AI-driven mock video date analysis',// Added to ensure 4 features total
        ],
        tag: 'Coming Soon',
        iconColor: 'bg-gray-500',
    },
];


// Helper component for an individual Service Card
const ServiceCard: React.FC<{ tier: ServiceTier }> = ({ tier }) => {
  const isPopular = tier.tag === 'Popular';
  const isComingSoon = tier.tag === 'Coming Soon';
  const isLoginAction = tier.ctaAction === 'Login'; // New flag

  // Base styling for the card (Padding reduced on mobile)
  const cardClasses = `
    relative p-6 sm:p-8 rounded-3xl shadow-xl transition-all duration-500 
    h-full flex flex-col justify-between transform-gpu
    bg-white dark:bg-dark-surface
    border-4 ${isPopular ? 'border-cta-vibrant' : 'border-gray-100 dark:border-gray-700'}
    ${isComingSoon ? 'opacity-70 hover:opacity-100' : 'hover:shadow-2xl'} 
  `;

  // Determine button colors and behavior
  const buttonClasses = isComingSoon 
    ? 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-not-allowed'
    : 'bg-cta-vibrant text-white hover:bg-opacity-90 shadow-lg';
    
  // Icon Placeholder (Size reduced on mobile)
  const IconPlaceholder = ({ colorClass, name }: { colorClass: string, name: string }) => (
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${colorClass} flex items-center justify-center text-white font-serif text-lg sm:text-xl font-bold mb-3 sm:mb-4`}>
          {name.charAt(0)}
      </div>
  );

  const commonProps = {
    className: `w-full py-2 sm:py-3 text-base sm:text-lg font-bold rounded-full font-sans transition-all duration-300 text-center ${buttonClasses}`,
    disabled: isComingSoon,
  };

  const buttonElement = isLoginAction ? (
    <a 
      href="/login" 
      {...commonProps} 
      // Ensure the link acts like a block-level button
      className={`${commonProps.className} inline-block`} 
    >
      {tier.ctaText}
    </a>
  ) : (
    // If 'Notify', keep it as a button with the alert
    <button 
      {...commonProps}
      onClick={() => alert(`You clicked: ${tier.ctaText}`)}
    >
      {tier.ctaText}
    </button>
  );


  return (
    <div className={cardClasses}>
      
      {/* Tag */}
      {tier.tag && (
        <span className={`absolute top-0 right-0 py-1 px-4 text-xs font-bold rounded-tr-3xl rounded-bl-lg font-sans
                        ${isPopular ? 'bg-cta-vibrant text-white' : 'bg-primary-soft text-gray-900'}`}>
          {tier.tag}
        </span>
      )}

      {/* Header */}
      <div>
        <IconPlaceholder colorClass={tier.iconColor} name={tier.name} />

        {/* Card Title (Size reduced on mobile) */}
        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-dark-text mb-2">
          {tier.name}
        </h3>
        {/* Subheading (Size reduced on mobile) */}
        <p className={`font-sans text-sm sm:text-base font-semibold mb-4 sm:mb-6 ${isComingSoon ? 'text-gray-500' : 'text-gray-700 dark:text-gray-400'}`}>
          {tier.subheading}
        </p>
        
        {/* Features List (Size and spacing reduced on mobile) */}
        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10 font-sans text-xs sm:text-sm text-gray-700 dark:text-gray-400">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {/* Icon size reduced on mobile */}
              <svg className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 ${isComingSoon ? 'text-gray-400' : 'text-primary-soft'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {/* Hiding placeholder text */}
              <span className={feature === 'placeholder' ? 'opacity-0' : ''}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button (Size reduced on mobile) */}
      {buttonElement}

    </div>
  );
};

const ServiceTiersSection: React.FC = () => {
  return (
    // Padding reduced on mobile
    <section id="service-tiers" className="py-16 md:py-24 bg-secondary-cream dark:bg-dark-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading (Size reduced on mobile) */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
          The Science of Your <span className="text-cta-vibrant">Dating Advantage</span>
        </h2>
        {/* Body text (Size and margin reduced on mobile) */}
        <p className="font-sans text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-12 sm:mb-16 max-w-3xl mx-auto">
          Choose the layer of AI intelligence that will maximize your success and confidence starting today.
        </p>
        
        {/* Cards Grid (Gap reduced on mobile) */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_TIER_DETAILS.map((tier) => (
            <ServiceCard key={tier.id} tier={tier} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ServiceTiersSection;