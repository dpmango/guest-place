<template>
  <UiPanel name="filter" class="fixed panel__filter">
    <div class="filter">
      <div class="filter__header">
        <h3 class="h3-title">Фильтрация поиска</h3>
        <button @click="() => resetPanels()">
          <UiSvgIcon name="close" />
        </button>
      </div>
      <div class="filter__select">
        <p class="filter__select-title">Тип площадки</p>
        <UiSelect
          :value="type"
          theme="polymorph"
          placeholder="Выберите варианты"
          :options="['option 1', 'option 2', 'option 3']"
          @onSelect="(v) => (type = v)"
        />
      </div>
      <div class="filter__select">
        <p class="filter__select-title">Особенности</p>
        <UiSelect
          :value="features"
          theme="polymorph"
          placeholder="Выберите варианты"
          :options="['option 1', 'option 2', 'option 3']"
          @onSelect="(v) => (features = v)"
        />
      </div>
      <div class="filter__select">
        <p class="filter__select-title">Вместимость</p>
        <UiSelect
          :value="capacity"
          theme="polymorph"
          placeholder="Выберите варианты"
          :options="['option 1', 'option 2', 'option 3']"
          @onSelect="(v) => (capacity = v)"
        />
      </div>
      <div class="filter__select">
        <p class="filter__select-title">Стоимость</p>

        <div class="filter__row">
          <div class="filter__input filter__input--slider">
            <UiRangeSlider
              :value="price"
              :min="1000"
              :max="50 * 1000"
              :interval="1000"
              @onChange="(v) => (price = v)"
            />
          </div>
        </div>
      </div>
      <div class="mt-2">
        <UiButton class="filter__button">Показать результаты (185)</UiButton>
      </div>
    </div>
  </UiPanel>
</template>

<script>
import { mapMutations } from 'vuex'
//! Выдает ошибку

// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'

export default {
  // components: {
  //   VueSlider
  // },
  data() {
    return {
      type: null,
      features: null,
      capacity: null,
      price: [1000, 50000],
    }
  },
  methods: {
    ...mapMutations('ui', ['resetPanels']),
    close() {
      this.resetPanels()
    },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 576vh;
  box-shadow: 0px 0px 15px rgba(105, 78, 75, 0.14);
  max-width: 600px;
  background-color: #fff;
  padding: 30px 15px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
  &__select {
    margin-bottom: 20px;
  }
  &__select-title {
    margin-bottom: 7px;
  }
  &__button {
    width: 100%;
  }
  &__row {
    padding: 0px 20px;
  }
}

@include r($sm) {
  .filter {
    max-width: 100%;
  }
}
</style>
