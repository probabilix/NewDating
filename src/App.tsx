// src/App.tsx
import React from 'react';

// Core Structure Components
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
import ForgotPasswordPage from './pages/ForgotPasswordPage'; 

// New Footer-Linked Pages
import LegalPage from './pages/LegalPage';
import ContactPage from './pages/ContactPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';

// ----------------------------------------------------
// Landing Page Content Wrapper
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
// Main Application Wrapper (Handles Routing)
// ----------------------------------------------------
const App: React.FC = () => {
  
  // Get current path
  const currentPath = window.location.pathname;
  
  // --- Auth Routes ---
  if (currentPath.includes('/login')) {
     return <AuthPage />;
  }
  
  if (currentPath.includes('/forgot-password')) {
    return <ForgotPasswordPage />;
  }

  // --- Legal Routes ---
  if (currentPath === '/privacy') {
    return <LegalPage type="privacy" />;
  }
  
  if (currentPath === '/terms') {
    return <LegalPage type="terms" />;
  }
  
  if (currentPath === '/cookies') {
    return <LegalPage type="cookies" />;
  }

  // --- Company & Resource Routes ---
  if (currentPath === '/contact') {
    return <ContactPage />;
  }

  if (currentPath === '/stories') {
    return <SuccessStoriesPage />;
  }

  if (currentPath === '/careers') {
    return <CareersPage />;
  }

  if (currentPath === '/blog') {
    return <BlogPage />;
  }

  // If no specific route matches, render the Landing Page directly.
  return (
    <LandingPageContent />
  );
};

export default App;