<template>
  <section class="features" :class="className">
    <div class="container">
      <div class="features__wrapper">
        <div class="features__decor --left">
          <img src="~/assets/img/about-features-illustration-1.svg" alt="decor image" />
        </div>
        <div class="features__decor --right">
          <img src="~/assets/img/about-features-illustration-2.svg" alt="decor image" />
        </div>

        <div class="features__content">
          <h2 class="h2-title tac">Возможности <span class="c-primary">GP Platform</span></h2>

          <div class="features__grid">
            <AboutFeature>
              <template #head>
                <UiSvgIcon name="id-badge" />
                <span>Guest</span>
              </template>

              <template #content>
                <ul class="ul-list mt-2 features__list">
                  <li>Прямая связь с площадкой в режиме реального времени</li>
                  <li>Актуальная информация, меню, цены, свободные даты</li>
                  <li>Прямое онлайн бронирование и оплата</li>
                  <li>Заказ столика, банкета, доставка еды, аренда помещения под мероприятия — все в одном месте</li>
                  <li>Онлайн просмотр</li>
                  <li>Общение в чатах, видео-встречи, консультации менеджеров площадок</li>
                  <li>Личный кабинет и вся информация в одном месте</li>
                </ul>
              </template>

              <template #cta>
                <UiButton>Зарегистрироваться </UiButton>
              </template>
            </AboutFeature>

            <AboutFeature>
              <template #head>
                <UiSvgIcon name="coffee" />
                <span>Place</span>
              </template>

              <template #content>
                <ul class="ul-list mt-2 features__list">
                  <li>Прямая связь с потенциальными Гостями</li>
                  <li>Чаты, видео-встречи</li>
                  <li>Онлайн-показ площадки</li>
                  <li>Прямые трансляции, новости, лента событий</li>
                  <li>Прямое онлайн-бронирование и оплата</li>
                  <li>Календарь бронирования в режиме реального времени</li>
                  <li>Простое приложение в системе Учета (все в одном месте)</li>
                </ul>
              </template>

              <template #cta>
                <UiButton>Зарегистрироваться </UiButton>
              </template>
            </AboutFeature>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    className: String,
  },
  data() {
    return {
      breadcrumbs: [{ to: '', label: 'О платформе' }],
    }
  },
  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.features {
  position: relative;
  margin-top: 22px;
  &__wrapper {
    position: relative;
  }
  &__content {
    padding-top: 100px;
    position: relative;
    z-index: 2;
  }
  &__list {
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
  }
  &__grid {
    margin-top: 52px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  &__decor {
    position: absolute;
    z-index: 1;
    top: -4px;
    font-size: 0;
    pointer-events: none;
    user-select: none;

    img {
      max-width: 100%;
    }
    &.--left {
      left: -75px;
      top: 20px;
    }
    &.--right {
      right: -75px;
    }
  }
}

@include r($md) {
  .features {
    &__grid {
      grid-template-columns: 1fr;
    }
    &__decor {
      display: none;
    }
  }
}
</style>
