<template>
  <div class="crumbs">
    <ul class="crumbs__list">
      <li v-for="(link, idx) in renderList" :key="idx">
        <NuxtLink :to="link.to" :class="[!link.to && 'disabled']">{{ link.label }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Crumbs',
  props: {
    list: {
      type: Array,
    },
  },
  computed: {
    renderList() {
      return [...[{ to: '/', label: 'Главная' }], ...this.list]
    },
  },
}
</script>

<style lang="scss" scoped>
.crumbs {
  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    li {
      position: relative;
      flex: 0 0 auto;
      display: block;
      margin-left: 16px;
      &::before {
        position: absolute;
        top: 2px;
        left: -12px;
        display: block;
        content: '/';
        font-size: 14px;
        line-height: 1.35;
        color: currentColor;
      }
      &:first-child {
        margin-left: 0;
        &::before {
          display: none;
        }
      }
    }
    a {
      display: inline-block;
      font-size: 14px;
      line-height: 1.35;
      transition: color 0.25s $ease;
      color: $colorLight;
      &.disabled {
        color: $fontColor;
      }

      &:hover {
        color: $colorPrimary;
      }
    }
  }
}
</style>
