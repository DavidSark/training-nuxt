// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt 3 app",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com/" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap",
          
        },
      ],
    },
  },

  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxtjs/prismic", "@pinia/nuxt", "@nuxtjs/storybook"],
  prismic: {
    endpoint: process.env.NUXT_PRISMIC_ENDPOINT,
  },

  runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },
  css: ["~/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_mixins.scss";`,
        },
      },
    },
  },
});
