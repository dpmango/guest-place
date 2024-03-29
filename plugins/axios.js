/* eslint-disable no-console */

// https://axios.nuxtjs.org/helpers
export default function ({ $axios, $sentry, store, $config, redirect }, inject) {
  const api = $axios.create({
    baseURL: $config.baseURL,
    headers: {
      common: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    },
  })

  // Inject to context as $api
  inject('api', api)

  // Interceptors
  api.onRequest((x) => {
    // console.log(`${x.method.toUpperCase()} | ${x.url}`, x.params, x.data);

    const token = store.state.auth.token
    const isOpenEndpoint = ['constants'].find((v) => x.url.includes(v))

    if (!isOpenEndpoint && token) x.headers.common.Authorization = `${token}`

    return x
  })

  api.onResponse((x) => {
    // console.log(`${x.status} | ${x.config.url}`, x.data);

    return x
  })

  api.onError(async (error) => {
    if (error.response && !error.response.config.url.includes('auth')) {
      if ([401, 403].includes(parseInt(error.response && error.response.status))) {
        await store.dispatch('auth/logout')
      }
    }

    // $sentry.captureException(error)

    return Promise.reject(error.response)
  })
}
