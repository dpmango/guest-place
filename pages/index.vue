<template>
  <div class="">
    <HomepageHero />
    <HomepageCategories />
    <PlaceGridRecents class-name="mt-8" />
    <PlaceGridPopular class-name="mt-8" />
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
