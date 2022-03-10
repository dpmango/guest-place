<template>
  <div class="">
    <HomepageHero />
    <HomepageCategories />
    <PlaceRecents />
    <PlacePopular />
    <HomepageInfo class-name="mt-6" />
    <BannerSearch class-name="mt-4 mb-8" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Главная | Guest&Place',
  },
}
</script>
