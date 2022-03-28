<template>
  <div
    class="panel"
    :class="[panel === name && 'is-active', contentClass]"
    v-bind="$attrs"
    @click="close"
    v-on="$listeners"
  >
    <div v-scroll-lock="panel === name" class="panel__wrapper" @click.stop>
      <slot />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Panel',
  props: {
    name: String,
    contentClass: String,
  },
  computed: {
    ...mapState('ui', ['panel']),
  },
  methods: {
    close() {
      this.resetPanels()
    },
    ...mapMutations('ui', ['setPanel', 'resetPanels']),
  },
}
</script>

<style lang="scss" scoped>
.panel {
  position: fixed;
  top: 147px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
  display: flex;
  justify-content: flex-end;
  &__wrapper {
    display: block;
    background-color: white;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 340px;
    will-change: transform;
    transition: transform $transitionSpeed ease;
    backface-visibility: hidden;
    overflow-y: auto;
    border-radius: 0 0 0 25px;
    box-shadow: 0px 15px 15px rgba(105, 78, 75, 0.14);
    transform: translate3d(100%, 0, 0);
  }

  &__filter {
    top: 0;
  }
  &__filter & {
    &__wrapper {
      max-width: 500px;
    }
  }
  &.is-active {
    pointer-events: all;
    .panel__wrapper {
      transform: translate3d(0, 0, 0);
    }
  }
}

@include r($md) {
  .panel {
    top: 106px;
    &__filter {
      top: 0;
    }
  }
}

@include r($sm) {
  .panel {
    &__wrapper {
      border-radius: 0;
      width: 100%;
    }
    &__filter & {
      &__wraper {
        max-width: 100%;
      }
    }
  }
}
</style>
