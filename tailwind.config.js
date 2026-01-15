/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1754cf",
                "background-light": "#ffffff",
                "background-dark": "#111621",
                "text-main": "#0e121b",
                "text-muted": "#64748b",
                "grid-line": "#e7ebf3",
            },
            fontFamily: {
                sans: ["IBM Plex Sans Arabic", "sans-serif"],
                display: ["IBM Plex Sans Arabic", "sans-serif"]
            },
        },
    },
    plugins: [],
}
