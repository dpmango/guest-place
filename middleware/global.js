export default async function ({ $axios, store, $config, redirect, ...context }) {
  if (context.isStatic) {
    const token = context.$cookies.get('gp_token')

    if (token) {
      try {
        await store.commit('auth/updateToken', token)
        await store.dispatch('auth/getUserInfo')
      } catch (e) {
        await store.commit('auth/logOut')
      }
    }

    // await store.dispatch('dictionary/init')
  }
}
