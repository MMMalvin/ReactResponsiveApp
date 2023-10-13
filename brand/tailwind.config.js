/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    // color scheme for the web page
    colors: { 
      primary: "#70259B",    
      secondary: "#FFFFFF",
    },
    // font scheme for the web page
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  // various different screen sizes
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];

