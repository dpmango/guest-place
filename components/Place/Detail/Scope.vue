<template>
  <section class="scope" :class="className">
    <div class="container">
      <div class="row">
        <div class="scope__gallery col col-6">
          <client-only>
            <template slot="placeholder">
              <UiLoader :loading="true" theme="block" />
            </template>

            <div class="gallery">
              <div class="gallery__main">
                <swiper ref="gallery" :options="gallerySwiperOptions">
                  <swiper-slide v-for="(slide, idx) in gallery" :key="slide.id || idx">
                    <div class="gallery__slide">
                      <img :src="slide.preview" alt="gallery preview" />
                    </div>
                  </swiper-slide>
                </swiper>

                <div class="swiper-gallery-next">
                  <img src="~/assets/img/swiper-arrow.svg" />
                </div>
                <div class="swiper-gallery-prev">
                  <img src="~/assets/img/swiper-arrow.svg" />
                </div>
              </div>

              <div class="mt-1">
                <swiper ref="thumbs" :options="thumbsSwiperOptions">
                  <swiper-slide v-for="(slide, idx) in gallery" :key="slide.id || idx">
                    <div class="thumb">
                      <img :src="slide.thumb" alt="gallery preview" />
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </client-only>
        </div>

        <div class="scope__content col col-6">
          <div class="row">
            <div class="col col-6">
              <p class="h5-title">
                <span class="c-light">Адрес:</span>
                г. Москва Волоколамское шоссе, д.13
              </p>
              <p class="h5-title">
                <span class="c-light">Метро:</span>
                Сокольники
              </p>
              <p class="h5-title">
                <span class="c-light">Время работы:</span>
                Пн - Чт: с 12:00 до 22:00, Пт - Вс: с 10:00 до 24:00
              </p>
              <p class="h5-title">
                <span class="c-light">Средний чек: </span>
                2500 р.
              </p>
              <p class="h5-title">
                <span class="c-light">Банкетное меню от: </span>
                4000 р.
              </p>
              <p class="h5-title">
                <span class="c-light">Телефон: </span>
                +7 (495) 125 25 25
              </p>

              <UiButton>Оставить заявку</UiButton>
            </div>
            <div class="col col-6">
              <p class="h5-title">
                <span class="c-light">Количество залов: :</span>
                3
              </p>
              <p class="h5-title">
                <span class="c-light">Метро:</span>
                банкет 20/40/60, фуршет 40/80/120, конференция 60/100/140
              </p>
              <p class="h5-title">
                <span class="c-light">Количество мест: </span>
                Пн - Чт: с 12:00 до 22:00, Пт - Вс: с 10:00 до 24:00
              </p>
              <p class="h5-title">
                <span class="c-light">Площадь кв.м.: </span>
                50/100/120
              </p>
              <p class="h5-title">
                <span class="c-light">Пробковый сбор: </span>
                да
              </p>
              <p class="h5-title">
                <span class="c-light">Аренда от: </span>
                +3000 р./час
              </p>

              <UiButton theme="outline">начать чат</UiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    className: String,
  },
  data() {
    return {
      gallerySwiperOptions: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-gallery-next',
          prevEl: '.swiper-gallery-prev',
        },
      },
      thumbsSwiperOptions: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      gallery: [
        {
          id: 1,
          preview: require('~/assets/img/place-gallery-1-preview.jpg'),
          thumb: require('~/assets/img/place-gallery-1-thumb.jpg'),
          media: {
            type: 'video',
            url: require('~/assets/img/place-gallery-1-preview.jpg'),
          },
        },
        {
          id: 2,
          preview: require('~/assets/img/place-gallery-1-preview.jpg'),
          thumb: require('~/assets/img/place-gallery-1-thumb.jpg'),
          media: {
            type: 'image',
            url: require('~/assets/img/place-gallery-1-preview.jpg'),
          },
        },
        {
          id: 3,
          preview: require('~/assets/img/place-gallery-1-preview.jpg'),
          thumb: require('~/assets/img/place-gallery-1-thumb.jpg'),
          media: {
            type: 'image',
            url: require('~/assets/img/place-gallery-1-preview.jpg'),
          },
        },
      ],
    }
  },
  computed: {
    swiperGallery() {
      return this.$refs.gallery.$swiper
    },
    swiperThumbs() {
      return this.$refs.thumbs.$swiper
    },
  },
  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.scope {
  position: relative;
  margin-top: 80px;
  margin-bottom: 120px;
}

.thumb {
  img {
    width: 100%;
  }
}

.gallery {
  width: 100%;
  &__main {
    position: relative;
    .swiper-gallery-next,
    .swiper-gallery-prev {
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
    .swiper-gallery-next {
      right: 20px;
    }
    .swiper-gallery-prev {
      left: 20px;
      img {
        transform: rotate(-180deg);
      }
    }
  }
  &__slide {
    img {
      width: 100%;
    }
  }
}

@include r($md) {
}
</style>
