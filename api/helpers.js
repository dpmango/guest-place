export const mapApiError = (error) => {
  if (!error) {
    return {
      data: null,
      message: 'Ошибка Соединения',
      code: 401,
      exception: 'CORS или сервер',
    }
  }

  let data = error.data
  let message = Array.isArray(data.details) ? data.details[0] : data.details || data.detail || ''

  switch (error.status) {
    case 500:
      data = 'Ошибка сервера'
      message = 'Сервер ответил ошибкой'
      break

    case 404:
      data = 'Не найдено'
      message = 'На сервере не найдено'
      break

    default:
      break
  }

  return {
    data,
    message,
    code: error.status,
    exception: data.exception,
  }
}

export const mapData = (data) => {
  return data
}

export const selectToApi = (select) => {
  if (typeof select === 'string' && select.trim() !== '') {
    return {
      id: 99,
      name: select,
    }
  } else if (Array.isArray(select)) {
    return select.map((x) => ({
      id: x.id,
      name: x.label,
    }))
  } else {
    return null
  }
}
