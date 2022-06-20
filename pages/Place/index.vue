<template>
  <div class="">
    <PlaceMap v-if="!viewList" />
    <template v-else>
      <PlaceListHero
        :title="`Найдено <span class='c-primary'>${places.totalItems} площадки</span>`"
        :breadcrumbs="breadcrumbs"
      />
      <PlaceList />
    </template>
  </div>
</template>

<script>
export default {
  name: 'Places',
  async asyncData({ route, store }) {
    // return id from URL
    const places = await store.dispatch('place/getPlaces')

    return {
      query: route.query,
      places,
    }
  },
  data() {
    return {
      breadcrumbs: [{ to: '', label: 'Площадки' }],
    }
  },
  head: {
    title: 'Места | Guest&Place',
  },
  computed: {
    viewList() {
      return this.query.view === 'list'
    },
  },
}
</script>
