module.exports = {
  mode: "jit",
  // @see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")]
};
