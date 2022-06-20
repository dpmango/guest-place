<template>
  <section class="hero" :class="className">
    <div class="container">
      <div class="hero__wrapper">
        <div v-if="breadcrumbs" class="hero__breadcrumbs">
          <UiCrumbs :list="breadcrumbs" />
        </div>

        <h2 class="h2-title">Площадкам <span class="c-primary">Guest & Place</span></h2>

        <div class="hero__feature">
          <AboutFeature>
            <template #head>
              <UiSvgIcon name="coffee" />
              <span>Place</span>
            </template>

            <template #content>
              <ul class="ul-list mt-2">
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
      breadcrumbs: [{ to: '', label: 'Площадкам' }],
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
