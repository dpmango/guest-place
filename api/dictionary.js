import endpoints from './endpoints'
import { mapApiError, mapData } from './helpers'

export const categoryDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.category)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const cuisineDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.cuisine)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const equipmentDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.equipment)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const featureDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.feature)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const interiorDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.interior)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const placeTypeDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.placeType)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const roomAmenitiesDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.roomAmenities)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const roomCategoryDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.roomCategory)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const roomServiceDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.roomService)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const roomSleepingPlaceDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.roomSleepingPlace)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}

export const serviceDictService = async ($api) => {
  try {
    const { data } = await $api.get(endpoints.dictionary.service)

    return [null, mapData(data)]
  } catch (error) {
    return [mapApiError(error), null]
  }
}
