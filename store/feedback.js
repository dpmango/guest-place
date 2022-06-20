import {
  feedbackService,
  callToMeService,
  managerService,
  onlineDisplayService,
  needHelpService,
  questionService,
} from '~/api/feedback'

export const actions = {
  async feedback({ commit }, request) {
    const [err, result] = await feedbackService(this.$api, request)

    if (err) throw err

    return result
  },

  async formCallToMe({ commit }, request) {
    const [err, result] = await callToMeService(this.$api, request)

    if (err) throw err

    return result
  },

  async formManager({ commit }, request) {
    const [err, result] = await managerService(this.$api, request)

    if (err) throw err

    return result
  },

  async formOnlineDisplay({ commit }, request) {
    const [err, result] = await onlineDisplayService(this.$api, request)

    if (err) throw err

    return result
  },

  async formNeedHelp({ commit }, request) {
    const [err, result] = await needHelpService(this.$api, request)

    if (err) throw err

    return result
  },

  async formQuestion({ commit }, request) {
    const [err, result] = await questionService(this.$api, request)

    if (err) throw err

    return result
  },
}
