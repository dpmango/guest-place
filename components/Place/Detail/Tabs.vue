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

        <!-- tab -->
        <div v-if="activeTab === 'price'" class="tab__content">
          <h4 class="h4-title">Price</h4>
        </div>

        <!-- tab -->
        <div v-if="activeTab === 'menu'" class="tab__content">
          <h4 class="h4-title">Menu</h4>
        </div>

        <!-- tab -->
        <div v-if="activeTab === 'lenta'" class="tab__content">
          <h4 class="h4-title">lenta</h4>
        </div>

        <!-- tab -->
        <div v-if="activeTab === 'chat'" class="tab__content">
          <h4 class="h4-title">chat</h4>
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
      },
    }
  },
  methods: {
    handleTabClick(slug) {
      this.activeTab = slug
    },
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
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
}

.tab__content--description {
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    opacity: 0;
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
    min-width: 1110px;
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
}
</style>
