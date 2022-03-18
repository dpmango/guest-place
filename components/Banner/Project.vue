<template>
  <section class="banner" :class="className">
    <div class="container">
      <div class="banner__box">
        <div class="banner__head">
          <h3 class="h3-title">
            <img src="~/assets/img/logo.svg" alt="logo" />
            - проект от души :)
          </h3>

          <h4 class="h5-title mt-2">
            Лидерство на рынке обеспечивается нашей талантливой командой, экспертами своего дела
          </h4>
        </div>

        <div class="row mt-5">
          <div class="col col-6 col-md-12">
            <UiSvgIcon name="noun-solution" class="banner__icon" />
            <p>постоянный поиск новых решений и внедрение новых технологий</p>
          </div>
          <div class="col col-6 col-md-12">
            <UiSvgIcon name="cup" class="banner__icon" />
            <p>мы хотим превзойти ожидания пользователейи свои тоже :)</p>
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
  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  &__box {
    position: relative;
    background: #ecf4fd;
    border-radius: 40px;
    padding: 72px 60px;
  }
  &__head {
    text-align: center;
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
  }
  &__icon {
    display: none;
  }
}

@include r($md) {
  .banner {
    &__box {
      padding: 60px 20px;
    }
    img {
      width: 100%;
      display: block;
      margin: 0 auto;
      max-width: 250px;
    }
    &__icon {
      display: block;
      margin: 0 auto;
      width: 44px !important;
      height: 44px;
    }
    .col {
      padding: 0;
      text-align: center;
    }
    .row {
      margin: 0;
      margin-top: 25px !important;
      gap: 30px;
    }
  }
}
</style>
