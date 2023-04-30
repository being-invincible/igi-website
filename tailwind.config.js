/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'magic-potion' : '#002049',
        'toddy-gold' : '#c6880a',
        'tulip-yellow' : '#e4b434',
        'energy-yellow' : '#fad155',
        'satin-linen' : '#e0d9cc',
        'alabaster' : '#fafafa'

      },
      backgroundImage: (theme) => ({
        "hero-image": "url(../public/hotel-bed-room.jpg)",
      }),
      fontFamily : {
        montserrat: ["Montserrat", "serif"],
        lato: "lato"
      },
    },
  },
  plugins: [],
}
