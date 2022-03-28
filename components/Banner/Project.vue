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
          <div class="banner__row col col-6 col-md-12">
            <UiSvgIcon name="noun-solution" class="banner__icon" />
            <p>постоянный поиск новых решений и внедрение новых технологий</p>
          </div>
          <div class="banner__row col col-6 col-md-12">
            <UiSvgIcon name="cup" class="banner__icon" />
            <p>мы хотим превзойти ожидания пользователейи свои тоже :)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    className: String,
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
  &__row {
    flex-direction: row;
  }

  &__icon {
    margin-right: 15px;
    font-size: 44px;
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
    &__row {
      flex-direction: column;
    }
    &__icon {
      display: block;
      margin: 0 auto 10px;
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
