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

export const getPlacesOnMapService = async ($api, request) => {
  try {
    const { data } = await $api.post(endpoints.place.map, {
      pointOne: {
        latitude: request[0][0],
        longitude: request[0][1],
      },
      pointTwo: {
        latitude: request[1][0],
        longitude: request[1][1],
      },
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
    const { data } = await $api.post(endpoints.place.create(step), {
      ...request,
    })

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const uploadMediaService = async ($api, { id, formData }) => {
  try {
    const { data } = await $api.post(endpoints.place.uploadMedia(id), formData)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}
