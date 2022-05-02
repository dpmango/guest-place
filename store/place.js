import { getPlacesService, getPlaceByIdService, createPlaceService, uploadMediaService } from '~/api/place'

export const state = () => ({
  places: [],
  placeCreateSave: {},
})

export const getters = {
  // user: (state) => {
  //   return state.user
  // },
}

export const mutations = {
  setPlaces(state, places) {
    state.places = places
  },
  setSave(state, req) {
    state.placeCrateSave = {
      ...state.placeCrateSave,
      ...req,
    }
  },
}

export const actions = {
  async getPlaces({ commit }, request) {
    const [err, result] = await getPlacesService(this.$api, request)

    if (err) throw err

    commit('setPlaces', result)

    return result
  },
  async getPlace({ commit }, request) {
    const [err, result] = await getPlaceByIdService(this.$api, request)

    if (err) throw err

    return result
  },
  async createPlace({ commit }, request) {
    const [err, result] = await createPlaceService(this.$api, request)

    if (err) throw err

    commit('setSave', result)

    return result
  },
}
