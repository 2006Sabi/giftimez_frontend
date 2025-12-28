/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00C8FA", // GiftTimeZ Blue
                "primary-hover": "#00A0C8", // Darker shade for hover
                "secondary": "#FA0000", // GiftTimeZ Red
                "text-dark": "#000000",
                "text-light": "#94A3B8",
                "bg-light": "#F0F9FF",
                "sidebar-bg": "#FFFFFF",
                "accent-hover": "#E0F2FE",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
