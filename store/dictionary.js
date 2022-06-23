import {
  categoryDictService,
  cuisineDictService,
  equipmentDictService,
  featureDictService,
  interiorDictService,
  placeTypeDictService,
  roomAmenitiesDictService,
  roomCategoryDictService,
  roomServiceDictService,
  roomSleepingPlaceDictService,
  serviceDictService,
} from '~/api/dictionary'

export const state = () => ({
  categories: [],
  cuisines: [],
  equipments: [],
  features: [],
  interiors: [],
  placeTypes: [],
  services: [],
  roomAmenities: [],
  roomCategories: [],
  roomServices: [],
  roomSleepingPlaces: [],
})

export const getters = {
  allDictionary: (state) => {
    const { categories, cuisines, equipments, features, interiors, placeTypes, services } = state

    return {
      categories,
      cuisines,
      equipments,
      features,
      interiors,
      placeTypes,
      services,
    }
  },
  getSelectValues: (state) => (name) => {
    return state[name]
      ? state[name].map((x) => ({
          ...x,
          label: x.name,
        }))
      : []
  },
}

export const mutations = {
  setStateList(state, { name, value }) {
    if (state[name]) {
      state[name] = [...value]
    }
    // console.log(state)
  },
}

export const actions = {
  // async/awawit construction is required for nuxtServerInit
  async init({ dispatch }) {
    await dispatch('getCategories')
    await dispatch('getCuisines')
    await dispatch('getEquipments')
    await dispatch('getFeatures')
    await dispatch('getInteriors')
    await dispatch('getPlaceTypes')
    await dispatch('getRoomAmenities')
    await dispatch('getRoomCategories')
    await dispatch('getRoomServices')
    await dispatch('getRoomSleepingPlaces')
    await dispatch('getServices')
  },
  async getCategories({ commit }, request) {
    const [err, result] = await categoryDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'categories', value: result })

    return result
  },
  async getCuisines({ commit }, request) {
    const [err, result] = await cuisineDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'cuisines', value: result })

    return result
  },
  async getEquipments({ commit }, request) {
    const [err, result] = await equipmentDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'equipments', value: result })

    return result
  },
  async getFeatures({ commit }, request) {
    const [err, result] = await featureDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'features', value: result })

    return result
  },
  async getInteriors({ commit }, request) {
    const [err, result] = await interiorDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'interiors', value: result })

    return result
  },
  async getPlaceTypes({ commit }, request) {
    const [err, result] = await placeTypeDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'placeTypes', value: result })

    return result
  },
  async getRoomAmenities({ commit }, request) {
    const [err, result] = await roomAmenitiesDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'roomAmenities', value: result })

    return result
  },
  async getRoomCategories({ commit }, request) {
    const [err, result] = await roomCategoryDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'roomCategories', value: result })

    return result
  },
  async getRoomServices({ commit }, request) {
    const [err, result] = await roomServiceDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'roomServices', value: result })

    return result
  },
  async getRoomSleepingPlaces({ commit }, request) {
    const [err, result] = await roomSleepingPlaceDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'roomSleepingPlaces', value: result })

    return result
  },
  async getServices({ commit }, request) {
    const [err, result] = await serviceDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'services', value: result })

    return result
  },
}
