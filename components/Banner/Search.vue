<template>
  <section class="banner" :class="className">
    <div class="container">
      <div class="banner__box">
        <h3 class="h3-title">Для быстрого поиска Вы можете пользоваться всеми вариантами одновременно.</h3>

        <h4 class="h4-title c-primary">
          GP Платформа позволяет общаться напрямую здесь и сейчас. Мы за «прозрачные отношения»
        </h4>
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
    padding: 60px;
    text-align: center;
  }
}

@include r($md) {
}
</style>
