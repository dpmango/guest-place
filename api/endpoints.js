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
    passwordSet: `${auth}/password/set`, // set with userId (initial)
    passwordReset: `${auth}/password/reset/`, // request reset
    passwordRecovery: `${auth}/password/recovery/`, // set with email token
  },
  chat: {
    files: `${api}/files/`,
  },

  feedback: {
    base: `${api}/feedback/`,
  },
}
