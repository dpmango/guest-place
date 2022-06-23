<template>
  <div class="input" :class="[{ 'has-error': error }, theme, variant]">
    <div class="input__input">
      <label :for="_uid" class="input__label" @click="handleClick">
        <input
          :id="_uid"
          :value="value"
          :placeholder="placeholder"
          :type="type"
          v-bind="$attrs"
          v-on="$listeners"
          @input="() => !clickEvent && setValue()"
        />
        <span class="input__box" :class="value && 'checked'">
          <UiSvgIcon name="checkmark" />
        </span>

        <slot />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: 'checkbox',
    },
    clickEvent: {
      type: Boolean,
      default: false,
    },
    error: {
      type: [String, Boolean],
      required: false,
    },
    theme: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      required: false,
    },
  },
  computed: {
    isRadio() {
      return this.type === 'radio'
    },
  },

  methods: {
    handleClick(e) {
      if (this.clickEvent) {
        e.preventDefault()
        this.setValue()
      }
    },
    setValue(e) {
      console.log(e)
      this.$emit('onChange', !this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  &__label {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    font-family: $baseFont;
    color: $fontColor;
    cursor: pointer;
  }

  &__input {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      pointer-events: none;
    }
    a {
      color: $colorPrimary;
      transition: color 0.25s $ease;
      &:hover {
        color: $colorPrimaryHover;
      }
    }
    &:hover {
      .input__box {
        border-color: $colorPrimary;
      }
    }
  }

  &__box {
    position: relative;
    display: block;
    flex: 0 0 auto;
    margin-right: 10px;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 1px solid $colorLightUltra;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    transition: border 0.25s $ease, background 0.25s $ease;
    .svg-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 12px;
      transform: translate(-50%, -50%);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s $ease;
    }
    &.checked {
      background: $colorPrimary;
      border-color: $colorPrimary;
      .svg-icon {
        opacity: 1;
      }
    }
  }

  // input:checked + &__box {
  //   background: $colorPrimary;
  //   border-color: $colorPrimary;
  //   .svg-icon {
  //     opacity: 1;
  //   }
  // }

  &.has-error {
    .input__box {
      border-color: $colorRed;
    }
    .input__label {
      color: $colorRed;
    }
  }

  input[type='radio'] + & {
    &__box {
      border-radius: 50% !important;
      box-shadow: inset 0px 0px 0px 3px white;
      .svg-icon {
        display: none;
      }
    }
  }

  // input[type='radio']:checked + &__box {
  //   box-shadow: inset 0px 0px 0px 3px white;
  //   // background: $colorPrimary;
  //   // border-color: $colorPrimary;
  // }
}
</style>
