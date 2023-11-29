/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    // extend: {},
    theme: {
      sm: '640px',
      md:'769px',
      lg: '1024px',
      xl: '1536px',
      '2xl': '1536px',
      // =>@media(min-width: 1536px)
    }
  },
  plugins: [],
}

