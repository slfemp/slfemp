// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxtjs/supabase',
    '@nuxt/fonts'
  ]
})