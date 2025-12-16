// src/pages/AuthPage.tsx
import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import AuthForm from '../components/AuthForm';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggleMode = () => {
        setIsLogin(prev => !prev);
    };

    // Updated handleSubmit to receive the endpoint string
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, endpoint: string) => {
        e.preventDefault();
        
        const action = isLogin ? 'Login' : 'Signup';

        // --- REAL AUTH LOGIC WOULD GO HERE ---
        // 1. Collect form data (email, password, etc.)
        // 2. Make API call using the defined 'endpoint'
        // fetch(endpoint, { method: 'POST', body: formData })
        
        alert(`${action} successful (Simulated). Using API Endpoint: ${endpoint}. Redirecting to /app/home...`);
        // On success, redirect to the main app page
        // window.location.href = '/app/home';
    };

    return (
        <AuthLayout>
            <AuthForm 
                isLogin={isLogin} 
                onToggleMode={handleToggleMode} 
                onSubmit={handleSubmit}
            />
        </AuthLayout>
    );
};

export default AuthPage;