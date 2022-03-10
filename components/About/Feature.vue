<template>
  <div class="featureBox" :class="className">
    <div class="featureBox__title h3-title">
      <slot name="head"></slot>
    </div>

    <slot name="content"></slot>
    <div class="featureBox__cta">
      <slot name="cta"></slot>
    </div>
  </div>
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
.featureBox {
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(105, 78, 75, 0.14);
  border-radius: 40px;
  padding: 40px 45px;
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    ::v-deep .svg-icon {
      font-size: 26px;
      margin-right: 10px;
    }
  }
  &__cta {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }
}

@include r($md) {
}
</style>
