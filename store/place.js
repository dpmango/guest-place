import {
  getPlacesService,
  getPlacesOnMapService,
  getPlaceByIdService,
  createPlaceService,
  uploadMediaService,
} from '~/api/place'

export const state = () => ({
  placeView: {},
  places: [],
  placesMeta: {
    page: 1,
    count: 0,
    countPages: 1,
    limit: 20,
  },
  mapPlaces: [],
  placeCreateSave: {},
})

export const getters = {
  getPlaceView: (state) => {
    return state.placeView
  },
  getSavedId: (state) => {
    return state.placeCreateSave.id || 11 // tmp dev
  },
  getPlacesOnMap: (state) => {
    return state.mapPlaces
  },
}

export const mutations = {
  setPlaces(state, { places, isNew }) {
    if (isNew) {
      state.places = places
    } else {
      state.places = [...state.places, places]
    }
  },
  setPlacesMeta(state, { totalItems, totalPages, pageSize, currentPageNumber }) {
    state.placesMeta = {
      page: currentPageNumber + 1,
      count: totalItems,
      countPages: totalPages,
      limit: pageSize,
    }
  },
  setPlaceView(state, payload) {
    state.placeView = {
      ...payload,
    }
  },
  setSave(state, req) {
    state.placeCreateSave = {
      ...state.placeCreateSave,
      ...req,
    }
  },
}

export const actions = {
  async getPlaces({ commit }, request) {
    const [err, result] = await getPlacesService(this.$api, request)

    if (err) throw err

    console.log(result)
    const { content, totalItems, totalPages, pageSize, currentPageNumber } = result

    commit('setPlaces', { places: content, isNew: currentPageNumber === 0 })
    commit('setPlacesMeta', { totalItems, totalPages, pageSize, currentPageNumber })

    return result
  },

  async getMapPlaces({ commit }, request) {
    const [err, result] = await getPlacesOnMapService(this.$api, request)

    if (err) throw err

    // commit('setPlaces', result)

    return result
  },
  async getPlace({ commit }, id) {
    const [err, result] = await getPlaceByIdService(this.$api, id)

    console.log(result)
    if (err) throw err

    commit('setPlaceView', result)

    return result
  },
  async createPlace({ commit }, request) {
    const [err, result] = await createPlaceService(this.$api, request)

    if (err) throw err

    commit('setSave', result)

    return result
  },
  async uploadMedia({ commit }, { id, files }) {
    const filesData = files.map((file) => {
      const formData = new FormData()
      formData.append('description', file.description)
      formData.append('fileType', file.fileType)
      formData.append('file', file.file)

      return formData
    })

    const responces = []
    const errors = []

    await Promise.all(
      filesData.map(async (file, idx) => {
        const [err, result] = await uploadMediaService(this.$api, { id, formData: file })

        if (err) {
          errors.push(err)
        } else {
          responces.push(result)
        }
      })
    )

    if (errors && errors.length) {
      throw errors[0]
    }

    // commit('setSave', result)

    return responces
  },
}
