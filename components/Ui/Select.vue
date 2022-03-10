<template>
  <div class="select" :class="[{ 'has-error': error }, theme]">
    <label v-if="label" class="select__label" :for="_uid"> {{ getLabel }}</label>

    <v-select
      :id="_uid"
      :options="options"
      :value="value"
      :placeholder="placeholder"
      :searchable="searchable"
      v-bind="$attrs"
      @input="setSelected"
      v-on="$listeners"
    >
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes"> <UiSvgIcon name="caret" /></span>
      </template>
      <template #no-options="{ search, searching, loading }">
        <span> Не найдено</span>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: [String, Array, Object],
      required: false,
    },
    options: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      required: false,
    },
    error: {
      type: [String, Array],
      required: false,
    },
  },
  computed: {
    placeholderText() {
      return this.placeholder || 'Выберите'
    },
    getLabel() {
      return typeof this.error === 'string' ? this.error : this.label
    },
  },
  methods: {
    setSelected(val) {
      this.$emit('onSelect', val)
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  &__label {
    display: block;
    font-size: 18px;
    line-height: 1.17;
    color: $fontColor;
    margin-bottom: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.has-error {
    .select__label {
      color: $colorRed;
    }
  }
}
</style>

<style lang="scss">
.select {
  .vs__dropdown-toggle {
    background: transparent;
    border: 2px solid $borderColor;
    padding: 0;
    border-radius: 50px;
    transition: border 0.25s $ease, background 0.25s $ease;
    &:hover {
      background-color: transparent;
    }
  }
  .vs__selected-options {
    padding: 0;
    min-width: 1px;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: hidden;
  }
  .vs__search,
  .vs__search:focus {
    margin: 0;
    padding: 12px 20px;
    font-family: $baseFont;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.35;
    border: 0;
    color: $colorGray;
  }
  .vs__selected {
    position: relative;
    color: $fontColor;
    background: transparent;
    margin: 0;
    padding: 12px 20px;
    border: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.35;
    + .vs__selected {
      padding-left: 0;
      margin-left: -6px;
      &::before {
        display: inline-block;
        content: ',';
        position: absolute;
        left: -13px;
        top: 13px;
      }
    }
    + .vs__search {
      margin-left: -6px;
      padding-left: 0;
    }
  }
  .vs__actions {
    padding: 0 14px 0 0px;
  }
  .vs__open-indicator {
    flex: 0 0 auto;
    fill: $colorGray !important;
    font-size: 0;
    .svg-icon {
      font-size: 5px;
    }
  }
  .vs__dropdown-menu {
    top: calc(100% - 1px);
    padding: 0;
    border: 0;
    background: white;
    border: 0px solid transparent;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 4px 15px rgba(105, 78, 75, 0.14);
  }
  .vs__dropdown-option {
    position: relative;
    padding: 14px 20px;
    color: $fontColor;
    font-family: $baseFont;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.35;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: background 0.1s $ease, color 0.25s $ease;
  }
  .vs__dropdown-option--highlight {
    background: #ecf4fd;
    color: $fontColor;
  }
  .vs__dropdown-option--selected {
    padding-right: 16px;
  }
  .vs__no-options {
    padding: 14px 20px;
    font-size: 14px;
    text-align: center;
  }
  .vs__clear {
    margin-right: 12px;
    font-size: 0;
    .svg-icon {
      font-size: 10px;
    }
    &:hover {
      color: $colorPrimary;
    }
  }
  &.has-error {
    .vs__dropdown-toggle {
      border-color: $colorRed;
    }
  }
  .vs--open {
    .vs__open-indicator {
      transform: none;
    }
    .vs__dropdown-toggle {
      border-color: $fontColor;
    }
  }
  &.ghost {
    .vs__dropdown-toggle {
      border-color: transparent;
    }
    .vs__search,
    .vs__search:focus {
      padding: 6px 0;
    }
    .vs__selected {
      padding: 6px 0;
    }
    .vs__actions {
      display: none;
    }
    &.vs--open {
      .vs__dropdown-toggle {
        border-color: $fontColor;
      }
    }
  }
  &.clear {
    .vs__dropdown-toggle {
      border: 0;
    }
    .vs__selected,
    .vs__search {
      padding: 26px 10px;
    }
  }
}
</style>