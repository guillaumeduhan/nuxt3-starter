import { defineNuxtPlugin } from "#app"
import { ApolloClient, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.API_ENDPOINT,
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_SECRET
    }
  })
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})