<template>
  <portal :key="name" to="modals">
    <div class="modal" :class="[modal === name && 'is-active']" v-bind="$attrs" v-on="$listeners">
      <div class="modal__overlay" @click="hide"></div>

      <div class="modal__box">
        <div class="modal__decor">
          <slot name="decor" />
        </div>

        <div class="modal__close" @click="hide">
          <UiSvgIcon name="close" />
        </div>

        <div class="modal__content" :class="[contentClass]">
          <div class="h2-title tac">
            <slot name="title" />
          </div>

          <slot name="content" />
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Modal',
  props: {
    name: String,
    contentClass: String,
  },
  computed: {
    ...mapState('ui', ['modal', 'modalParams']),
  },
  methods: {
    hide() {
      this.setModal({ name: null, params: null })
    },
    ...mapMutations('ui', ['setModal']),
  },
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  padding: 20px 40px 20px;
  &.is-active {
    pointer-events: all;
    .modal__overlay {
      opacity: 1;
    }
    .modal__box {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
  &__overlay {
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    background: rgba($fontColor, 0.7);
    transition: opacity 0.25s $ease;
  }
  &__box {
    z-index: 100;
    position: fixed;
    background: white;
    padding: 40px;
    width: 100%;
    max-width: 680px;
    min-height: 630px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    max-height: calc(100vh - 40px);
    border-radius: 60px;
    overflow-y: auto;
    opacity: 0;
    transition: opacity 0.25s $ease, transform 0.25s $ease;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__decor {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    font-size: 0;
    img {
      max-width: 100%;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__close {
    position: absolute;
    z-index: 3;
    top: 10px;
    right: 20px;
    padding: 20px;
    font-size: 0;
    color: $colorGray;
    cursor: pointer;
    transition: color 0.25s $ease;
    .svg-icon {
      font-size: 28px;
    }
    &:hover {
      color: $colorRed;
    }
  }
}
</style>
