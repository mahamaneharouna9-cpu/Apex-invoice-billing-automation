/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fintech: {
                    primary: '#0F172A', // Slate-900
                    cta: '#0284C7',     // Sky-600
                    border: '#334155',  // Slate-700
                    bg: '#020617',      // Slate-950
                }
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
