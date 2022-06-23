<template>
  <section class="hero" :class="className">
    <div class="container">
      <div class="hero__wrapper">
        <div v-if="breadcrumbs" class="hero__breadcrumbs">
          <UiCrumbs :list="breadcrumbs" />
        </div>

        <h2 class="h2-title">
          {{ place.title }} <br />
          <span class="c-primary">TODO - eng description</span>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    className: String,
    place: Object,
  },

  computed: {
    breadcrumbs() {
      return [{ to: '', label: this.place.title }]
    },
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
