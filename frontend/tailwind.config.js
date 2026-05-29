/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            colors: {
                navy: "#1B3A5C",
                blue: "#0F6FBF",
                violet: "#243B55",
                purple: "#4A7FCB",
                graphite: "#3D4F61",
                smoke: "#6E8299",
                frost: "#E3EDF8",
                light: "#F8FAFD",
                ink: "#0E1F33",
                line: "#D7E2EE",
                background: "#F8FAFD",
                foreground: "#1B3A5C",
                muted: {
                    DEFAULT: "#E3EDF8",
                    foreground: "#6E8299",
                },
                border: "#D7E2EE",
                ring: "#0F6FBF",
            },
            fontFamily: {
                display: ['"Fraunces"', "serif"],
                sans: ['"DM Sans"', "system-ui", "sans-serif"],
                mono: ['"Space Mono"', "ui-monospace", "monospace"],
            },
            letterSpacing: {
                tightest: "-0.04em",
                tighter: "-0.03em",
                mono: "0.1em",
            },
            boxShadow: {
                soft: "0 1px 2px rgba(27,58,92,0.04), 0 8px 24px -12px rgba(27,58,92,0.10)",
                lift: "0 1px 2px rgba(27,58,92,0.06), 0 18px 40px -16px rgba(27,58,92,0.18)",
                inset: "inset 0 0 0 1px rgba(27,58,92,0.06)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};