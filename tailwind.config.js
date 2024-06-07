/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grid-pattern": `
          linear-gradient(to right, rgb(203 213 225) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(203 213 225) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        "custom-size": "2.5rem 2.5rem",
      },
    },
  },
  plugins: [],
};
