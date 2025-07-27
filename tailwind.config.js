/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/**/*.js"

  ],
  
  theme: {
   
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        }
      },
      colors:{
        'primary':'#C78DE4',
        'darkcolor':'#111827',
        'darksec':'#1F2937'
        
      }
      
    },
  },
  plugins: [],
}