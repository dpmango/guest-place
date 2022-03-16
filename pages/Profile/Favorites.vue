<template>
  <div class="">
    <PlaceListHero title="Избранные площадки" :breadcrumbs="breadcrumbs" />
    <PlaceList :include-searchbar="false" />
  </div>
</template>

<script>
export default {
  name: 'Places',
  middleware: ['restrictedAccess'],
  data() {
    return {
      breadcrumbs: [{ to: '', label: 'Избранное' }],
    }
  },
  head: {
    title: 'Избранное | Guest&Place',
  },
}
</script>
