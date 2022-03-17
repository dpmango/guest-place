<template>
  <div class="list">
    <div class="container">
      <div v-if="includeSearchbar" class="list__searchbar">
        <PlaceSearchbar />
      </div>

      <div class="list__grid mt-4 mt-sm-2">
        <PlaceCardFull v-for="place in places" :key="place.id" :data="place" />
      </div>

      <div v-if="places && places.length" class="list__pagination">
        <UiPagination :meta="pagination" @onChange="paginationSelect" />
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
      pagination: {
        page: 1,
        count: 120,
        limit: 10,
      },
      places: mockPlaces,
    }
  },
  methods: {
    paginationSelect(page) {
      this.loading = true

      // await this.getPlaces({ page, limit: 20 })
      this.pagination.page = page

      this.loading = false
    },
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
  &__pagination {
    margin-top: 105px;
    display: flex;
    justify-content: center;
  }
}
</style>
