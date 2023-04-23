
{/* /** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    
    extend: {
      colors: {
        'primary-white': '#7a7a7a',
        'secondary-white': '#7a7a7a',
  },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },

      fontFamily: {
       abc: ["VT323", "cursive"]
      },
      
    },
  },

  plugins: [],
};
}
