import React, { useState } from 'react';
// --- API ENDPOINT DEFINITIONS ---
const API_ENDPOINTS = {
    LOGIN: '/api/v1/auth/login',
    SIGNUP: '/api/v1/auth/register',
    GOOGLE_LOGIN: '/api/v1/auth/google',
    APPLE_LOGIN: '/api/v1/auth/apple',
};

interface AuthFormProps {
    isLogin: boolean;
    onToggleMode: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>, endpoint: string) => void;
}

// --- PASSWORD VALIDATION ---
const isPasswordStrong = (password: string): boolean => {
    if (password.length < 8) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[^A-Za-z0-9]/.test(password)) return false;
    return true;
};

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onToggleMode, onSubmit }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // tooltip states (CLICK ONLY)
    const [showPwdHint, setShowPwdHint] = useState(false);
    const [showConfirmPwdHint, setShowConfirmPwdHint] = useState(false);

    const title = isLogin ? 'Sign in to your account' : 'Create an account';
    const submitText = isLogin ? 'Sign In' : 'Sign Up';
    const togglePrompt = isLogin ? 'Need an account?' : 'Already have an account?';
    const toggleAction = isLogin ? 'Sign Up' : 'Sign In';

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isLogin && !isPasswordStrong(password)) {
            setPasswordError(
                'Password must be 8+ characters, including uppercase, lowercase, number, and special character.'
            );
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }

        const endpoint = isLogin ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.SIGNUP;
        onSubmit(e, endpoint);
        setPasswordError(null);
    };

    const handleSocialAuth = (endpoint: string) => {
        alert(`Redirecting for social login to: ${endpoint}`);
    };

    return (
        <div className="w-full max-w-md mx-auto px-4 sm:px-0">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-6">
                {title}
            </h3>

            {/* Social Buttons */}
            <div className="mt-6 space-y-3">
                <button
                    type="button"
                    onClick={() => handleSocialAuth(API_ENDPOINTS.GOOGLE_LOGIN)}
                    className="w-full flex items-center justify-center px-4 py-2 border rounded-full shadow-sm
                               bg-white dark:bg-gray-900 dark:border-gray-700
                               text-gray-900 dark:text-white"
                >
                    <img src="/GoogleLogo.png" className="h-5 w-5 mr-3" />
                    {submitText} with Google
                </button>

                <button
                    type="button"
                    onClick={() => handleSocialAuth(API_ENDPOINTS.APPLE_LOGIN)}
                    className="w-full flex items-center justify-center px-4 py-2 border rounded-full shadow-sm
                               bg-white dark:bg-gray-900 dark:border-gray-700
                               text-gray-900 dark:text-white"
                >
                    <img src="/AppleLogo.png" className="h-5 w-5 mr-3" />
                    {submitText} with Apple
                </button>
            </div>

            <div className="flex items-center my-6">
                <div className="flex-1 border-t dark:border-gray-700" />
                <span className="px-3 text-sm text-gray-500">Or</span>
                <div className="flex-1 border-t dark:border-gray-700" />
            </div>

            <form className="space-y-4" onSubmit={handleFormSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full px-4 py-3 border rounded-lg
                                   bg-white dark:bg-gray-900
                                   border-gray-300 dark:border-gray-700
                                   text-gray-900 dark:text-white"
                    />
                )}

                <input
                    type="email"
                    placeholder="Email address"
                    required
                    className="w-full px-4 py-3 border rounded-lg
                               bg-white dark:bg-gray-900
                               border-gray-300 dark:border-gray-700
                               text-gray-900 dark:text-white"
                />

                {/* PASSWORD */}
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        required
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError(null);
                        }}
                        className="w-full px-4 py-3 pr-12 border rounded-lg
                                   bg-white dark:bg-gray-900
                                   border-gray-300 dark:border-gray-700
                                   text-gray-900 dark:text-white"
                    />

                    <button
                        type="button"
                        onClick={() => {
                            setShowPassword(p => !p);
                            setShowPwdHint(true);
                            setTimeout(() => setShowPwdHint(false), 1200);
                        }}
                        className="absolute inset-y-0 right-0 px-3 flex items-center
                                   text-gray-600 dark:text-gray-300"
                    >
                        {showPassword ? eyeOffIcon : eyeIcon}
                    </button>

                    {showPwdHint && (
                        <span className="absolute -top-8 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                            {showPassword ? 'Hide password' : 'Show password'}
                        </span>
                    )}
                </div>

                {/* Forgot Password Redirect */}
                {isLogin && (
                    <div className="text-right mt-1">
                        <button
                            type="button"
                            onClick={() => window.location.href = '/forgot-password'}
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>
                )}

                {/* CONFIRM PASSWORD */}
                {!isLogin && (
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 pr-12 border rounded-lg
                                       bg-white dark:bg-gray-900
                                       border-gray-300 dark:border-gray-700
                                       text-gray-900 dark:text-white"
                        />

                        <button
                            type="button"
                            onClick={() => {
                                setShowConfirmPassword(p => !p);
                                setShowConfirmPwdHint(true);
                                setTimeout(() => setShowConfirmPwdHint(false), 1200);
                            }}
                            className="absolute inset-y-0 right-0 px-3 flex items-center
                                       text-gray-600 dark:text-gray-300"
                        >
                            {showConfirmPassword ? eyeOffIcon : eyeIcon}
                        </button>

                        {showConfirmPwdHint && (
                            <span className="absolute -top-8 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                                {showConfirmPassword ? 'Hide password' : 'Show password'}
                            </span>
                        )}
                    </div>
                )}

                {passwordError && (
                    <p className="text-red-500 text-xs">{passwordError}</p>
                )}

                <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-black text-white font-bold"
                >
                    {submitText}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
                {togglePrompt}{' '}
                <button onClick={onToggleMode} className="font-medium underline">
                    {toggleAction}
                </button>
            </p>
        </div>
    );
};

export default AuthForm;

// ---- ICONS (shared) ----
const eyeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5
            c4.478 0 8.268 2.943 9.542 7
            -1.274 4.057-5.064 7-9.542 7
            -4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const eyeOffIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19
            c-4.478 0-8.268-2.943-9.543-7
            a9.97 9.97 0 011.563-3.414M6.18 6.18
            A9.956 9.956 0 0112 5
            c4.478 0 8.268 2.943 9.543 7
            a9.97 9.97 0 01-4.293 5.134" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 3l18 18" />
    </svg>
);
