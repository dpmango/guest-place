<template>
  <section class="tools" :class="className">
    <div class="container">
      <div class="tools__head">
        <h2 class="h2-title">Инструменты и сервисы от GP Platform</h2>
      </div>

      <div class="tools__wrapper"></div>
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
.tools {
  position: relative;
  &__head {
    text-align: center;
  }
  // &__wrappper{}
}

@include r($md) {
}
</style>
