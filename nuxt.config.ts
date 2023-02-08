// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", '@nuxt/image-edge'],
  postcss: {
    plugins: {
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
app: {
  head: {
    title: 'WIP Demo Site',
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
        hid: 'description',
        name: 'description',
        content: 'WIP Demo Site '
      }
    ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
    ],
    noscript: [
      // <noscript>Javascript is required</noscript>
      { children: 'Javascript is required' }
    ]
  }
}

  
});