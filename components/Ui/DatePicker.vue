<template>
  <div class="datepicker" :class="[{ 'has-error': error && !isFocused }, theme, variant]">
    <label v-if="label" :for="_uid" class="input__label">{{ getLabel }}</label>

    <v-date-picker
      :value="value"
      :masks="masks"
      :input-debounce="0"
      :popover="popover"
      v-bind="$attrs"
      @input="setValue"
      v-on="$listeners"
    >
      <template #default="{ inputValue, inputEvents }">
        <UiInput
          v-mask="'##.##.####'"
          :value="inputValue"
          theme="request"
          icon="calendar"
          icon-position="right"
          placeholder="Выберите дату"
          :error="error"
          type="text"
          v-on="inputEvents"
          @onChange="(v) => (inputValue = v)"
        />
      </template>
    </v-date-picker>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',

  props: {
    value: {
      type: [String, Date],
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
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
      masks: {
        input: 'DD.MM.YYYY',
      },
      popover: {
        // visibility: 'visible',
        positionFixed: true,
        placement: 'bottom',
      },
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

    parseVeeError(err) {
      return err.replaceAll('{field}', '')
    },
  },
}
</script>

<style lang="scss" scoped>
.datepicker {
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

  &.has-error {
    .input__label {
      color: $colorRed;
    }
  }

  &.request & {
    &__input {
      height: 38px;
      input {
        height: inherit;
      }
    }
  }
}
</style>

<style lang="scss">
.datepicker {
  .vc-popover-content-wrapper {
    min-width: inherit !important;
    width: inherit !important;
    max-width: inherit !important;
  }
  .vc-container {
    max-width: inherit;
    width: 100%;
    box-shadow: 0px 8px 10px 0px #694e4b24;
    border-radius: 0px 0px 40px 40px;
    border: 0;
  }
  .vc-pane-container,
  .vc-pane-layout {
    padding: 0;
    margin: 0;
    box-shadow: none;
  }

  .vc-container {
    margin-top: 0px !important;
    border-radius: 0 0 40px 40px;
    box-shadow: 0px 8px 10px 0px #694e4b24;
  }

  .vc-weekday {
    padding: 13px 0 9px;
    border-bottom: 1px solid $colorLightUltra;
  }

  .vc-weeks {
    margin: 0 auto !important;
    max-width: 200px;
    min-width: 200px !important;
  }

  .vc-day {
    width: 29px !important;
    height: 26px !important;

    &.is-not-in-month {
      opacity: 1 !important;
      color: $colorLight !important;
    }
    & > .vc-day-content {
      opacity: 1 !important;
    }
    &:nth-child(49),
    &:nth-child(48),
    &:nth-child(47),
    &:nth-child(46),
    &:nth-child(45),
    &:nth-child(44),
    &:nth-child(43) {
      display: none;
    }
  }

  .vc-arrow {
    svg {
      display: none;
    }
    width: 24px;
    height: 30px;
    background: url('~/assets/img/calendarArrow.svg') no-repeat;
    background-position: center;
    &.is-left {
      margin-left: 20px;
      transform: rotate(180deg);
    }
    &.is-right {
      margin-right: 20px;
    }

    &:hover {
      width: 24px;
      height: 30px;
      background-position: center;
      background: url('~/assets/img/calendarArrow.svg') no-repeat;
    }
  }

  .vc-popover-caret {
    display: none !important;
  }

  &:focus,
  &:hover {
    .input__input {
      input {
        transition: $transitionSpeed $ease;
        border-radius: 40px 40px 0px 0px !important;
        border-color: transparent !important;
      }
    }
  }
}
</style>
