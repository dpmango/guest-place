export const state = () => ({
  modal: null,
  modalParams: null,
  menu: null,
  menuParams: null,
})

export const mutations = {
  setMenu(state, { name, params }) {
    state.menu = name || null
    state.menuParams = params || null
  },

  setModal(state, { name, params }) {
    state.modal = name || null
    state.modalParams = params || null
  },

  resetModals(state) {
    state.modal = null
    state.modalParams = null
  },
}
