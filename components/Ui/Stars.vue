<template>
  <div class="stars" :class="[`size-${size}`]">
    <UiSvgIcon name="star" :class="[rating >= 1 && 'is-active']" />
    <UiSvgIcon name="star" :class="[rating >= 2 && 'is-active']" />
    <UiSvgIcon name="star" :class="[rating >= 3 && 'is-active']" />
    <UiSvgIcon name="star" :class="[rating >= 4 && 'is-active']" />
    <UiSvgIcon name="star" :class="[rating >= 5 && 'is-active']" />
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    rating: {
      type: Number,
    },
    size: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.stars {
  display: flex;
  align-items: center;
  margin: -2px;
  .svg-icon {
    font-size: 10px;
    margin: 2px;
    color: $colorLight;
    &.is-active {
      color: $colorPrimary;
    }
  }
  &.size-big {
    .svg-icon {
      font-size: 14px;
    }
  }
}
</style>
