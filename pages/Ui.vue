<template>
  <div class="ui">
    <div class="container">
      <div class="section">
        <div v-for="section in pages" :key="section.label" class="mt-2">
          <div class="h3-title f-700">{{ section.label }}</div>
          <ul class="pagelist">
            <li v-for="(page, idx) in section.list" :key="idx">
              <NuxtLink :to="page.to"
                >{{ idx + 1 }}. {{ page.label }} <small>{{ page.to }}</small></NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Модальные</h2>

        <div class="btns">
          <UiButton v-for="modal in modals" :key="modal" @click="() => setModal({ name: modal })">{{ modal }}</UiButton>
        </div>

        <ModalExpert />
        <ModalHelp />
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Типографика (typography.scss)</h2>

        <h1 class="h1-title">H1 title</h1>
        <h2 class="h2-title">H2 title</h2>
        <h3 class="h3-title">H3 title</h3>
        <h4 class="h4-title">H4 title</h4>
        <h5 class="h5-title">H5 title</h5>
        <h6 class="h6-title">H6 title</h6>

        <p class="p-main mt-2">Прямая связь с площадкой в режиме реального времени</p>
        <p class="p-regular">Прямая связь с площадкой в режиме реального времени</p>
        <p class="p-label">Прямая связь с площадкой в режиме реального времени</p>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Иконки</h2>

        <div class="icons mt-2">
          <UiSvgIcon v-for="icon in icons" :key="icon" :name="icon" />
        </div>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Цвета (_colors.scss)</h2>

        <h3 class="c-font mt-1">Font $fontColor</h3>
        <h3 class="c-gray mt-1">Gray $colorGray</h3>
        <h3 class="c-light mt-1">Light $colorLight</h3>

        <h3 class="c-primary mt-1">Primary $colorPrimary</h3>
        <h3 class="c-accent mt-1">Accent $colorAccent</h3>
        <h3 class="c-green mt-1">Green $colorGreen</h3>
        <h3 class="c-red mt-1">Red $colorRed</h3>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Кнопки</h2>

        <div class="btns">
          <UiButton>Кнопка primary</UiButton>
          <UiButton theme="outline">Кнопка outline</UiButton>
          <UiButton size="small">Кнопка primary</UiButton>
          <UiButton size="small" theme="outline">Кнопка outline</UiButton>

          <UiButton :loading="loaderStatus" loader-color="#FFF">Кнпока с загрузкой</UiButton>
        </div>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Бейдж</h2>

        <div class="btns">
          <UiBadge>Бейдж primary</UiBadge>
          <UiBadge theme="accent">Бейдж accent</UiBadge>
          <UiBadge theme="gray">Бейдж gray</UiBadge>
          <UiBadge theme="success">Кнопка success</UiBadge>
          <UiBadge theme="danger">Кнопка danger</UiBadge>
        </div>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Интерфейс</h2>

        <div class="ui-group">
          <UiInput
            :value="inputVal"
            theme="dynamic"
            name="inputVal"
            label="Фамилия"
            type="text"
            @onChange="(v) => (inputVal = v)"
          />
        </div>

        <div class="ui-group">
          <UiInput
            :value="inputVal"
            icon="key"
            icon-position="left"
            theme="dynamic"
            name="inputVal"
            label="Пароль"
            type="password"
            @onChange="(v) => (inputVal = v)"
          />
        </div>

        <div class="ui-group">
          <UiSelect
            :value="select"
            placeholder="Удобное время для звонка"
            :options="['10:00-12:00', '12:00-14:00', '14:00-18:00']"
            @onSelect="(v) => (select = v)"
          />
        </div>

        <div class="ui-group">
          <UiLoader theme="inline" :loading="true" />
        </div>

        <div class="ui-group">
          <UiStars :rating="3" />
        </div>

        <div class="ui-group">
          <UiPagination :meta="pagination" @onChange="paginationSelect" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'UiPage',
  data() {
    return {
      inputVal: '',
      select: null,
      loaderStatus: false,
      pagination: {
        page: 1,
        count: 120,
        limit: 10,
      },
      modals: ['expert', 'help', 'nav'],
      pages: [
        {
          label: 'Статика',
          list: [
            { to: '/', label: 'Главная' },
            { to: '/about', label: 'О нас' },
            { to: '/about/place', label: 'Площадкам' },
            { to: '/about/guest', label: 'Гостям' },
          ],
        },
        {
          label: 'Авторизация',
          list: [
            { to: '/auth/login', label: 'Логин' },
            { to: '/auth/signup', label: 'Регистрация' },
            { to: '/auth/password', label: 'Установить пароль' },
            { to: '/auth/recover', label: 'Восстановить пароль' },
            { to: '/auth/changepassword', label: 'Сменить пароль' },
            { to: '/auth/verify', label: 'Email верификация' },
          ],
        },

        {
          label: 'Places',
          list: [
            { to: '/place', label: 'Места на карте' },
            { to: '/place?view=list', label: 'Места списком' },
            { to: '/place/1', label: 'Place Карточка' },
            { to: '/create/place', label: '(form) Create Place' },
          ],
        },
        {
          label: 'Кабинет',
          list: [
            { to: '/profile', label: 'Профиль' },
            { to: '/profile/favorites', label: 'Избранное' },
            { to: '/profile/messages', label: 'Чат' },
          ],
        },
        {
          label: 'Сервисные',
          list: [
            { to: '/success/account', label: 'Account - Аккаунт' },
            { to: '/success/password', label: 'Password - Пароль' },
            { to: '/success/feedback', label: 'Feedback - Обратная свзяь' },
            { to: '/success/create', label: 'Create - Создано' },
            { to: '/success/question', label: 'Question - Вопрос' },
            { to: '/success/moderation', label: 'Moderation - Добро пожаловать' },
            { to: '/success/message', label: 'Message - Сообщение' },
            { to: '/success/expert-request', label: 'Expert - Запрос эксперта' },
            { to: '/success/payment', label: 'Expert - Платеж' },
          ],
        },
      ],
      icons: [
        'arrow-left',
        'camera',
        'caret',
        'chat-circle',
        'checkmark',
        'close',
        'coffee',
        'email',
        'export',
        'file',
        'filter',
        'group',
        'home',
        'id-badge',
        'key',
        'like',
        'login',
        'logout',
        'mail',
        'map-pin',
        'monitor-play',
        'paper-clip',
        'question',
        'search',
        'selection',
        'shopping-cart',
        'social-facebook',
        'social-google',
        'social-vk',
        'star',
        'user',
        'wallet',
        'noun-solution',
        'cup',
      ],
    }
  },
  head: {
    title: 'Интерфейс | Guest&Place',
  },
  mounted() {
    setInterval(() => {
      this.loaderStatus = !this.loaderStatus
    }, 2000)
  },
  methods: {
    paginationSelect(page) {
      this.pagination.page = page
    },
    ...mapMutations('ui', ['setModal']),
  },
}
</script>

<style lang="scss" scoped>
.ui {
  padding-bottom: 40px;
}
.section {
  margin: 60px 0;
  &__title {
    margin-bottom: 24px;
  }

  .ui-group {
    max-width: 420px;
    margin-bottom: 24px;
  }
}

.btns {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 16px;
  font-size: 0;
  max-width: 720px;
}
.icons {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 16px;
  font-size: 0;
  max-width: 720px;
  .svg-icon {
    font-size: 32px;
  }
}

.pagelist {
  margin: 10px 0;
  max-width: 920px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px 30px;
  li {
    display: block;
  }
  a {
    display: inline-block;
    padding: 12px 5px;
    font-size: 18px;
    line-height: 1.2;
    transition: color 0.25s $ease, border 0.25s $ease;
    border-bottom: 1px solid rgba($fontColor, 0.1);
    small {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: $colorLight;
    }
    &:hover {
      color: $colorPrimary;
      border-bottom-color: $colorPrimary;
    }
  }
}
</style>
