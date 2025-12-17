// src/data/PageContent.ts

export const LEGAL_CONTENT = {
    privacy: {
        title: "Privacy Policy",
        lastUpdated: "October 2025",
        sections: [
            { h: "Data Collection", p: "We collect encrypted chat logs and voice data to improve your AI coach." },
            { h: "Security", p: "All interactions are end-to-end encrypted and never sold to third parties." }
        ]
    },
    terms: {
        title: "Terms of Use",
        lastUpdated: "October 2025",
        sections: [
            { h: "User Conduct", p: "You agree to use our AI advice for personal growth and ethical dating." },
            { h: "Subscription", p: "Tiers are billed monthly and can be canceled at any time." }
        ]
    },
    cookies: {
        title: "Cookie Policy",
        lastUpdated: "October 2025",
        sections: [
            { h: "Why we use them", p: "We use essential cookies for authentication and theme persistence." },
            { h: "Are they necessary?", p: "Yes. Without session cookies, you cannot stay logged into your account." }
        ]
    }
};

export const CAREERS_CONTENT = {
    title: "Join the Team",
    intro: "We're building the future of human connection.",
    jobs: [
        { role: "AI Prompt Engineer", type: "Full-time / Remote" },
        { role: "Senior React Developer", type: "Contract" }
    ]
};

export default { LEGAL_CONTENT, CAREERS_CONTENT };