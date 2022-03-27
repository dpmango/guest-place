const auth = '/auth'
const dictionary = '/dictionary'
const base = '/'

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
    files: `${base}/files/`,
  },
  place: {
    create: '/place/create',
  },
  feedback: {
    base: `${base}/feedback/`,
  },
  dictionary: {
    category: `${dictionary}/category/`,
    cuisine: `${dictionary}/cuisine/`,
    equipment: `${dictionary}/equipment/`,
    feature: `${dictionary}/feature/`,
    interior: `${dictionary}/interior-style/`,
    placeType: `${dictionary}/place-type/`,
    service: `${dictionary}/service/`,
  },
}
