/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'century-old':"Century Old Style Std",
        'johnston': "Johnston ITC Std",
        'nunito': ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'custom': '2px 4px 14px 0px rgba(0, 0, 0, 0.15)',
        'custom-shadow': '40px 40px 100px 0px rgba(24, 48, 63, 0.16)', // Custom shadow
        'custom-top': '0px -20px 17px -14px rgba(0, 0, 0, 0.05)', // 0D in hex is approximately 5% opacity
      },
      backgroundColor: {
        'custom-gray': 'rgba(223, 222, 222, 0.4)',
      },
     
    },
  },
  plugins: [],
}

