import Vue from 'vue'
import { extend, ValidationProvider, ValidationObserver, setInteractionMode } from 'vee-validate'
import { required, email, alpha, confirmed, min, max, oneOf } from 'vee-validate/dist/rules'

extend('required', { ...required, message: 'Это поле не может быть пустым' })
extend('email', { ...email, message: 'Неверный формат E-mail' })
extend('alpha', { ...alpha, message: 'Поле должно содержать только буквы' })
extend('confirmed', { ...confirmed, message: 'Пароли не совпадают' })
extend('min', { ...min, message: 'Минимум {length} символов' })
extend('max', { ...max, message: 'Максимум {length} символов' })
extend('oneOf', { ...oneOf, message: 'Выберите один из вариантов' })

extend('tel', {
  validate: (value) => {
    // eslint-disable-next-line no-useless-escape
    const reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    return value.match(reg)
  },
  message: 'Введите номер телефона',
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

setInteractionMode('eager')
