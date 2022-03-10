<template>
  <section class="info mt-4 mb-4">
    <div class="container">
      <h2 class="h2-title tac">Варианты взаимодействия с <span class="c-primary">GP Platform</span></h2>

      <div class="info__grid mt-4">
        <div class="">
          <h4 class="h4-title c-primary">Самостоятельный поиск и бронирование</h4>
          <p class="h5-title mt-1">
            С помощью удобного фильтра и карты подбираете места и сами связываетесь с ними через чат, запрос или
            звоните. Данную опцию можно использовать без на платформе (за исключением чата).
          </p>
          <UiButton theme="outline">Каталог поиска</UiButton>
        </div>

        <div class="">
          <h4 class="h4-title c-primary">Самостоятельный поиск и бронирование</h4>
          <p class="h5-title mt-1">
            С помощью удобного фильтра и карты подбираете места и сами связываетесь с ними через чат, запрос или
            звоните. Данную опцию можно использовать без на платформе (за исключением чата).
          </p>
          <UiButton theme="outline">Каталог поиска</UiButton>
        </div>

        <div class="">
          <h4 class="h4-title c-primary">Самостоятельный поиск и бронирование</h4>
          <p class="h5-title mt-1">
            С помощью удобного фильтра и карты подбираете места и сами связываетесь с ними через чат, запрос или
            звоните. Данную опцию можно использовать без на платформе (за исключением чата).
          </p>
          <UiButton theme="outline">Каталог поиска</UiButton>
        </div>

        <div class="">
          <h4 class="h4-title c-primary">Самостоятельный поиск и бронирование</h4>
          <p class="h5-title mt-1">
            С помощью удобного фильтра и карты подбираете места и сами связываетесь с ними через чат, запрос или
            звоните. Данную опцию можно использовать без на платформе (за исключением чата).
          </p>
          <UiButton theme="outline">Каталог поиска</UiButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.info {
  position: relative;
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px 30px;
  }
}

@include r($md) {
}
</style>
