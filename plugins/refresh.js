import { rebuildSocket } from '~/helpers/RebuildSocket'

const UPDATE_INTERVAL = 60 * 60 * 1000 // 10 mins

async function refreshToken(context) {
  const token = context.store.state.auth.token
  const refreshToken = context.store.state.auth.refreshToken

  if (token) {
    try {
      await context.store.dispatch('auth/refreshToken', { token: token.split('Bearer ')[1], refreshToken })
      // rebuildSocket({
      //   $config: context.$config,
      //   $store: context.store,
      // })
    } catch (error) {
      context.store.commit('auth/logOut')
      context.$toast && context.$toast.global.error({ message: 'Ошибка обновления токена' })
      // throw new Error('Ошибка обновления токена');
    }
  }
}

export default function (context, inject) {
  // const token = context.$cookies.get('gp_token')
  // console.log('init token', token)

  // if (token) {
  //   await refreshToken(context)
  //   // rebuildSocket();
  // }

  // TODO - add cookies timestamps

  setInterval(() => {
    refreshToken(context)
  }, UPDATE_INTERVAL)
}
