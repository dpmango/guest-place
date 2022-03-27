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
      type: String,
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
  .vc-container {
    max-width: 250px;
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
}
</style>
