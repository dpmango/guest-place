<template>
  <div class="menu" :class="[menu === name && 'is-active', contentClass]" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Menu',
  props: {
    name: String,
    contentClass: String,
  },
  computed: {
    ...mapState('ui', ['menu', 'menuParams']),
  },
  methods: {
    // hide() {
    //   this.setmenu({ name: null, params: null })
    // },
    ...mapMutations('ui', ['setMenu']),
  },
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  right: -100%;
  width: 100%;
  transition: $transitionSpeed ease;
  &.is-active {
    right: 0;
  }
  &.fixed {
    top: 0;
    position: fixed;
    z-index: 100;
  }
}
</style>
