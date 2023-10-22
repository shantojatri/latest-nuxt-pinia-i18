// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: "123",
    // Public keys that are exposed to the client
    public: {
      baseURL: process.env.APP_BASE_URL ?? "http://localhost:3000",
      apiURL:
        process.env.API_BASE_URL ?? "https://jsonplaceholder.typicode.com",
    },
  },
  css: ["~/assets/css/main.css", "remixicon/fonts/remixicon.css"],
  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@vueuse/nuxt"],
  i18n: {
    legacy: false,
    globalInjection: true,
    locale: 'bn',
    defaultLocale: 'bn', 
    detectBrowserLanguage: {
      useCookie: true, 
      fallbackLocale: 'bn',
      cookieKey: "site_language",
      alwaysRedirect: false,
      redirectOn: "root",
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieSecure: false,
    }, 
    lazy: true,
    langDir: "lang/",
    locales: [
      { code: 'bn', iso: "bn-BD", file: "bn.json" },
      { code: 'en', iso: "en-US", file: "en.json" },
    ],
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
