/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
      extend: {

        colors: {
          primary: '#0096FF',
          secondary: '#265587',
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%)',
        },
      },
    },
    plugins: [],
  };
