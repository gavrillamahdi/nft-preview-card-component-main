module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        softblue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        white: "hsl(0, 0%, 100%)",
        darkblue: {
          900: "hsl(217, 54%, 11%)",
          800: "hsl(216, 50%, 16%)",
          700: "hsl(215, 32%, 27%)",
        },
      },
    },
  },
  plugins: [],
};
