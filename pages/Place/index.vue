<template>
  <div class="">
    <PlaceMap v-if="!viewList" />
    <template v-else>
      <PlaceListHero :title="`Найдено <span class='c-primary'>123 площадки</span>`" :breadcrumbs="breadcrumbs" />
      <PlaceList />
    </template>
  </div>
</template>

<script>
export default {
  name: 'Places',
  asyncData(context) {
    // return id from URL
    return {
      query: context.route.query,
    }
  },
  data() {
    return {
      breadcrumbs: [{ to: '', label: 'Избранное' }],
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
