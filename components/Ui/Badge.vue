<template>
  <component
    :is="getElement"
    :class="['badge', theme, isBlock, noPadding, { 'is-loading': showLoader }]"
    :href="href"
    :to="to"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="badge__content">
      <slot />
      <UiLoader v-if="showLoader" :loading="showLoader" :color="loaderColor" />
    </span>
  </component>
</template>

<script>
const loaderDelay = 300

export default {
  name: 'Badge',
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
      validator: (theme) => ['primary', 'accent', 'gray', 'danger', 'success'].includes(theme),
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

      return 'span'
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
.badge {
  position: relative;
  padding: 0;
  border: 0px solid transparent;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  line-height: 1.35;
  text-align: center;
  overflow: hidden;
  transition: background 0.25s $ease, color 0.25s $ease;
  &:focus,
  &:active {
    outline: none;
  }
  &__content {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    padding: 6px 20px;
    ::v-deep span {
      display: inline-block;
      margin-right: 7px;
    }
  }

  ::v-deep svg {
    width: 15px;
    vertical-align: middle;
    transition: stroke 0.25s $ease;
  }

  &.primary {
    color: #fff;
    background: $colorPrimary;
  }

  &.accent {
    color: #fff;
    background: $colorAccent;
  }

  &.gray {
    color: $fontColor;
    background: #ecf4fd;
  }
  &.success {
    color: white;
    background: $colorGreen;
  }
  &.danger {
    color: white;
    background: $colorRed;
  }
  &.no-padding {
    padding: 0;
    .badge__content {
      padding: 0;
    }
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
  .badge {
    &__content {
      padding: 10px 14px;
    }
  }
}
</style>
