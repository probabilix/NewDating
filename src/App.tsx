// src/App.tsx
import React from 'react';

// Core Structure & Sections
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import FeaturedAdviceSection from './components/FeaturedAdviceSection'; 
import ServiceTiersSection from './components/ServiceTiersSection'; 
import TrustSection from './components/TrustSection'; 
import FAQSection from './components/FAQSection'; 
import Footer from './components/Footer'; 

// Pages
import AuthPage from './pages/AuthPage'; 
import ForgotPasswordPage from './pages/ForgotPasswordPage'; 
import Dashboard from './pages/Dashboard';
import ChatPage from './pages/ChatPage';
import LegalPage from './pages/LegalPage';
import ContactPage from './pages/ContactPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';

const LandingPageContent: React.FC = () => (
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

const App: React.FC = () => {
  const currentPath = window.location.pathname;
  
  // Advisor Routes (Using config_id)
  if (currentPath.startsWith('/chat/')) return <ChatPage />;
  if (currentPath === '/dashboard') return <Dashboard />;

  // Auth Routes
  if (currentPath === '/login') return <AuthPage />;
  if (currentPath === '/forgot-password') return <ForgotPasswordPage />;

  // Legal & Company Routes
  if (currentPath === '/privacy') return <LegalPage type="privacy" />;
  if (currentPath === '/terms') return <LegalPage type="terms" />;
  if (currentPath === '/cookies') return <LegalPage type="cookies" />;
  if (currentPath === '/contact') return <ContactPage />;
  if (currentPath === '/stories') return <SuccessStoriesPage />;
  if (currentPath === '/careers') return <CareersPage />;
  if (currentPath === '/blog') return <BlogPage />;

  return <LandingPageContent />;
};

export default App;