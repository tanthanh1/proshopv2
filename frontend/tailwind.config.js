/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-color": "#3c4c5d",
                "secondary-color": "#18bc9c",
                "custom-color": "#f4f4f4",
            },
        },
    },
    plugins: [],
};
