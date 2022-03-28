<template>
  <section class="tabs" :class="className">
    <div class="container">
      <!-- nav -->
      <div class="tabs__nav">
        <div
          v-for="tab in tabs"
          :key="tab.slug"
          class="tabs__nav-el"
          :class="[activeTab === tab.slug && 'is-active']"
          @click="() => handleTabClick(tab.slug)"
        >
          <span> {{ tab.label }} </span>
          <div class="tabs__nav-decor"></div>
        </div>
      </div>

      <div class="tab__wrapper">
        <!-- tab -->
        <div v-if="activeTab === 'description'" class="tab__content tab__content--description">
          <p class="h5-title">
            <span>Тип места:</span> Банкетный зал, Загородный ресторан, Ресторан для Банкета, Ресторан при отеле,
            Бизнес-площадка
          </p>
          <p class="h5-title"><span>Особенности:</span> Летняя веранда, Парковая зона, удобный подъезд</p>
          <p class="h5-title"><span>Кухня:</span> Европейская, Русская</p>
          <p class="h5-title">
            <span>Услуги:</span> Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, Анимация, Тимбилдинг, Конференции,
            Презентации, Номерной фонд, Детская комната, Детское меню, Детская площадка, Живая музыка
          </p>
          <p class="h5-title"><span>Парковка:</span> на 5 АМ</p>
          <p class="h5-title"><span>Оборудование:</span> Свет, Звук, микрофон, колонки, проектор</p>
          <div class="table-wrapper">
            <table class="mt-3 mt-md-2">
              <tbody>
                <tr>
                  <td>Описание</td>
                  <td>Площадь/кв.м</td>
                  <td>Банкет</td>
                  <td>Фуршет</td>
                  <td>Рассадка «Театр»</td>
                  <td>Еще</td>
                </tr>
                <tr v-for="(description, index) in infoHall.description" :key="index">
                  <td>{{ description.info }}</td>
                  <td>{{ description.area }}</td>
                  <td>{{ description.banquet }}</td>
                  <td>{{ description.buffet }}</td>
                  <td>{{ description.theatre }}</td>
                  <td>{{ description.more }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- tab -->
        <div v-if="activeTab === 'price'" class="tab__content tab__content--price">
          <h4 class="h4-title">Стоимость площадки</h4>
          <div class="table-wrapper">
            <table class="mt-3 mt-md-2">
              <tbody>
                <tr>
                  <td class="col1">Категория</td>
                  <td class="col1">Большой зал</td>
                  <td class="col1">Малый зал</td>
                  <td class="col1">Весь ресторан</td>
                </tr>
                <tr>
                  <td class="col1">Средний чек</td>
                  <td class="col3">{{ infoHall.price.checkMid }}</td>
                </tr>
                <tr>
                  <td class="col1">Стоимость банкетного меню от:</td>
                  <td class="col3">{{ infoHall.price.checkBanq }}</td>
                </tr>
                <tr>
                  <td class="col1">Стоимость фуршетного меню от:</td>
                  <td class="col3">{{ infoHall.price.checkBuf }}</td>
                </tr>
                <tr>
                  <td class="col1">Аренда / час. от:</td>
                  <td class="col3">{{ infoHall.price.rentHour }}</td>
                </tr>
                <tr>
                  <td class="col1">Аренда площадки под мероприятие</td>
                  <td class="col3">{{ infoHall.price.rent }}</td>
                </tr>
                <tr>
                  <td class="col1">Депозит (минимальная стоимость закрытия площадки, зала под одно мероприятие):</td>
                  <td class="col1">{{ infoHall.price.depositXL }}</td>
                  <td class="col1">{{ infoHall.price.depositSm }}</td>
                  <td class="col1">{{ infoHall.price.depositAll }}</td>
                </tr>
                <tr>
                  <td class="col1">Что входит в депозит:</td>
                  <td class="col3">{{ infoHall.price.inDeposit }}</td>
                </tr>
                <tr>
                  <td class="col1">Возможность своего алкоголя:</td>
                  <td class="col3">{{ infoHall.price.alco }}</td>
                </tr>
                <tr>
                  <td class="col1">Пробковый сбор:</td>
                  <td class="col3">{{ infoHall.price.cork }}</td>
                </tr>
                <tr>
                  <td class="col1">Сервисный сбор:</td>
                  <td class="col3">{{ infoHall.price.service }}</td>
                </tr>
                <tr>
                  <td class="col1">Дополнительные затраты:</td>
                  <td class="col3">{{ infoHall.price.additionalSpent }}</td>
                </tr>
                <tr>
                  <td class="col1">Стоимость номера (если есть номера) от и до:</td>
                  <td class="col3">{{ infoHall.price.room }}</td>
                </tr>
                <tr>
                  <td class="col1">Бонусы и скидки:</td>
                  <td class="col3">{{ infoHall.price.bonus }}</td>
                </tr>
                <tr>
                  <td class="col1">Дополнительно:</td>
                  <td class="col3">{{ infoHall.price.additional }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tab__documents mt-2">
            <a href="#" class="h5-title"><UiSvgIcon name="file" />Скачать меню</a>
            <a href="#" class="h5-title"><UiSvgIcon name="file" />Скачать райдер</a>
          </div>
        </div>

        <!-- tab -->
        <div v-if="activeTab === 'menu'" class="tab__content tab__content--menu">
          <div class="gallery mb-5 mt-10 mt-md-0 mb-md-0">
            <div class="gallery__main">
              <div class="gallery__wrapper">
                <swiper ref="gallery" :options="gallerySwiperOptions">
                  <swiper-slide v-for="(slide, idx) in infoHall.gallery" :key="slide.id || idx">
                    <div class="gallery__slide" :class="'gallery__slide--' + slide.media.type">
                      <img :src="slide.preview" alt="gallery preview" />
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
              <div class="swiper-gallery-pagination mt-2"></div>
              <div class="swiper-gallery-next">
                <img src="~/assets/img/swiper-arrow.svg" />
              </div>
              <div class="swiper-gallery-prev">
                <img src="~/assets/img/swiper-arrow.svg" />
              </div>
            </div>
          </div>
        </div>

        <!-- tab -->
        <div v-if="activeTab === 'lenta'" class="tab__content tab__content--lenta">
          <PlaceDetailTabLenta :lenta="infoHall.lenta">
            Зимняя свадьба похожа на сказку. Пушистый снег на фотографиях, уютно оформленная площадка и романтичная
            атмосфера вечера при свечах.
            <br /><br />
            Декабрь уже подходит к концу, но впереди нас ждут январь и февраль с изобилием красивых дат!
            <br /><br />
            Напишите нам в Директ, чтобы узнать все детали и записаться на просмотр / Banquet hall Loft Forest Hall
          </PlaceDetailTabLenta>
          <PlaceDetailTabLenta :lenta="infoHall.lenta">
            Зимняя свадьба похожа на сказку. Пушистый снег на фотографиях, уютно оформленная площадка и романтичная
            атмосфера вечера при свечах.
            <br /><br />
            Декабрь уже подходит к концу, но впереди нас ждут январь и февраль с изобилием красивых дат!
            <br /><br />
            Напишите нам в Директ, чтобы узнать все детали и записаться на просмотр / Banquet hall Loft Forest Hall
          </PlaceDetailTabLenta>
          <PlaceDetailTabLenta :lenta="infoHall.lenta">
            Зимняя свадьба похожа на сказку. Пушистый снег на фотографиях, уютно оформленная площадка и романтичная
            атмосфера вечера при свечах.
            <br /><br />
            Декабрь уже подходит к концу, но впереди нас ждут январь и февраль с изобилием красивых дат!
            <br /><br />
            Напишите нам в Директ, чтобы узнать все детали и записаться на просмотр / Banquet hall Loft Forest Hall
          </PlaceDetailTabLenta>
          <PlaceDetailTabLenta :lenta="infoHall.lenta">
            Зимняя свадьба похожа на сказку. Пушистый снег на фотографиях, уютно оформленная площадка и романтичная
            атмосфера вечера при свечах.
            <br /><br />
            Декабрь уже подходит к концу, но впереди нас ждут январь и февраль с изобилием красивых дат!
            <br /><br />
            Напишите нам в Директ, чтобы узнать все детали и записаться на просмотр / Banquet hall Loft Forest Hall
          </PlaceDetailTabLenta>
          <PlaceDetailTabLenta :lenta="infoHall.lenta">
            Зимняя свадьба похожа на сказку. Пушистый снег на фотографиях, уютно оформленная площадка и романтичная
            атмосфера вечера при свечах.
            <br /><br />
            Декабрь уже подходит к концу, но впереди нас ждут январь и февраль с изобилием красивых дат!
            <br /><br />
            Напишите нам в Директ, чтобы узнать все детали и записаться на просмотр / Banquet hall Loft Forest Hall
          </PlaceDetailTabLenta>
          <UiButton class="button">Показать еще 4</UiButton>
        </div>

        <!-- tab -->
        <div v-if="activeTab === 'chat'" class="tab__content tab__content--chat">
          <h4 class="h4-title tac">Отзывы гостей</h4>
          <p class="chat__subtitle tac mt-2 mb-2">23 отзыва (5.0)</p>
          <PlaceDetailTabChat v-for="chat in infoHall.chat" :key="chat.id" :chat="chat" />
          <div class="chat__buttons mt-3 mb-3 mt-md-1">
            <UiButton class="chat__button">Больше отзывов</UiButton>
            <UiButton class="chat__button" theme="outline">Добавить отзыв</UiButton>
          </div>
          <h5 class="h5-title chat__title">
            Не нашли нужную информацию? Ознакомьтесь с <span class="c-primary"> часто задаваемыми вопросами </span> или
            задайте <span class="c-primary"> свой вопрос</span> ниже.
          </h5>
          <p class="chat__subtitle mt-1 mb-3">Сотрудники обычно отвечают в течение нескольких часов</p>
          <PlaceDetailTabQuest>
            <template #quest> Каков процент за обслуживание банкета? </template>
            <template #answer>
              В случае предварительного заказа банкета стоимость обслуживания (10%) автоматически добавляется к чеку. В
              случае предварительного заказа банкета стоимость обслуживания (10%) автоматически добавляется к чеку. В
              случае предварительного заказа банкета стоимость обслуживания (10%) автоматически добавляется к чеку.
            </template>
          </PlaceDetailTabQuest>
          <PlaceDetailTabQuest>
            <template #quest> Каков процент за обслуживание банкета? </template>
            <template #answer>
              В случае предварительного заказа банкета стоимость обслуживания (10%) автоматически добавляется к чеку.
            </template>
          </PlaceDetailTabQuest>
          <PlaceDetailTabQuest>
            <template #quest> Каков процент за обслуживание банкета? </template>
            <template #answer>
              В случае предварительного заказа банкета стоимость обслуживания (10%) автоматически добавляется к чеку.
            </template>
          </PlaceDetailTabQuest>
          <PlaceDetailTabQuest>
            <template #quest> Каков процент за обслуживание банкета? </template>
            <template #answer>
              В случае предварительного заказа банкета стоимость обслуживания (10%) автоматически добавляется к чеку.
            </template>
          </PlaceDetailTabQuest>
          <div class="chat__buttons mt-3 mt-md-1">
            <UiButton class="chat__button">Больше вопросов</UiButton>
            <UiButton type="button" class="chat__button" theme="outline" @click="() => setModal({ name: 'quest' })"
              >Задать вопрос</UiButton
            >
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
  },
  data() {
    return {
      activeTab: 'description',

      tabs: [
        { slug: 'description', label: 'Описание' },
        { slug: 'price', label: 'Цены/аренда' },
        { slug: 'menu', label: 'Меню' },
        { slug: 'lenta', label: 'Лента' },
        { slug: 'chat', label: 'Гостевой чат' },
      ],

      infoHall: {
        hallId: '1',
        description: [
          {
            info: '1 Атриум',
            area: '50',
            banquet: '25',
            buffet: '25',
            theatre: '40',
            more: '40',
          },
          {
            info: '2 Сафари',
            area: '100',
            banquet: '50',
            buffet: '50',
            theatre: '50',
            more: '50',
          },
          {
            info: '3 Королевский',
            area: '200',
            banquet: '50',
            buffet: '50',
            theatre: '50',
            more: '50',
          },
        ],
        price: {
          checkMid: '2000 р.',
          checkBanq: '1200 р.',
          checkBuf: '3000 р.',
          rentHour: '3000 р.',
          rent: 'пт-сб. 100 000 р. будни 80 000 р.',
          depositXL: '200 000 р.',
          depositSm: '120 000 р.',
          depositAll: '300 000 р.',
          inDeposit: 'Еда, часть напитков',
          alco: 'да',
          cork: '500 р/чел',
          service: '10%',
          additionalSpent: 'Оборудование, чехлы и т.д.',
          room: '2500 р. - 15 000 р.',
          bonus: 'В будни нет аренды!  Молодоженам номер в подарок, каравай.',
          additional: 'Если что-то не учтено в предыдущих полях, можно внести сюда.',
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
          {
            id: 4,
            preview: require('~/assets/img/place-gallery-1-preview.jpg'),
            thumb: require('~/assets/img/place-gallery-1-thumb.jpg'),
            media: {
              type: 'image',
              url: require('~/assets/img/place-gallery-1-preview.jpg'),
            },
          },
          {
            id: 5,
            preview: require('~/assets/img/place-gallery-1-preview.jpg'),
            thumb: require('~/assets/img/place-gallery-1-thumb.jpg'),
            media: {
              type: 'image',
              url: require('~/assets/img/place-gallery-1-preview.jpg'),
            },
          },
        ],
        lenta: {
          img: '/_nuxt/assets/img/place-gallery-1-preview.jpg',
          avatar: '/_nuxt/assets/img/place-gallery-1-preview.jpg',
          likes: 18,
          title: 'Банкетный зал Форест Холл',
          date: '4 дня',
        },
        chat: [
          {
            id: 1,
            rating: '1',
            avatar: '/_nuxt/assets/img/place-gallery-1-preview.jpg',
            name: 'Юлия',
            date: '20.03.2022',
            text: 'Очень красиво и стильное место! Сервис на высшем уровне. Все прозрачно, никаких непонятных доп. услуг нет, практически все включено в стоимость аренды. Шикарный ламповый звук, очень атмосферно. Пространство большое, бар удобный, бармены профессионалы своего дела! Рекомендую данный лофт. 10 из 10!!',
          },
          {
            id: 2,
            rating: '2',
            avatar: '/_nuxt/assets/img/place-gallery-1-preview.jpg',
            name: 'Юлия',
            date: '20.03.2022',
            text: 'Очень красиво и стильное место! Сервис на высшем уровне. Все прозрачно, никаких непонятных доп. услуг нет, практически все включено в стоимость аренды. Шикарный ламповый звук, очень атмосферно. Пространство большое, бар удобный, бармены профессионалы своего дела! Рекомендую данный лофт. 10 из 10!!',
          },
          {
            id: 3,
            rating: '3',
            avatar: '/_nuxt/assets/img/place-gallery-1-preview.jpg',
            name: 'Юлия',
            date: '20.03.2022',
            text: 'Очень красиво и стильное место! Сервис на высшем уровне. Все прозрачно, никаких непонятных доп. услуг нет, практически все включено в стоимость аренды. Шикарный ламповый звук, очень атмосферно. Пространство большое, бар удобный, бармены профессионалы своего дела! Рекомендую данный лофт. 10 из 10!!',
          },
          {
            id: 5,
            rating: '5',
            avatar: '/_nuxt/assets/img/place-gallery-1-preview.jpg',
            name: 'Юлия',
            date: '20.03.2022',
            text: 'Очень красиво и стильное место! Сервис на высшем уровне. Все прозрачно, никаких непонятных доп. услуг нет, практически все включено в стоимость аренды. Шикарный ламповый звук, очень атмосферно. Пространство большое, бар удобный, бармены профессионалы своего дела! Рекомендую данный лофт. 10 из 10!!',
          },
        ],
      },

      gallerySwiperOptions: {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
          clickable: true,
          el: '.swiper-gallery-pagination',
        },
        navigation: {
          nextEl: '.swiper-gallery-next',
          prevEl: '.swiper-gallery-prev',
        },
        breakpoints: {
          991: {
            slidesPerView: 3,
          },
          768: {
            spaceBetween: 30,
          },
        },
      },
    }
  },
  methods: {
    handleTabClick(slug) {
      this.activeTab = slug
    },
    ...mapMutations('ui', ['setModal']),

    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.chat {
  &__subtitle {
    color: $colorLight;
  }
  &__buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px 30px;
  }
}
.tabs {
  position: relative;
  &__nav {
    position: relative;
    z-index: 3;
    display: flex;
  }
  &__nav-el {
    // flex: 1 0 auto;
    background: #ecf4fd;
    border-radius: 30px 30px 0 0;
    padding: 40px 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    text-align: center;
    cursor: pointer;
    // transition: background $transitionSpeed $ease;
    width: 100%;
    max-width: 220px;
    position: relative;
    box-shadow: inset 0px -12px 15px -12px rgba(105, 78, 75, 0.1);
    &.is-active {
      z-index: 2;
      background: white;
      box-shadow: 0px 0px 15px rgba(105, 78, 75, 0.1);
      .tabs__nav-decor {
        opacity: 1;
        // transition: opacity $transitionSpeed $ease;
      }
    }
    span {
      position: relative;
      z-index: 6;
    }

    &:last-child {
      &.is-active {
        .tabs__nav-decor {
          width: calc(100% + 30px);
          &::after {
            display: none;
          }
        }
      }
    }
    &:first-child {
      &.is-active {
        .tabs__nav-decor {
          width: calc(100% + 30px);
          left: 0;
          &::before {
            display: none;
          }
        }
      }
    }
  }
  &__nav-decor {
    pointer-events: none;
    opacity: 0;
    position: absolute;
    height: inherit;
    bottom: -25px;
    left: -30px;
    width: calc(100% + 60px);
    height: 55px;
    background-color: white;
    overflow: hidden;
    &::after {
      content: '';
      width: 60px;
      height: 60px;
      right: -30px;
      top: -30px;
      border-radius: 50%;
      background-color: #ecf4fd;
      position: absolute;
      box-shadow: inset 12px -12px 15px -12px rgba(105, 78, 75, 0.1);
    }
    &::before {
      content: '';
      width: 60px;
      height: 60px;
      left: -30px;
      top: -30px;
      border-radius: 50%;
      background-color: #ecf4fd;
      position: absolute;
      box-shadow: inset -12px -12px 15px -12px rgba(105, 78, 75, 0.1);
    }
  }
}

