// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, height=device-height, initial-scale=1,",
      title: "TESTING",
      meta: [{ name: "description", content: "pls" }],
    },
  },
});