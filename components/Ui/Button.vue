<template>
  <component
    :is="getElement"
    :class="['button', theme, size, isBlock, noPadding, { 'is-loading': showLoader }]"
    :href="href"
    :to="to"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="button__content">
      <slot />
      <UiLoader v-if="showLoader" :loading="showLoader" :color="loaderColor" />
    </span>
  </component>
</template>

<script>
const loaderDelay = 300

export default {
  name: 'Button',
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      default: 'primary',
      validator: (theme) => ['primary', 'outline', 'outline-gradient', 'danger', 'success', 'system'].includes(theme),
    },
    size: {
      type: String,
      default: 'regular',
      validator: (theme) => ['regular', 'small', 'extra-small'].includes(theme),
    },
    loading: {
      type: Boolean,
      required: false,
    },
    loaderColor: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      showLoader: false,
      timer: null,
    }
  },
  computed: {
    isBlock() {
      if (this.$attrs.block !== undefined) {
        return 'block'
      }
      return ''
    },
    noPadding() {
      if (this.$attrs['no-padding'] !== undefined) {
        return 'no-padding'
      }
      return ''
    },
    getElement() {
      if (this.href) {
        return 'a'
      } else if (this.to) {
        return 'NuxtLink'
      }

      return 'button'
    },
  },
  watch: {
    loading(newV, _oldV) {
      if (newV) {
        this.timer = setTimeout(() => {
          this.showLoader = true
        }, loaderDelay)
      } else {
        clearTimeout(this.timer)
        this.showLoader = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  padding: 0;
  border: 0px solid transparent;
  box-sizing: border-box;
  border-radius: 50px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.25s $ease, color 0.25s $ease;
  &:focus,
  &:active {
    outline: none;
  }

  &::before,
  &::after {
    display: inline-block;
    content: ' ';
    position: absolute;
    z-index: 1;
    pointer-events: none;

    // will-change: opacity;
    // backface-visibility: hidden;
    transition: opacity 0.25s $ease;
  }

  &::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('~/assets/img/btn-gradient.png') no-repeat center center;
    background-size: cover;

    // css is too heavy for performance
    // transform: translate3d(-50%, -50%, 0);
    // transform-style: preserve-3d;
    // // background: conic-gradient(from 180deg at 50% 50%, #8e2dbc 0deg, #ffc5bd 120deg, #db7ae3 240deg, #0066cc 360deg);
    // filter: blur(36px);
  }

  &::after {
    opacity: 0;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 50px;
  }

  &__content {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    padding: 22px;

    ::v-deep span {
      display: inline-block;
      margin-right: 7px;
    }
  }

  ::v-deep .svg-icon {
    font-size: 1.1em;
    vertical-align: middle;
    margin-right: 8px;
  }

  &.primary {
    color: #fff;
    &:hover {
      background: $colorAccent;
      &::before {
        opacity: 0;
      }
    }
    &:active {
      background: $colorAccent;
    }
  }
  &.outline {
    color: $fontColor;
    &::after {
      opacity: 1;
    }

    &:hover,
    &:active {
      background: $colorAccent;
      color: white;
      &::after {
        opacity: 0;
      }
      &::before {
        opacity: 0;
      }
    }
  }
  &.outline-gradient {
    color: $fontColor;
    &::after {
      opacity: 1;
    }

    &:hover,
    &:active {
      color: white;
      &::after {
        opacity: 0;
      }
      &::before {
        opacity: 1;
      }
    }
  }
  &.danger {
    color: white;
    background: $colorRed;
    border-color: transparent;
    &:hover {
      background: rgba($colorRed, 0.8);
    }
    &:active {
      background: rgba($colorRed, 0.9);
    }
  }
  &.no-padding {
    padding: 0;
  }

  &.success {
    color: white;
    background: $colorGreen;
    border-color: transparent;
    &:hover {
      background: rgba($colorGreen, 0.8);
    }
    &:active {
      background: rgba($colorGreen, 0.9);
    }
  }

  &.system {
    color: white;
    background: $colorPrimary;
    border-color: transparent;
    border-radius: 4px;
    &::before,
    &::after {
      display: none;
    }
    &:hover {
      background: rgba($colorPrimary, 0.8);
    }
    &:active {
      background: rgba($colorPrimary, 0.9);
    }
  }

  &.small {
    .button__content {
      font-size: 14px;
      padding: 10px 14px;
    }
  }

  &.extra-small {
    .button__content {
      font-size: 14px;
      padding: 5px 12px;
    }
  }

  &.block {
    display: block;
    width: 100%;
  }

  &[disabled] {
    background: rgba($fontColor, 0.3);
    color: rgba($fontColor, 0.7);
    pointer-events: none;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.is-loading {
    color: transparent !important;
  }
}

@include r($md) {
  .button {
    &__content {
      padding: 16px 30px;
    }
  }
}
</style>
