export default function ({ store, redirect }) {
  // Check if user is not authenticated
  store.dispatch('auth/checkToken')

  store.commit('ui/resetModals')
  store.commit('ui/resetPanels')
}
