import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = { apiKey: '9ba9a278-66f0-47c6-8197-0d404ee0def5', lang: 'ru_RU' } // настройки плагина

Vue.use(YmapPlugin, settings)
