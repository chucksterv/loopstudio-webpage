/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,ejs}"],
  theme: {
    extend: {
      screens: {
        sm: "475px",
        mdlg: "900px",
        lg: "1440px",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
      },
      backgroundImage: {
        "hero-mobile": "url('../images/mobile/image-hero.jpg')",
        "hero-desktop": "url('../images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
