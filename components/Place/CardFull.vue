<template>
  <div class="card" :data-id="data.id">
    <div class="card__gallery">
      <!-- swiper 6 with hoc wrapper -->
      <swiper ref="gallery" :options="gallerySwiperOptions">
        <swiper-slide v-for="(slide, idx) in data.gallery" :key="slide.id || idx">
          <div class="card__image">
            <img :src="slide.preview" alt="gallery preview" />
          </div>
        </swiper-slide>
        <div slot="pagination" :class="`swiper-pagination js-pagination-${data.id}`"></div>
      </swiper>
      <div :class="`swiper-next swiper-next-${data.id}`">
        <img src="~/assets/img/swiper-arrow.svg" />
      </div>
      <div :class="`swiper-prev swiper-prev-${data.id}`">
        <img src="~/assets/img/swiper-arrow.svg" />
      </div>
    </div>

    <div class="card__content">
      <NuxtLink :to="`/place/${data.id}`" class="card__title h3-title">{{ data.title }}</NuxtLink>
      <div class="card__rating">
        <UiStars :rating="data.rating" />
        <span>({{ data.reviewCount }})</span>
      </div>

      <div class="card__wysiwyg mt-1" v-html="data.content" />

      <div class="card__prices">
        <div v-for="(price, idx) in data.prices" :key="idx">
          <div class="h5-title c-light">{{ price.label }}</div>
          <div class="h4-title f-500"><span v-if="price.fromSlug">от </span>{{ price.value }}</div>
        </div>
      </div>
    </div>

    <div class="card__cta">
      <UiButton size="small" block>Оставить заявку</UiButton>
      <UiButton theme="outline" size="small" block>Начать чат</UiButton>
      <UiBadge theme="gray" size="small" block>Онлайн-показ</UiBadge>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      gallerySwiperOptions: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: `.js-pagination-${this.data.id}`,
          clickable: true,
        },
        navigation: {
          nextEl: `.swiper-next-${this.data.id}`,
          prevEl: `.swiper-prev-${this.data.id}`,
        },
      },
    }
  },
  computed: {
    swiperGallery() {
      return this.$refs.gallery.$swiper
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 160px;
  grid-gap: 30px;
  &__gallery {
    position: relative;
    max-height: 100%;
    overflow: hidden;
    .swiper-pagination {
      z-index: 3;
      bottom: 12px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
    }
    .swiper-next,
    .swiper-prev {
      position: absolute;
      z-index: 2;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      font-size: 0;
      transition: filter 0.25s $ease;
      will-change: filter;
      cursor: pointer;
      img {
        width: 32px;
      }
      &.swiper-button-disabled {
        filter: grayscale(1);
      }
      &:hover {
        filter: contrast(150%);
      }
    }
    .swiper-next {
      right: 20px;
    }
    .swiper-prev {
      left: 20px;
      img {
        transform: rotate(-180deg);
      }
    }
    ::v-deep .swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      margin-right: 2px;
      background: #ffffff;
      opacity: 0.9;
      transform: scale(0.75);
      will-change: transform;
      transition: transform 0.25s $ease, opacity 0.25s $ease;
      border: 2px solid $colorLightUltra;
      &:last-child {
        margin-right: 0;
      }
    }
    ::v-deep .swiper-pagination-bullet-active {
      opacity: 1;
      transform: none;
      border-color: $colorPrimary;
    }
  }
  &__image {
    position: relative;
    z-index: 1;
    overflow: hidden;
    font-size: 0;
    border-radius: 30px;
    img {
      width: 100%;
    }
  }
  &__content {
    padding: 0px 0px 14px;
    display: flex;
    flex-direction: column;
  }
  &__rating {
    display: flex;
    align-items: center;
    margin-top: 12px;
    span {
      display: inline-block;
    }
    .stars {
      margin-right: 8px;
    }
  }

  &__title {
    transition: color 0.25s $ease;
    &:hover {
      color: $colorPrimary;
    }
  }

  &__prices {
    margin-top: auto;
    display: flex;
    grid-gap: 30px;
  }

  &__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    .button {
      margin-bottom: 15px;
    }
  }
}
</style>
