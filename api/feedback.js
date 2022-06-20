import endpoints from './endpoints'
import { mapApiError, mapData } from './helpers'

export const feedbackService = async ($api, request) => {
  try {
    const { data } = await $api.post(endpoints.feedback.base, {
      ...request,
      ...{ phone: request.phone.replace(/[^A-Z0-9]/gi, '') },
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const callToMeService = async ($api, request) => {
  try {
    const { data } = await $api.post(endpoints.forms.callToMe(request.id), {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const managerService = async ($api, request) => {
  try {
    const { data } = await $api.post(endpoints.forms.manager(request.id), {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const onlineDisplayService = async ($api, request) => {
  try {
    const { data } = await $api.post(endpoints.forms.onlineDisplay(request.id), {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const needHelpService = async ($api, request) => {
  try {
    const { data } = await $api.post(endpoints.forms.needHelp, {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const questionService = async ($api, request) => {
  try {
    const { data } = await $api.post(endpoints.forms.question, {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}
