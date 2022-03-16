<template>
  <div class="list">
    <div class="container">
      <div v-if="breadcrumbs" class="list__breadcrumbs">
        <UiCrumbs :list="breadcrumbs" />
      </div>

      <h2 class="h2-title tac">Найдено <span class="c-primary">123 площадки</span></h2>

      <div class="list__searchbar">
        <PlaceSearchbar />
      </div>

      <div class="list__grid mt-4 mt-sm-2">
        <PlaceCardFull v-for="place in places" :key="place.id" :data="place" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mockPlaces } from './mockData'

export default {
  data() {
    return {
      places: mockPlaces,

      breadcrumbs: [{ to: '', label: 'Поиск (показать списком)' }],
    }
  },
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  margin-top: 22px;
  padding-bottom: 120px;
  &__wrapper {
    text-align: center;
  }
  &__breadcrumbs {
    margin-bottom: 36px;
  }
  &__searchbar {
    margin-top: 50px;
  }
  &__grid {
    display: flex;
    flex-direction: column;
    grid-gap: 80px;
  }
}
</style>
