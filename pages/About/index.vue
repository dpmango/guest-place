<template>
  <div class="">
    <AboutHeroMain />
    <AboutFeatures />
    <BannerProject class-name="mt-6" />

    <AboutTextImageSection class-name="mt-6" :reverse="false">
      <template #title>наша <span class="c-primary">Миссия</span></template>
      <template #content>
        Соединяем гостей (людей) и места, создавая простотуи прозрачность в “отношениях”. Предоставляем самые
        современные технологии и инструменты для простого и легкого общения. Наши эксперты помогают Гостям найти «то
        самое» место. Авторизация
      </template>
      <template #image>
        <img src="~/assets/img/about-mission.jpg" srcset="~/assets/img/about-mission@2x.jpg 2x" />
      </template>
    </AboutTextImageSection>

    <AboutTextImageSection class-name="mt-8 mt-md-3" :reverse="true">
      <template #title>История <span class="c-primary">создания</span></template>
      <template #content>
        Соединяем гостей (людей) и места, создавая простотуи прозрачность в “отношениях”. Предоставляем самые
        современные технологии и инструменты для простого и легкого общения. Наши эксперты помогают Гостям найти “то
        самое” место.
      </template>
      <template #image>
        <img src="~/assets/img/about-history.jpg" srcset="~/assets/img/about-history@2x.jpg 2x" />
      </template>
    </AboutTextImageSection>

    <div class="container mb-8 mt-10 mt-md-5 mb-md-5">
      <h2 class="h2-title tac">наши <span class="c-primary">Новости</span></h2>
      <div class="row mt-7 mt-md-4">
        <AboutNews icon="people" color="yellow"> Площадкам </AboutNews>
        <AboutNews icon="rotate-right" color="orange"> Обновления </AboutNews>
        <AboutNews icon="magick-wand" color="red"> Новые продукты G<span class="c-primary">P</span> </AboutNews>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  head: {
    title: 'О платформе | Guest&Place',
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
