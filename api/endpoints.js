const auth = '/rest-auth'
const api = '/api'

export default {
  auth: {
    user: `${auth}/user/`,
    login: `${auth}/login/`,
    logout: `${auth}/logout/`,
    registration: `${auth}/registration/`,
    verifyEmail: `${auth}/registration/verify/`,
    refreshToken: `${auth}/token-refresh/`,
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
