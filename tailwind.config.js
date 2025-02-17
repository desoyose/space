module.exports = {
  content: [
    "./index.html",            // Incluye el archivo index.html
    "./pages/**/*.html",       // Incluye todos los archivos .html dentro de la carpeta pages (fuera de src)
    "./src/**/*.{js,ts,jsx,tsx}",  // Incluye todos los archivos JS/TS en src
  ],
  theme: {
    extend: {
      colors: {
        "Blue-sky": "#3E54A3",
        "Blue_Dark": "#1E1E1E",
        "Just_black": "#0B0D17",
        "Blue_purple": "#D0D6F9",
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        bellafair: ['Bellefair', 'sans'],
      },
    },
  },
  plugins: [],
};
