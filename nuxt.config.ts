import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    "@": './'
  },
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css',],
  build: {
    transpile: [
      'vuetify',
      '@apollo/client',
      'ts-invariant/process',
    ],
  },
  components: {
    "dirs": [
      "~/components"
    ]
  }
})
