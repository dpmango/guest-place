<template>
  <div class="">
    <AboutHeroGuest />
    <HomepageInfo class-name="mt-6" />
    <BannerSearch class-name="mt-4" />
    <div class="container mb-8 mt-10 mt-md-5 mb-md-5">
      <h2 class="h2-title tac">Дополнительные сервисы <span class="c-primary">GP Platform</span></h2>
      <div class="row mt-7 mt-md-4">
        <AboutNews icon="people" color="yellow"> Страховка мероприятия,как гарантия </AboutNews>
        <AboutNews icon="rotate-right" color="orange"> Возможность оплаты в кредит,в рассрочку </AboutNews>
        <AboutNews icon="magick-wand" color="red"> Личный кабинет, куда будут приходить все предложения </AboutNews>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  head: {
    title: 'Гостям | Guest&Place',
  },
}
</script>

<style lang="scss" scoped>
.row {
  gap: 85px 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}
</style>
