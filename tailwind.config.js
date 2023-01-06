/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#de3839",
          secondary: "#ffffff",
          accent: "#513448",
          neutral: "#171618",
          "base-100": "#09090B",
          info: "#66C7FF",
          success: "#87D039",
          warning: "#E3D664",
          error: "#FF7070",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
