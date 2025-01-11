/** @type {import('tailwindcss').Config} */

/**
 * The tailwind.config.js file is where you can configure your Tailwind installation.
 * https://v2.tailwindcss.com/docs/configuration
 * the config by default: https://unpkg.com/browse/tailwindcss@2.2.19/stubs/defaultConfig.stub.js
 *    - also found on github somewhere
 * 
 * Use tailwind.config.js for defining reusable themes (e.g., fonts, colors, spacing).
 * DONT MISTAKE THIS FOR BEING A GLOBAL CSS FILE, we are defining things to use.
 */

const colors = require('tailwindcss/colors')

module.exports = {
  //darkMode: false, // or 'media' or 'class'
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: { // customize the responsive breakpoints in your project.
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        lime: colors.lime, // Extend default colors with Lime palette
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'] // className="font-lexend"
      }
    }

    //fontFamily: {
    //  sans: ['Graphik', 'sans-serif'], //className="font-sans"
    //}
    
    //extend: {}
  }
  //plugins: [],
}

/**
 * The theme section is where you define your project’s 
 * color palette, type scale, fonts, breakpoints, border radius values, and more.
 */