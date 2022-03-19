<template>
  <section class="info" :class="className">
    <div class="container">
      <h2 class="h2-title tac">Варианты взаимодействия с <span class="c-primary">GP Platform</span></h2>

      <div class="info__grid mt-4">
        <div class="info__item">
          <h4 class="h4-title c-primary"><span class="info__big-num">1</span> Самостоятельный поиск и бронирование</h4>
          <p class="h5-title mt-1 mb-1">
            С помощью удобного фильтра и карты подбираете места и сами связываетесь с ними через чат, запрос или
            звоните. Данную опцию можно использовать без на платформе (за исключением чата).
          </p>
          <UiButton theme="outline-gradient">Каталог поиска</UiButton>
        </div>

        <div class="info__item">
          <h4 class="h4-title c-primary"><span class="info__big-num">2</span> Самостоятельный поиск и бронирование</h4>
          <p class="h5-title mt-1 mb-1">
            Запрос увидят площадки подходящие по параметрам, указанным вами при заполнении формы. Они сами свяжутся с
            вами в удобное время, отправят предложение в чат личного кабинета
            <span v-if="moreText !== 1" class="info__dots">...</span>
            <span v-if="moreText !== 1" class="info__more" @click="openText(1)"> подробнее</span>
            <span v-if="moreText === 1">
              или расскажут по телефону. Вы можете выбрать через фильтр, кому именно будет виден ваш запрос и какой
              вариант взаимодействия вам подходит. Данную опцию можно использовать без регистрации на платформе если
              выбираете связь по телефону, если хотите получить предложение, меню в чат, ознакомиться в удобное время и
              продолжить общение, то нужно зарегистрироваться.
              <span class="info__more" @click="openText(0)">подробнее</span>
            </span>
          </p>
          <UiButton theme="outline-gradient" @click="() => setModal({ name: 'request' })">Разместить запрос</UiButton>
        </div>

        <div class="info__item">
          <h4 class="h4-title c-primary"><span class="info__big-num">3</span> Помощь эксперта GP</h4>
          <p class="h5-title mt-1 mb-1">
            Эксперты платформы подскажут по всем вопросам, помогут быстрее и “без нервов” найти то, что нужно.
            Проконсультируют по ценам и условиям, в целом по городу, району и т.д
            <span v-if="moreText !== 2" class="info__dots">...</span>
            <span v-if="moreText !== 2" class="info__more" @click="openText(2)"> подробнее</span>
            <span v-if="moreText === 2">
              . Подскажут где есть то, что вы ищете. Помогут связаться с представителем нужного места, расскажут об
              особенностях.
              <br />
              <br />
              Данная опция бесплатна, но по своему желанию, вы всегда можете
              <span class="info__more" @click="openText(0)">поблагодарить консультанта.</span>
            </span>
          </p>
          <UiButton theme="outline-gradient" @click="() => setModal({ name: 'expert' })">Получить помошь</UiButton>
        </div>

        <div class="info__item">
          <h4 class="h4-title c-primary"><span class="info__big-num">4</span> Дополнительный сервис от GP</h4>
          <p class="h5-title mt-1 mb-1">
            Быстрый и качественный подбор места, профессиональная консультация эксперта платформы, онлайн сопровождение
            до момента бронирования. Это современно и
            <span v-if="moreText !== 3" class="info__dots">...</span>
            <span v-if="moreText !== 3" class="info__more" @click="openText(3)"> подробнее</span>
            <span v-if="moreText === 3">
              выгодно, если нет времени и желания искать самостоятельно.
              <br />
              <br />
              Как это работает:
              <br />
              - эксперт подробно выслушает ваши пожелания и потребности <br />
              - самостоятельно выберет наиболее подходящие варианты <br />
              - свяжется с площадками <br />
              - выяснит свободные даты, актуальные цены, договорится об условиях, подходящих именно вам <br />
              - предложит более узкий и уместный выбор мест <br />
              - договорится о просмотре <br />
              - будет сопровождать онлайн на всех этапах до момента бронирования <br />Вы взаимодействуете с одним
              экспертом, который постоянно на связи, готов помочь и ответить на все вопросы. <br />
              <br />
              <span class="info__more info__more--price" @click="openText(0)">Стоимость услуги 1000 р. </span>
            </span>
          </p>
          <UiButton theme="outline-gradient" @click="() => setModal({ name: 'help' })">Заказать услугу</UiButton>
        </div>
      </div>
    </div>

    <ModalExpert />
    <ModalHelp />
    <ModalRequest />
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    className: String,
  },
  data() {
    return {
      moreText: null,
    }
  },
  methods: {
    ...mapMutations('ui', ['setModal']),
    openText(number) {
      this.$data.moreText = number
    },
  },
}
</script>

<style lang="scss" scoped>
.info {
  position: relative;

  &__more {
    color: $colorPrimary;
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
    &--price {
      text-decoration: none;
    }
  }
  &__more-text {
    display: none;
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px 30px;
  }

  &__big-num {
    font-size: 166px;
    position: absolute;
    display: block;
    font-family: 'Roboto';
    color: $colorLightBlueUltra;
    left: 0;
    top: -40px;
  }

  &__item {
    position: relative;
    padding-left: 125px;
  }
}

@include r($lg) {
  .info {
    &__big-num {
      top: -20px;
      font-size: 70px;
    }

    &__item {
      padding-left: 0;
    }

    .h4-title {
      padding-left: 65px;
    }
  }
}
@include r($sm) {
  .info {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
