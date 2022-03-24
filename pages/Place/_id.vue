<template>
  <div class="">
    <PlaceDetailHero :title="`${id} Банкетный зал лофт Форест Холл`" />
    <PlaceDetailScope />
    <PlaceDetailTabs class-name="mt-8 mb-8" />
    <PlaceRequest />
    <PlaceGridRecents class-name="mt-8" />
    <PlaceGridPopular class-name="mt-8 mb-8" />
  </div>
</template>

<script>
export default {
  name: 'PlaceId',
  asyncData(context) {
    const pageParams = context.route.params

    // return id from URL
    return pageParams
    // return query_params
  },
}
</script>
