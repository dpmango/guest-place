export default function ({ store, redirect }) {
  // Check if user is not authenticated
  store.dispatch('auth/checkToken')
}
