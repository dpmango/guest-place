const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'

export const dadataSuggestion = async (request, token) => {
  const result = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify(request),
  }).then((r) => r.text())

  return result
}
