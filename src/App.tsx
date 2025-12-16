// src/App.tsx
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion'; 

// Core Structure Components
import AnimatedIntro from './components/AnimatedIntro'; 
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 

// Content Sections (Landing Page)
import FeaturedAdviceSection from './components/FeaturedAdviceSection'; 
import ServiceTiersSection from './components/ServiceTiersSection'; 
import TrustSection from './components/TrustSection'; 
import FAQSection from './components/FAQSection'; 
import Footer from './components/Footer'; 

// Auth Pages
import AuthPage from './pages/AuthPage'; 
import ForgotPasswordPage from './pages/ForgotPasswordPage'; // <-- IMPORTED

// ----------------------------------------------------
// Landing Page Content Wrapper (UNCHANGED)
// ----------------------------------------------------
const LandingPageContent: React.FC = () => {
    return (
        <div className="App">
            <Header /> 
            
            <main>
                <HeroSection />
                <FeaturedAdviceSection /> 
                <ServiceTiersSection /> 
                <TrustSection />
                <FAQSection /> 
            </main>
            
            <Footer />
        </div>
    );
};


// ----------------------------------------------------
// Main Application Wrapper (Handles Intro Animation & Routing - UPDATED)
// ----------------------------------------------------
const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  
  // Get current path
  const currentPath = window.location.pathname;
  
  // Check for Auth routes
  const isAuthRoute = currentPath.includes('/login');
  const isForgotPasswordRoute = currentPath.includes('/forgot-password');

  const handleAnimationComplete = () => {
    setShowIntro(false);
  };
  
  // Conditional Routing
  if (isForgotPasswordRoute) {
    return <ForgotPasswordPage />;
  }
  
  if (isAuthRoute) {
     return <AuthPage />;
  }

  // If we are on the home page, proceed with the intro animation.
  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <AnimatedIntro onAnimationComplete={handleAnimationComplete} key="intro-screen" />
      ) : (
        <LandingPageContent key="main-app" />
      )}
    </AnimatePresence>
  );
};

export default App;