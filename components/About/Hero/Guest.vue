<template>
  <section class="hero" :class="className">
    <div class="container">
      <div class="hero__wrapper">
        <div v-if="breadcrumbs" class="hero__breadcrumbs">
          <UiCrumbs :list="breadcrumbs" />
        </div>

        <h2 class="h2-title">Гостям <span class="c-primary">Guest & Place</span></h2>

        <div class="hero__feature">
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
      breadcrumbs: [{ to: '', label: 'Гостям' }],
    }
  },
  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  margin-top: 22px;
  &__wrapper {
    text-align: center;
  }
  &__breadcrumbs {
    margin-bottom: 36px;
  }
  &__feature {
    margin-top: 40px;
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
}

@include r($md) {
}
</style>
