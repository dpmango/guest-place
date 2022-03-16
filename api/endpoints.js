const auth = '/auth'
const api = '/api'

export default {
  auth: {
    user: 'user/',
    login: `${auth}/signin/`,
    logout: `${auth}/logout/`,
    registration: `${auth}/signup/`,
    verifyEmail: `${auth}/verify/`,
    refreshToken: `${auth}/refresh/`,
    passwordReset: `${auth}/password/reset/`, // request
    passwordRecovery: `${auth}/password/recovery/`, // set
  },
  chat: {
    files: `${api}/files/`,
  },

  feedback: {
    base: `${api}/feedback/`,
  },
}
