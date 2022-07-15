import { rebuildSocket } from '~/helpers/RebuildSocket'
import { parseJwt } from '~/helpers/JWT'
import { djs } from '~/helpers/Date'

const UPDATE_INTERVAL = 1 * 60 * 1000

async function refreshToken(context) {
  const token = context.store.state.auth.token
  const refreshToken = context.store.state.auth.refreshToken

  if (token) {
    const { iat, exp, role } = parseJwt(token)
    const expiration = djs(exp * 1000)
    const minutesLeft = expiration.diff(djs(), 'minute')
    const shouldRefresh = minutesLeft <= 2

    // if (!shouldRefresh) return

    try {
      await context.store.dispatch('auth/refreshToken', { refreshToken })
      // rebuildSocket({
      //   $config: context.$config,
      //   $store: context.store,
      // })
    } catch (error) {
      context.store.commit('auth/logOut')
      context.$toast &&
        context.$toast.global.error &&
        context.$toast.global.error({ message: 'Ошибка обновления токена' })
      // throw new Error('Ошибка обновления токена');
    }
  }
}

export default async function (context, inject) {
  const token = context.$cookies.get('gp_token')

  if (token) {
    await refreshToken(context)
    // rebuildSocket();
  }

  setInterval(() => {
    refreshToken(context)
  }, UPDATE_INTERVAL)
}
