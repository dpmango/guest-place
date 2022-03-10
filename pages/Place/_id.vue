<template>
  <div class="">
    <PlaceHero title="Банкетный зал лофт Форест Холл" />

    <PlaceRecents />
    <PlacePopular />
  </div>
</template>

<script>
export default {
  name: 'PlaceId',
  asyncData(context) {
    const pageParams = context.route.params

    console.log(pageParams)
    // return query_params
  },
}
</script>
