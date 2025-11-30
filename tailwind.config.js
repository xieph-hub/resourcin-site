/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#172965",
        brandYellow: "#FFC000",
        brandDarkGreen: "#306B34",
        brandLightGreen: "#64C247"
      }
    }
  },
  plugins: []
};
