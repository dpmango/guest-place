<template>
  <div class="">
    <PlaceDetailHero :place="place" />
    <PlaceDetailScope :place="place" />
    <PlaceDetailTabs class-name="mt-8 mb-8" :place="place" />
    <PlaceRequest />
    <PlaceGridRecents class-name="mt-8" />
    <PlaceGridPopular class-name="mt-8 mb-8" />
  </div>
</template>

<script>
export default {
  name: 'PlaceId',
  async asyncData({ route, store }) {
    const pageParams = route.params

    const place = await store.dispatch('place/getPlace', pageParams.id)

    // return id from URL
    return {
      place,
    }
  },
}
</script>
