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
                <ul class="ul-list mt-2">
                  <li>Прямая связь с площадкой в режиме реального времени</li>
                  <li>Актуальная информация, меню, цены, свободные даты</li>
                  <li>Прямая связь с площадкой в режиме реального времени</li>
                  <li>Прямая связь с площадкой в режиме реального времени</li>
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
                <ul class="ul-list mt-2">
                  <li>Прямая связь с площадкой в режиме реального времени</li>
                  <li>Актуальная информация, меню, цены, свободные даты</li>
                  <li>Прямая связь с площадкой в режиме реального времени</li>
                  <li>Прямая связь с площадкой в режиме реального времени</li>
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
}
</style>
