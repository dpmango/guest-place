<template>
  <section class="hero" :class="className">
    <div class="container">
      <div class="hero__wrapper">
        <div v-if="breadcrumbs" class="hero__breadcrumbs">
          <UiCrumbs :list="breadcrumbs" />
        </div>

        <h2 class="h2-title">О платформе <span class="c-primary">Guest & Place</span></h2>
        <p class="h5-title c-gray mt-2">
          Платформа, позволяющая общаться напрямую! <br />
          Помогаем каждому Гостю найти “свое” место. <br />
          Мы за «прозрачные отношения»!
        </p>
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
.hero {
  position: relative;
  margin-top: 22px;
  &__wrapper {
    text-align: center;
  }
  &__breadcrumbs {
    margin-bottom: 36px;
  }
}

@include r($md) {
}
</style>
