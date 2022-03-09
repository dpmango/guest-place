<template>
  <div class="marker">
    <div class="marker__title">{{ marker.title }}</div>
    <div class="marker__phone">
      <span><SvgIcon name="close" /></span>
      {{ marker.meta.phone }}
    </div>
    <div class="marker__time">{{ marker.meta.hours }}</div>
    <UiButton id="marker" class="marker__cta">Выбрать</UiButton>
  </div>
</template>

<script>
export default {
  props: {
    marker: Object,
  },
  methods: {},
}
</script>

<style lang="scss">
.marker {
  padding: 10px 8px;
  background: white;
  &__title {
    font-size: 18px !important;
    display: block;
  }
  &__phone {
    margin-top: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.457143px;
    .svg-icon {
      font-size: 20px;
      color: $colorGreen;
    }
  }
  &__time {
    margin-top: 20px;
    font-size: 14px;
    &::before {
      display: inline-block;
      content: ' ';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 6px;
      background: $colorGreen;
    }
  }
  &__cta {
    margin-top: 24px;
  }
}
</style>
