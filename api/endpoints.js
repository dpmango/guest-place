const auth = '/auth'
const api = '/api'

export default {
  auth: {
    user: `${auth}/user/`,
    login: `${auth}/signin/`,
    logout: `${auth}/logout/`,
    registration: `${auth}/signup/`,
    verifyEmail: `${auth}/signup/verify/`,
    refreshToken: `${auth}/refresh/`,
    passwordChange: `${auth}/password/change/`,
    passwordReset: `${auth}/password/reset/`,
    passwordResetConfirm: `${auth}/password/reset/confirm/`,
  },
  chat: {
    files: `${api}/files/`,
  },

  feedback: {
    base: `${api}/feedback/`,
  },
}
