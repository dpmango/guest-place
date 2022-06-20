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
      <div v-if="data.rating" class="card__rating">
        <UiStars :rating="data.rating" />
        <span v-if="data.reviewCount">({{ data.reviewCount }})</span>
      </div>

      <div class="card__wysiwyg mt-1" v-html="content" />

      <div class="card__prices">
        <div v-for="(price, idx) in data.prices" :key="idx" class="card__price">
          <div class="h5-title c-light">{{ price.label }}</div>
          <div class="h4-title f-500"><span v-if="price.fromSlug">от </span>{{ price.value }}</div>
        </div>
      </div>
    </div>

    <div class="card__cta">
      <UiButton
        size="small"
        block
        class="card__button--require"
        @click="() => setModal({ name: 'cardrequest', params: { id: data.id } })"
        >Оставить заявку</UiButton
      >
      <UiButton theme="outline" size="small" block class="card__button--chat" @click="() => setModal({ name: 'quest' })"
        >Начать чат</UiButton
      >
      <UiBadge theme="gray" size="small" block class="card__button--badge">Онлайн-показ</UiBadge>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

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
    content() {
      const metro = this.data.address.metroStationName
        ? `<p class="p-body"><span class="c-light">Станция метро:</span> ${this.data.address.metroStationName}</p>`
        : ''

      const capacity = this.data.address.metroStationName
        ? '<p class="p-body"><span class="c-light">Вместимость (чел.):</span>35/100/150</p>'
        : ''

      const services =
        this.data.services && this.data.services.length
          ? `<p class="p-body"><span class="c-light">Услуги:</span> ${this.data.services.join(', ')}</p>`
          : ''

      const specialities = this.data.additionalInformation
        ? `<p class="p-body"><span class="c-light">Особенности:</span> ${this.data.additionalInformation}</p>`
        : ''

      return `
        ${metro}
        ${capacity}
        ${services}
        ${specialities}
      `
    },
    swiperGallery() {
      return this.$refs.gallery.$swiper
    },
  },
  methods: {
    ...mapMutations('ui', ['setModal']),
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
    display: flex;
    align-items: center;
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

@include r($lg) {
  .card {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'swiper content' 'buttons buttons';
    &__cta {
      grid-area: buttons;
      flex-direction: row-reverse;
      align-items: center;
      gap: 30px;
      .button {
        margin-bottom: 0;
      }
    }
  }
}

@include r($md) {
  .card {
    grid-template-columns: 1fr;
    grid-template-areas: 'swiper' 'content' 'buttons';
  }
}

@include r(600) {
  .card {
    &__price {
      display: flex;
      .h5-title {
        width: 130px;
        margin-right: 30px;
      }
    }
    &__prices {
      margin-top: 16px;
      flex-direction: column;
      gap: 5px;
    }
    &__cta {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px 20px;
      grid-template-areas: 'badge null' 'require chat';
    }
    &__button {
      &--require {
        grid-area: require;
      }
      &--chat {
        grid-area: chat;
      }
      &--badge {
        grid-area: badge;
      }
    }
  }
}
</style>
