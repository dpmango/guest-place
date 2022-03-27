<template>
  <div class="rangeslider" :class="[{ 'has-error': error && !isFocused }, theme, variant]">
    <label v-if="label" :for="_uid" class="input__label">{{ getLabel }}</label>

    <div class="rangeslider__wrapper">
      <vue-slider
        :value="value"
        :min="min"
        :max="max"
        :interval="interval"
        :lazy="true"
        :dot-size="20"
        :height="2"
        :contained="true"
        v-bind="$attrs"
        @change="(v) => setValue(v)"
        v-on="$listeners"
      />
      <div class="rangeslider__controls">
        <div class="rangeslider__input">
          <label>от</label>
          <UiInput
            :min="min"
            :max="max"
            type="number"
            icon="rouble"
            icon-position="left"
            :value="value[0].toString()"
            @onChange="handleFromChange"
          />
        </div>

        <div class="rangeslider__input">
          <label>до</label>
          <UiInput
            :min="min"
            :max="max"
            type="number"
            icon="rouble"
            icon-position="left"
            :value="value[1].toString()"
            @onChange="handleToChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeSlider',

  props: {
    value: {
      type: [Number, Array],
      required: false,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 99 * 1000,
    },
    interval: {
      type: Number,
      default: 10,
    },
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: 'text',
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
  data() {
    return {
      format: '',
    }
  },
  computed: {
    getLabel() {
      return typeof this.error === 'string' && !this.isFocused ? this.parseVeeError(this.error) : this.label
    },
  },

  methods: {
    setValue(v) {
      // Date, Array[Date], Object
      this.$emit('onChange', v)
    },
    handleFromChange(v) {
      this.$emit('onChange', [Number(v), this.value[1]])
    },
    handleToChange(v) {
      this.$emit('onChange', [this.value[0], Number(v)])
    },

    parseVeeError(err) {
      return err.replaceAll('{field}', '')
    },
  },
}
</script>

<style lang="scss" scoped>
.rangeslider {
  position: relative;
  &__label {
    display: block;
    font-size: 12px;
    line-height: 16px;
    font-family: $baseFont;
    color: $colorGray;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__wrapper {
    position: relative;
  }
  &__controls {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
    align-items: center;
    justify-content: space-between;
  }
  &__input {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    > label {
      font-size: 14px;
      display: inline-block;
      margin-right: 6px;
    }
    .input {
      max-width: 88px;
      ::v-deep {
        input {
          padding: 6px 12px 6px 24px !important;
        }
        .input__icon {
          left: 10px;
        }
        .svg-icon {
          font-size: 12px;
        }
      }
    }
  }
  &.has-error {
    .input__label {
      color: $colorRed;
    }
  }
}
</style>

<style lang="scss">
// .rangeslider {
// }
</style>