.tab {
  &__content {
    position: relative;
    z-index: 2;
    will-change: display;
    padding: 40px;
    background: white;
    box-shadow: 0px 0px 15px rgba(105, 78, 75, 0.1);
    border-radius: 30px;
  }
  &__wrapper {
    background: #ecf4fd;
    border-radius: 0 0 30px 30px;
  }
  &__documents {
    display: flex;
    gap: 32px;
  }
}

.tab__content--description {
  .table-wrapper {
    width: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
  p {
    display: flex;
    span {
      display: block;
      color: $colorLight;
      margin-right: 13px;
    }
  }
  table {
    min-width: 920px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid $colorLightUltra;
    display: block;
  }
  tbody {
    display: block;
  }
  td {
    flex: 1;
    border-right: 1px solid $colorLightUltra;
    display: flex;
    align-items: center;
    justify-content: center;
    &:last-child {
      border-right: none;
    }
  }
  tr {
    display: flex;
    border-bottom: 1px solid $colorLightUltra;
    height: 56px;
    &:last-child {
      border-bottom: none;
    }
  }
}
.tab__content--price {
  .table-wrapper {
    width: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
  p {
    display: flex;
    span {
      display: block;
      color: $colorLight;
      margin-right: 13px;
    }
  }
  table {
    min-width: 920px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid $colorLightUltra;
    display: block;
  }
  tbody {
    display: block;
  }
  td {
    padding: 20px 16px;
    text-align: center;
    border-right: 1px solid $colorLightUltra;
    display: flex;
    align-items: center;
    justify-content: center;
    &:last-child {
      border-right: none;
    }
    &.col1 {
      width: 25%;
    }
    &.col3 {
      width: 75%;
    }
  }
  tr {
    display: flex;
    border-bottom: 1px solid $colorLightUltra;
    &:last-child {
      border-bottom: none;
    }
  }
  a {
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
      font-size: 24px;
    }
  }
}
.tab__content--lenta {
  .button {
    margin: 0 auto;
    display: block;
  }
}

.gallery {
  &__slide {
    border-radius: 30px;
    transition: $transitionSpeed $ease;
    height: 320px;
    img {
      height: inherit;
      object-fit: cover;
      width: 100%;
      border-radius: 30px;
    }
    &:hover {
      box-shadow: 0px 0px 15px 0px #33333326;
    }
  }
  &__wrapper {
    padding: 0px 75px;
  }
  &__main {
    // padding: 0px 55px;
    position: relative;
    .swiper-gallery-next,
    .swiper-gallery-prev {
      position: absolute;
      z-index: 2;
      top: calc(50% - 18px);
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
      right: 0;
    }
    .swiper-gallery-prev {
      img {
        transform: rotate(-180deg);
      }
    }
  }
}

@include r($lg) {
  .tabs {
    &__nav {
      flex-wrap: wrap;
    }
    &__nav-el {
      max-width: $col4;
      margin-bottom: -20px;
      padding: 15px 15px 35px;
      box-shadow: 0px 0px 15px rgba(105, 78, 75, 0.1);
      &:last-child,
      &:nth-child(4) {
        padding: 15px;
        margin-bottom: 0;
        max-width: $col6;
        z-index: 3;
        .tabs__nav-decor {
          display: block;
        }
      }
      &:nth-child(4) {
        &.is-active {
          .tabs__nav-decor {
            width: calc(100% + 30px);
            left: 0;
            &::before {
              display: none;
            }
          }
        }
      }
    }
    &__nav-decor {
      display: none;
    }
  }

  .gallery {
    &__wrapper {
      padding: 0px 55px;
    }
  }
}

@include r($md) {
  .tabs {
    &__nav-el {
      font-size: 14px;
    }
  }
  .tab {
    &__content {
      padding: 40px 15px;
    }
  }
  .tab__content--description {
    p {
      font-size: 14px;
      display: inline-block;
      span {
        display: inline;
      }
    }
  }
  .gallery {
    &__slide {
      height: 100px;
    }
  }

  .chat {
    &__subtitle {
      text-align: center;
    }
    &__title {
      text-align: center;
    }
  }
}

@include r($sm) {
  .gallery {
    &__wrapper {
      padding: 0px 40px;
    }
    &__slide {
      border-radius: 20px;
      img {
        border-radius: 20px;
      }
    }
  }

  .chat {
    &__button {
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
.swiper-gallery-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  & > .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: transparent;
    opacity: 1;
    border: 1px solid $colorLightUltra;
    display: block;
    &-active {
      border: 0;
      width: 14px;
      height: 14px;
      background: url('~/assets/img/swiper-pagination.png');
    }
  }
}
</style>
