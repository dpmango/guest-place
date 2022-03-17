<template>
  <div class="pagination">
    <button class="pagination__prev" @click="handlePrev">
      <img src="~/assets/img/swiper-arrow.svg" />
    </button>

    <div class="pagination__list">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="pagination__item"
        :class="[item === meta.page && 'is-active']"
      >
        <span v-if="typeof item === 'number'" @click="$emit('onChange', item)">{{ item }}</span>
        <span v-else>...</span>
      </div>
    </div>

    <button class="pagination__next" @click="handleNext">
      <img src="~/assets/img/swiper-arrow.svg" />
    </button>
  </div>
</template>

<script>
// import { mapMutations, mapActions } from "vuex"
import { paginationBuilder } from '~/helpers/Pagination'

export default {
  props: {
    meta: Object,
  },
  computed: {
    countWithLimit() {
      const { count, limit } = this.meta

      return Math.floor(count / limit)
    },
    items() {
      const { page, count, limit } = this.meta

      return paginationBuilder(page, this.countWithLimit)
    },
    prevAvailable() {
      return this.meta.page > 1
    },
    nextAvailable() {
      return this.meta.page < this.countWithLimit
    },
  },
  methods: {
    handlePrev() {
      if (this.prevAvailable) {
        this.$emit('onChange', this.meta.page - 1)
      }
    },
    handleNext() {
      if (this.nextAvailable) {
        this.$emit('onChange', this.meta.page + 1)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  &__list {
    display: flex;
    margin-right: 24px;
  }
  &__item {
    flex: 0 0 auto;
    font-family: $systemFont;
    cursor: pointer;
    // font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    transition: color 0.25s $ease;
    span {
      display: inline-block;
      padding: 5px 4px;
    }
    &.is-active {
      color: $colorPrimary;
    }
    &:hover {
      color: $colorPrimary;
    }
  }
  &__separator {
    font-size: 14px;
    color: $colorLight;
    padding: 5px;
  }
  &__prev,
  &__next {
    flex: 0 0 auto;
    position: relative;
    z-index: 1;
    font-size: 0;
    transition: filter 0.25s $ease;
    will-change: filter;
    filter: grayscale(1);
    img {
      width: 32px;
    }
    &:hover {
      filter: contrast(150%);
    }
  }
  &__prev {
    img {
      transform: rotate(180deg);
    }
  }
}
</style>
