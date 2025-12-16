// src/components/AuthLayout.tsx
import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    // PADDING REDUCED on mobile: py-8 instead of py-12
    <div className="min-h-screen bg-secondary-cream dark:bg-dark-background flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      
      {/* Container size reduced slightly on mobile, padding inside reduced */}
      <div className="max-w-md w-full space-y-6 sm:space-y-8 p-6 sm:p-10 bg-white dark:bg-dark-surface rounded-3xl shadow-2xl">
        
        {/* Logo/Header */}
        <div>
          {/* Header font size reduced on mobile */}
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold font-serif text-gray-900 dark:text-dark-text">
            DatingAdvice.<span className="text-cta-vibrant">io</span>
          </h2>
          {/* Subheader margin and font size slightly adjusted */}
          <p className="mt-1 sm:mt-2 text-center text-xs sm:text-sm font-sans text-gray-600 dark:text-gray-400">
            Sign in to start your personalized coaching journey
          </p>
        </div>
        
        {children}
        
      </div>
    </div>
  );
};

export default AuthLayout;