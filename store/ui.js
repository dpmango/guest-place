export const state = () => ({
  modal: null,
  modalParams: null,
  panel: null,
})

export const getters = {}

export const mutations = {
  setModal(state, { name, params }) {
    state.modal = name || null
    state.modalParams = params || null
  },
  setPanel(state, name) {
    state.panel = name || null
  },

  resetModals(state) {
    state.modal = null
    state.modalParams = null
  },
  resetPanels(state) {
    state.panel = null
  },
}
