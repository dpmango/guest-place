<template>
  <div class="">
    <PlaceMap v-if="!viewList" />
    <PlaceList v-else />
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
