/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx,html}', './node_modules/@library/jui/**/*.js'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@library/jui/dist/jk-theme-plugin')],
};
