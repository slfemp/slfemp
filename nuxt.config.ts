// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxtjs/supabase',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/html-validator',
    '@nuxtjs/seo'
  ],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/*"], // We implement our own auth behaviour in the auth middleware
    },
  },
  experimental: {
    componentIslands: true,
  },
  site: {
    url: "https://slfemp.github.io/slfemp/", // Updated to reflect GitHub Pages URL
    name: "SLFEMP",
    description: "Houston Legend",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
  ogImage: {
    fonts: [
      "Barlow+Condensed:500",
      "Oswald:300",
    ],
  },
  image: {
  },
  // https://html-validator.nuxtjs.org/
  htmlValidator: {
    usePrettier: false,
    logLevel: 'verbose',
    failOnError: false,
    /** A list of routes to ignore (that is, not check validity for). */
    ignore: [/\.(xml|rss|json)$/],
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard'
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off'
      }
    }
  }
})