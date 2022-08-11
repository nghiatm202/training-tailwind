/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "JIT",
  content: [
    './views/**/*.pug',
    './public/**/*.html',
    './app/**/*.{js,jsx,ts,tsx,vue}',
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    extend: {
      colors: {
        'black10': '#101828',
        'grayf2': '#F2F4F7'
      },
      translate: {
        '-50%': '-50%',
      },
      spacing: {
        '-20px': '-20px',
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      margin: ["group-hover"],
      visibility: ["group-hover"],
    }
  },
  plugins: [],
};
