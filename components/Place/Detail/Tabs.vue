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
          {{ tab.label }}
        </div>
      </div>

      <!-- tab -->
      <div v-if="activeTab === 'description'" class="tab__content">
        <p>Банкетный зал, Загородный ресторан, Ресторан для Банкета, Ресторан при отеле, Бизнес-площадка</p>
        <p>Летняя веранда, Парковая зона, удобный подъезд</p>

        <table>
          <tbody>
            <tr>
              <td>Описание</td>
              <td>Площадь/кв.м</td>
              <td>Банкет</td>
              <td>Фуршет</td>
              <td>Рассадка «Театр»</td>
              <td>Еще</td>
            </tr>
            <tr>
              <td>Описание</td>
              <td>Площадь/кв.м</td>
              <td>Банкет</td>
              <td>Фуршет</td>
              <td>Рассадка «Театр»</td>
              <td>Еще</td>
            </tr>
            <tr>
              <td>Описание</td>
              <td>Площадь/кв.м</td>
              <td>Банкет</td>
              <td>Фуршет</td>
              <td>Рассадка «Театр»</td>
              <td>Еще</td>
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
      ],
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
    z-index: 1;
    display: flex;
  }
  &__nav-el {
    flex: 1 0 auto;
    background: #ecf4fd;
    border-radius: 30px 30px 0 0;
    padding: 40px 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    text-align: center;
    cursor: pointer;
    transition: background 0.25s $ease;

    &.is-active {
      background: white;
      box-shadow: 0px 0px 15px rgba(105, 78, 75, 0.1);
    }
  }
}

.tab__content {
  position: relative;
  z-index: 2;
  will-change: display;
  padding: 40px;
  background: white;
  box-shadow: 0px 0px 15px rgba(105, 78, 75, 0.1);
}

@include r($md) {
}
</style>
