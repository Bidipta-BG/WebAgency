/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F8FAFC', // Slate 50 (White-ish for text)
                    light: '#94A3B8',   // Slate 400 (Muted text)
                    dark: '#020617',    // Deepest background
                },
                accent: {
                    DEFAULT: '#6366f1', // Indigo 500
                    bright: '#8b5cf6',  // Violet 500
                    glow: 'rgba(99, 102, 241, 0.5)',
                },
                surface: {
                    DEFAULT: '#020617', // Slate 950 (Main BG)
                    muted: '#0F172A',   // Slate 900 (Card BG)
                    highlight: '#1E293B', // Slate 800 (Hover/Borders)
                },
                success: '#10B981', // Emerald 500
                warning: '#F59E0B', // Amber 500
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'midnight-gradient': 'linear-gradient(to bottom right, #020617, #0F172A)',
                'accent-gradient': 'linear-gradient(to right, #6366f1, #8b5cf6)',
            }
        },
    },
    plugins: [],
}
