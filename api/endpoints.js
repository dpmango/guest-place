const auth = '/auth'
const dictionary = '/dictionary'
const forms = '/forms'
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
    find: '/place',
    map: '/map/get-by-square',
    findById: (id) => `/place/${id}`,
    create: (step) => `/place/step-${step}`,
    uploadMedia: (id) => `/place/${id}/media/upload`,
  },
  forms: {
    callToMe: (id) => `${forms}/${id}/call-to-me`,
    manager: (id) => `${forms}/${id}/manager`,
    onlineDisplay: (id) => `${forms}/${id}/online-display`,
    needHelp: `${forms}/need-help`,
    question: `${forms}/question`,
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
    roomAmenities: `${dictionary}/room/amenities`,
    roomCategory: `${dictionary}/room/category`,
    roomService: `${dictionary}/room/service`,
    roomSleepingPlace: `${dictionary}/room/sleeping-place`,
    service: `${dictionary}/service/`,
  },
}
