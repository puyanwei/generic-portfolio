module.exports = {
  content: [`./src/**/*.ts`, `./src/**/*.tsx`],
  theme: {
    extend: {},
    screens: {
      sm: { min: `0` },
      md: `768px`,
      lg: `1024px`,
      xl: `1280px`,
      xxl: { min: `1281px` },
    },
    fontFamily: {
      sans: [`Poppins`, `sans-serif`],
    },
  },
  plugins: [],
}
