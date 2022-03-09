<template>
  <section class="hero">
    <div class="container">
      <div class="hero__background">
        <img src="~/assets/img/hero-map-background.svg" alt="hero background image" />
      </div>
      <div class="hero__wrapper">
        <div class="hero__main-row row">
          <div class="col col-6 col-lg-12">
            <div class="hero__content">
              <h1 class="hero__title h1-title">Социальная интерактивная <span class="c-primary">платформа</span></h1>
              <p class="p-main mt-1">
                Соединяем <span class="c-primary">гостей и места</span>
                <br />
                Общение, бронирование <span class="c-primary">здесь и сейчас</span>
              </p>
            </div>
          </div>
          <div class="col col-6 col-lg-12">
            <div class="hero__image">
              <img src="~/assets/img/hero-main-illustration.svg" alt="hero main illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },

  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  .container {
    position: relative;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
  }
  &__wrapper {
    position: relative;
    z-index: 2;
  }
  &__main-row {
    align-items: center;
  }
  &__image {
    text-align: center;
    font-size: 0;
    margin-left: -20px;
    margin-top: 0px;
    img {
      max-width: 100%;
    }
  }
}

@include r($md) {
}
</style>
