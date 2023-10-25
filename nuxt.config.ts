// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "public/themes/light/theme.css",
    "~/assets/styles.scss",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],

  build: {
    transpile: ["primevue"],
  },

  nitro: {
    hooks: {
      "dev:reload": () => require("sharp"),
    },
  },

  modules: ["@nuxt/image", "nuxt-primevue"],

  primevue: {
    usePrimeVue: true,
    options: {},
    components: {
      prefix: "",
      name: undefined,
      include: "*",
      exclude: undefined,
    },
    directives: {
      prefix: "",
      name: undefined,
      include: ["Ripple", "Tooltip"],
      exclude: undefined,
    },
    composables: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
  },
});
