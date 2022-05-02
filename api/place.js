import endpoints from './endpoints'
import { mapApiError, mapData } from './helpers'

export const getPlacesService = async ($api, request) => {
  try {
    const { data } = await $api.get(endpoints.place.find, {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const getPlaceByIdService = async ($api, id) => {
  try {
    const { data } = await $api.get(endpoints.place.find(id))

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const createPlaceService = async ($api, { step, ...request }) => {
  try {
    console.log('create service inputs ::', step, request)
    const { data } = await $api.post(endpoints.place.create(step), {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const uploadMediaService = async ($api, { id, ...request }) => {
  try {
    console.log('upload media service inputs ::', id, request)
    const { data } = await $api.post(endpoints.place.uploadMedia(id), {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}
