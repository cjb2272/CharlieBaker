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
      '4xs': '100px',
      '3xs': '376px',
      '2xs': '532px',
      'xs': '592px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        lime: colors.lime, // Extend default colors with Lime palette
        white: colors.white,
        black: colors.black,
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'] // className="font-lexend"
      },
      margin: {
        xxl: '208px' //192 + 16
      }
    },
    colors: {
      background: '#000000',
      light: '#BFFCF9',
      vibrant: '#00C9C8',
      secondary: '#426B69', //#47817F
      tertiary: '#426B69',
      transparent: 'transparent',
      //powerpointgray: '#444444'
    }
    //fontFamily: {
    //  sans: ['Graphik', 'sans-serif'], //className="font-sans"
    //}
    
    //extend: {}
  },
  plugins: [
    require('tailwind-scrollbar') //scrollbar styling  . ({ nocompatible: true })
    // ({ preferredStrategy: 'pseudoelements' }),
  ]
}

/**
 * The theme section is where you define your project’s 
 * color palette, type scale, fonts, breakpoints, border radius values, and more.
 */