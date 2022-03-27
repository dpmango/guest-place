import {
  categoryDictService,
  cuisineDictService,
  equipmentDictService,
  featureDictService,
  interiorDictService,
  placeTypeDictService,
  serviceDictService,
} from '~/api/dictionary'

export const state = () => ({
  cateogies: [],
  cusines: [],
  equipments: [],
  features: [],
  interiors: [],
  placeTypes: [],
  services: [],
})

export const getters = {
  allDictionary: (state) => {
    const { cateogies, cusines, equipments, features, interiors, placeTypes, services } = state

    return {
      cateogies,
      cusines,
      equipments,
      features,
      interiors,
      placeTypes,
      services,
    }
  },
}

export const mutations = {
  setStateList(state, { name, value }) {
    if (state[name]) {
      state[name] = [...value]
    }
  },
}

export const actions = {
  init({ dispatch }) {
    dispatch('getCategories')
    dispatch('getCusines')
    dispatch('getEquipments')
    dispatch('getFeatures')
    dispatch('getInteriors')
    dispatch('getPlaceTypes')
    dispatch('getServices')
  },
  async getCategories({ commit }, request) {
    const [err, result] = await categoryDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'categories', value: result })

    return result
  },
  async getCusines({ commit }, request) {
    const [err, result] = await cuisineDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'cusines', value: result })

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
  async getServices({ commit }, request) {
    const [err, result] = await serviceDictService(this.$api)

    if (err) throw err

    commit('setStateList', { name: 'services', value: result })

    return result
  },
}
