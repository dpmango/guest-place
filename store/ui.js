export const state = () => ({
  modal: null,
  modalParams: null,
})

export const mutations = {
  setModal(state, { name, params }) {
    state.modal = name || null

    state.modalParams = params || null
  },

  resetModals(state) {
    state.modal = null

    state.modalParams = null
  },
}
