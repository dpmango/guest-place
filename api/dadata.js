const suggestionsUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
const geocoderUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address'

export const dadataSuggestion = async (request, token) => {
  const result = await fetch(suggestionsUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify(request),
  }).then((r) => r.json())

  return result
}

// export const dadataGeocoder = async (request, token) => {
//   // var query = { lat: 55.878, lon: 37.653 };

//   const result = await fetch(geocoderUrl, {
//     method: 'POST',
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization: 'Token ' + token,
//     },
//     body: JSON.stringify(request),
//   }).then((r) => r.json())

//   return result
// }
