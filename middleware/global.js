export default async function ({ $axios, store, $config, redirect, ...context }) {
  if (context.isStatic) {
    const token = context.$cookies.get('gp_token')

    if (token) {
      try {
        await store.commit('auth/updateToken', token)
        await store.dispatch('auth/getUserInfo')
        await store.dispatch('dictionary/init')
      } catch (e) {
        await store.commit('auth/logOut')
      }
    }
  }
}
