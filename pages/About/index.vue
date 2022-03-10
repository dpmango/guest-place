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

    <AboutTextImageSection class-name="mt-8" :reverse="true">
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
