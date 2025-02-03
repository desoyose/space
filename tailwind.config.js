// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "principal": "#f67464",
        "Neutral-0": "hsl(0, 0%, 100%)",
        "Neutral-300": "hsl(252, 6%, 83%)",
        "Neutral-500": "hsl(245, 15%, 58%)",
        "Neutral-700": "hsl(245, 19%, 35%)",
        "Neutral-900": "hsl(248, 70%, 10%)",

        "Orange-500": "hsl(7, 88%, 67%)",
        "Orange-700": "hsl(7, 71%, 60%)",
        

        "Gradient": "hsl(7, 86%, 67%) to hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        'gradient-hsl': 'linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))',
      },
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'],  // Configuración de fuente
      },
    },
  },
  plugins: [],
};
