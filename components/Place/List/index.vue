<template>
  <div class="list">
    <div class="container">
      <div v-if="includeSearchbar" class="list__searchbar">
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
import { mockPlaces } from '../mockData'

export default {
  props: {
    includeSearchbar: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      places: mockPlaces,
    }
  },
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  margin-bottom: 120px;
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
