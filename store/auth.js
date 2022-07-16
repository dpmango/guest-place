import {
  loginService,
  signupService,
  refreshTokenService,
  verifyGetService,
  passwordSetService,
  recoverService,
  passwordChangeService,
  logoutService,
  userService,
  updateUserService,
} from '~/api/auth'
import { parseJwt } from '~/helpers/JWT'
import { djs } from '~/helpers/Date'

export const state = () => ({
  token: null,
  refreshToken: null,
  user: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    avatar: null,
    email_notifications: undefined,
    email_confirmed: undefined,
    dialog: null,
  },
})

export const getters = {
  user: (state) => {
    return state.user
  },
  token: (state) => {
    return state.token
  },
  isAuthenticated: (state) => {
    return !!state.token
  },
}

export const mutations = {
  logOut(state) {
    state.token = null
    state.refreshToken = null
    state.user = {
      id: null,
      email: null,
      firstName: null,
      lastName: null,
      avatar: null,
      email_notifications: undefined,
      email_confirmed: undefined,
      dialog: null,
    }

    this.$cookies.remove('gp_token')
    this.$cookies.remove('gp_refresh_token')
    this.$api.setToken(false)

    this.$router.push('/auth/login')
  },
  updateToken(state, { token, refreshToken }) {
    if (token) {
      state.token = token
      // const {iat, exp, role} = parseJwt(token)

      this.$cookies.set('gp_token', token)
    }
    if (refreshToken) {
      state.refreshToken = refreshToken

      this.$cookies.set('gp_refresh_token', refreshToken)
    }
  },
  updateUser(state, user) {
    state.user = { ...state.user, ...user }
    // const keys = Object.keys(user);
    // keys.forEach((key) => {
    //   state.user[key] = user[key];
    // });
  },
  verifyUserEmail(state, id) {
    state.user.id = id
    state.user.email_confirmed = true
  },
  // updateUserPhoto(state, user) {
  //   state.user.avatar = user.avatar;
  // },
}

export const actions = {
  checkToken({ commit }) {
    const token = this.$cookies.get('gp_token')
    const refreshToken = this.$cookies.get('gp_refresh_token')

    if (token) {
      commit('updateToken', { token, refreshToken })
    }
  },
  async getUserInfo({ commit }, request) {
    const [err, result] = await userService(this.$api)

    if (err) throw err

    commit('updateUser', result)

    return result
  },
  async login({ commit }, request) {
    const [err, result] = await loginService(this.$api, request)

    if (err) throw err

    const { token, refreshToken } = result

    commit('updateToken', { token, refreshToken })
    // commit('updateUser', user)

    return result
  },
  async signup({ commit, _dispatch }, request) {
    const [err, result] = await signupService(this.$api, request)

    if (err) throw err

    const { id } = result

    // commit('updateToken', token)
    commit('updateUser', { id })

    return result
  },
  async refreshToken({ commit }, request) {
    const [err, result] = await refreshTokenService(this.$api, request)

    if (err);

    const { token, refreshToken } = result

    commit('updateToken', { token, refreshToken })

    return result
  },
  async verifyGet({ commit }, request) {
    const [err, result] = await verifyGetService(this.$api, request)

    if (err) throw err

    const { id } = result

    commit('verifyUserEmail', id)

    return result
  },
  async passwordSet({ commit, _dispatch }, request) {
    const [err, result] = await passwordSetService(this.$api, request)

    if (err) throw err

    const { token, refreshToken } = result

    commit('updateToken', { token, refreshToken })

    return result
  },
  async recover({ commit, _dispatch }, request) {
    const [err, result] = await recoverService(this.$api, request)

    if (err) throw err

    const { detail } = result

    return result
  },
  async passwordChange({ commit, _dispatch }, request) {
    const [err, result] = await passwordChangeService(this.$api, request)

    if (err) throw err

    const { detail } = result

    return result
  },
  logout({ commit, dispatch }) {
    // const [err, result] = await logoutService(this.$api)

    // if (err) throw err

    commit('logOut')

    // dispatch('chat/disconnect', null, { root: true })
    // commit('chat/resetMessages', null, { root: true })

    // this.$router.push('/')

    // return result
  },
  async update({ commit }, request) {
    const [err, result] = await updateUserService(this.$api, request)

    if (err) throw err

    commit('updateUser', result)

    return result
  },
}
