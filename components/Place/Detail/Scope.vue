<template>
  <section class="scope" :class="className">
    <div class="container">
      <div class="row">
        <div class="scope__gallery col col-6 col-md-12">
          <client-only>
            <template slot="placeholder">
              <UiLoader :loading="true" theme="block" />
            </template>

            <div class="gallery">
              <div class="gallery__main">
                <swiper ref="gallery" :options="gallerySwiperOptions" @slide-change="handleGalleryChange">
                  <swiper-slide v-for="(slide, idx) in gallery" :key="slide.id || idx">
                    <div class="gallery__slide" :class="'gallery__slide--' + slide.media.type">
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
                    <div
                      class="thumb"
                      :class="[activeSlide === (slide.id || idx) && 'active']"
                      @click="() => handleThumbClick(slide.id)"
                    >
                      <img :src="slide.thumb" alt="gallery preview" />
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </client-only>
        </div>

        <div class="scope__content col col-6 col-md-12">
          <div class="scope__row row">
            <div class="col col-6 col-sm-12">
              <p v-if="place.address" class="h5-title">
                <span class="c-light">Адрес:</span>
                {{ place.address.cityType }} {{ place.address.cityName }} {{ place.address.street }}, д.{{
                  place.address.houseNumber
                }}
              </p>
              <p v-if="place.address && place.address.metroStationName" class="h5-title">
                <span class="c-light">Метро:</span>
                {{ place.address.metroStationName }}
              </p>
              <p v-if="place.workingHours" class="h5-title">
                <span class="c-light">Время работы:</span>
                {{ place.workingHours }}
              </p>
              <p v-if="place.averageCheckPerGuest" class="h5-title">
                <span class="c-light">Средний чек: </span>
                {{ place.averageCheckPerGuest }}
              </p>
              <p v-if="place.banquetMenuPerGuest" class="h5-title">
                <span class="c-light">Банкетное меню от: </span>
                {{ place.banquetMenuPerGuest }}
              </p>
              <p v-if="place.phoneNumbers" class="h5-title">
                <span class="c-light">Телефон: </span>
                {{ place.phoneNumbers }}
              </p>
            </div>
            <div class="col col-6 col-sm-12">
              <p v-if="place.halls && place.halls.length" class="h5-title">
                <span class="c-light">Количество залов: :</span>
                {{ place.halls.length }}
              </p>
              <p v-if="totalCapacities" class="h5-title">
                <span class="c-light">Количество мест: </span>
                {{ totalCapacities }}
              </p>
              <p v-if="placesArea" class="h5-title">
                <span class="c-light">Площадь кв.м.: </span>
                {{ placesArea }}
              </p>
              <p v-if="place.corkageFee" class="h5-title">
                <span class="c-light">Пробковый сбор: </span>
                {{ place.corkageFee }}
              </p>
              <p v-if="place.rentPerHour" class="h5-title">
                <span class="c-light">Аренда от: </span>
                {{ place.rentPerHour }} р./час
              </p>
            </div>
          </div>
          <div class="scope__row scope__row--button row mt-1">
            <div class="col col-6 col-sm-12">
              <UiButton class="button" @click="() => setModal({ name: 'cardrequest', params: { id: placeId } })"
                >Оставить заявку</UiButton
              >
            </div>
            <div class="col col-6 col-sm-12">
              <UiButton
                class="button"
                theme="outline"
                @click="() => setModal({ name: 'manager', params: { id: placeId } })"
                >начать чат</UiButton
              >
            </div>
          </div>
          <div class="scope__info-row row mt-1">
            <div v-if="place.onlineDisplay === 'Y'" class="col col6">
              <div class="scope__info" @click="() => setModal({ name: 'online', params: { id: placeId } })">
                <h5 class="scope__info-title h5-title">
                  <UiSvgIcon name="monitor-play" class="scope__icon" />
                  Онлайн-показ
                </h5>
                <p class="scope__text">
                  Вы можете посмотреть площадку не выходя из дома! Менеджер площадки проведет онлайн-показ при помощи
                  видеозвонка.
                </p>
              </div>
            </div>
            <div class="col col6">
              <div class="scope__info" @click="() => setModal({ name: 'help' })">
                <h5 class="scope__info-title h5-title">
                  <UiSvgIcon name="question" class="scope__icon" />
                  Помощь эксперта
                </h5>
                <p class="scope__text">
                  Не хотите тратить время на самостоятельный поиск? Эксперт платформы бесплатно поможет подобрать место.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  props: {
    className: String,
    place: Object,
  },
  data() {
    return {
      activeSlide: 0,
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
    }
  },
  computed: {
    placeId() {
      return this.$route.params.id
    },
    swiperGallery() {
      return this.$refs.gallery.$swiper
    },

    swiperThumbs() {
      return this.$refs.thumbs.$swiper
    },
    gallery() {
      return this.place.media.map((x, idx) => ({
        id: idx,
        preview: x.url,
        thumb: x.url,
        media: {
          type: x.fileType.toLowerCase(),
          url: x.url,
        },
      }))
    },
    totalCapacities() {
      let totalCapacities = null
      if (this.place.halls && this.place.halls.length) {
        totalCapacities = this.place.halls.reduce(
          (acc, x) => {
            acc[0] = acc[0] + x.banquetNumberOfSeats
            acc[1] = acc[1] + x.buffetNumberOfSeats
            acc[2] = acc[2] + x.seatingTheaterNumberOfSeats

            return acc
          },
          [0, 0, 0]
        )

        if (totalCapacities.some((x) => x > 0)) {
          totalCapacities = totalCapacities.join('/')
        } else {
          totalCapacities = null
        }
      }

      return totalCapacities
    },
    placesArea() {
      let areas = null
      if (this.place.halls && this.place.halls.length) {
        areas = this.place.halls.reduce((acc, x) => {
          acc.push(x.area || 0)
          return acc
        }, [])

        if (areas.some((x) => x > 0)) {
          areas = areas.join('/')
        } else {
          areas = null
        }
      }

      return areas
    },
  },
  methods: {
    handleGalleryChange(e) {
      this.swiperThumbs.slideTo(e.realIndex)
      this.activeSlide = e.realIndex
    },
    handleThumbClick(index) {
      this.swiperGallery.slideTo(index)
    },
    ...mapMutations('ui', ['setModal']),
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.scope {
  position: relative;
  margin-top: 80px;
  margin-bottom: 120px;
  &__row {
    min-height: unset;
    margin: 0;
    flex-wrap: nowrap;
    gap: 20px;
    padding-bottom: 16px;

    .col {
      width: 100%;
      padding: 0;
    }
    &--button {
      min-height: unset;
    }
  }
  &__info-title {
    gap: 5px;
    display: flex;
    align-items: center;
  }
  &__icon {
    width: 26px !important;
    height: 26px;
  }
  &__info-row {
    flex-wrap: nowrap;
    gap: 50px;
    .col {
      max-width: 237px;
      width: 100%;
    }
  }
  &__text {
    margin-top: 5px;
    font-size: 12px;
    color: $colorLight;
  }
  &__info {
    cursor: pointer;
  }
}

.button {
  margin-top: auto;
}

.thumb {
  position: relative;
  font-size: 0;

  &::after {
    display: inline-block;
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid $colorPrimary;
    opacity: 0;
    transition: opacity 0.25s $ease;
    pointer-events: none;
  }
  img {
    width: 100%;
  }
  &.active {
    &::after {
      opacity: 1;
    }
  }
}

.gallery {
  width: 100%;
  .swiper-slide {
    height: auto !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
    &--video {
      position: relative;
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        width: 67px;
        height: 67px;
        background: url('~/assets/img/play.png');
        transform: translate(-50%, -50%);
      }
    }
  }
}

@include r($sm) {
  .scope {
    &__info-row {
      gap: 20px;
      margin: 0;
      .col {
        padding: 0;
      }
    }
    &__content {
      .row {
        flex-wrap: wrap;
      }
    }
  }
}
</style>
