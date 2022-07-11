export default defineNuxtRouteMiddleware((to) => {
  console.log(to)
  console.log('Heading to', to.path, 'but I think we should go somewhere else...')
})
