import React, { useState } from 'react';

const API_ENDPOINTS = {
    FORGOT_PASSWORD: '/api/v1/auth/forgot-password',
};

const ForgotPasswordPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        setError(null);
        if (!email) return setError('Please enter your email.');
        setLoading(true);

        try {
            const res = await fetch(API_ENDPOINTS.FORGOT_PASSWORD, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage(data.message || 'Check your email for reset instructions.');
                setEmail('');
            } else {
                setError(data.message || 'Something went wrong.');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto px-4 sm:px-0 mt-10">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Forgot Password
            </h3>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg
                               bg-white dark:bg-gray-900
                               border-gray-300 dark:border-gray-700
                               text-gray-900 dark:text-white"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-full bg-black text-white font-bold"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>

                {message && <p className="text-green-500 text-sm">{message}</p>}
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>

            <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
                Remember your password?{' '}
                <button
                    onClick={() => window.location.href = '/login'}
                    className="font-medium underline"
                >
                    Go back to Login
                </button>
            </p>
        </div>
    );
};

export default ForgotPasswordPage;
