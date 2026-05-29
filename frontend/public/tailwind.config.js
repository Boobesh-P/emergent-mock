"/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: [\"class\"],
    content: [\"./src/**/*.{js,jsx,ts,tsx}\", \"./public/index.html\"],
    theme: {
        extend: {
            colors: {
                // SapSynk brand palette
                navy: \"#1B3A5C\",
                blue: \"#0F6FBF\",
                violet: \"#243B55\",
                purple: \"#4A7FCB\",
                graphite: \"#3D4F61\",
                smoke: \"#6E8299\",
                frost: \"#E3EDF8\",
                light: \"#F8FAFD\",
                ink: \"#0E1F33\",
                line: \"#D7E2EE\",
                // semantic mapping
                background: \"#F8FAFD\",
                foreground: \"#1B3A5C\",
                muted: {
                    DEFAULT: \"#E3EDF8\",
                    foreground: \"#6E8299\",
                },
                border: \"#D7E2EE\",
                ring: \"#0F6FBF\",
            },
            fontFamily: {
                display: ['\"Fraunces\"', \"serif\"],
                sans: ['\"DM Sans\"', \"system-ui\", \"sans-serif\"],
                mono: ['\"Space Mono\"', \"ui-monospace\", \"monospace\"],
            },
            letterSpacing: {
                tightest: \"-0.04em\",
                tighter: \"-0.03em\",
                mono: \"0.1em\",
            },
            spacing: {
                \"sp-1\": \"4px\",
                \"sp-2\": \"8px\",
                \"sp-3\": \"12px\",
                \"sp-4\": \"16px\",
                \"sp-6\": \"24px\",
                \"sp-8\": \"32px\",
                \"sp-12\": \"48px\",
                \"sp-16\": \"64px\",
                \"sp-20\": \"80px\",
            },
            borderRadius: {
                lg: \"14px\",
                md: \"10px\",
                sm: \"6px\",
            },
            maxWidth: {
                container: \"1200px\",
            },
            keyframes: {
                \"flow-dash\": {
                    \"0%\": { strokeDashoffset: \"120\" },
                    \"100%\": { strokeDashoffset: \"0\" },
                },
                \"pulse-soft\": {
                    \"0%, 100%\": { opacity: \"0.4\" },
                    \"50%\": { opacity: \"1\" },
                },
                \"fade-up\": {
                    \"0%\": { opacity: \"0\", transform: \"translateY(16px)\" },
                    \"100%\": { opacity: \"1\", transform: \"translateY(0)\" },
                },
                \"signal-travel\": {
                    \"0%\": { offsetDistance: \"0%\" },
                    \"100%\": { offsetDistance: \"100%\" },
                },
            },
            animation: {
                \"flow-dash\": \"flow-dash 2.4s linear infinite\",
                \"pulse-soft\": \"pulse-soft 2.8s ease-in-out infinite\",
                \"fade-up\": \"fade-up 600ms cubic-bezier(0.16,1,0.3,1) both\",
                \"signal-travel\": \"signal-travel 3s linear infinite\",
            },
            boxShadow: {
                soft: \"0 1px 2px rgba(27,58,92,0.04), 0 8px 24px -12px rgba(27,58,92,0.10)\",
                lift: \"0 1px 2px rgba(27,58,92,0.06), 0 18px 40px -16px rgba(27,58,92,0.18)\",
                inset: \"inset 0 0 0 1px rgba(27,58,92,0.06)\",
            },
            transitionTimingFunction: {
                op: \"cubic-bezier(0.16,1,0.3,1)\",
            },
        },
    },
    plugins: [require(\"tailwindcss-animate\")],
};
"