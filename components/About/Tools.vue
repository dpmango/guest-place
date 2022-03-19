<template>
  <section class="tools" :class="className">
    <div class="container">
      <div class="tools__head">
        <h2 class="h2-title">Инструменты и сервисы от <span class="c-primary">GP Platform</span></h2>
      </div>

      <div class="tools__wrapper mt-6 mt-md-1">
        <div class="tools__bg">
          <img src="~/assets/img/about-tools.svg" alt="Поющий мужчина" class="tools__man" />
          <img src="~/assets/img/about-tools-circle-1.svg" alt="Декор" class="tools__circle tools__circle--big" />
          <img src="~/assets/img/about-tools-circle-2.svg" alt="Декор" class="tools__circle tools__circle--small" />
        </div>
        <div class="tools__texts">
          <div class="tools__text">
            <p class="tac">
              <span class="c-primary">Личный кабинет</span> с простым интерфейсом, куда будут приходить все предложения.
            </p>
          </div>
          <div class="tools__text">
            <p class="tac">
              <span class="c-primary">Программа поддержки партнеров.</span> Общение, взаимодействиес другими площадками.
            </p>
          </div>
          <div class="tools__text">
            <p class="tac">
              <span class="c-primary">Современные технологии</span> и инструменты для взаимодействияс клиентами.
            </p>
          </div>
          <div class="tools__text">
            <p class="tac">
              <span class="c-primary">Круглосуточная техническая поддержка</span> для решения любых возникающих
              вопросов.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    className: String,
  },
  data() {
    return {
      breadcrumbs: [{ to: '', label: 'Площадкам' }],
    }
  },
  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.tools {
  position: relative;
  &__head {
    text-align: center;
  }
  &__wrappper {
    position: relative;
  }
  &__bg {
    width: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__man {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &__circle {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-origin: 0% 0%;
    animation: rotate 60s infinite linear;
    &--small {
      animation: rotate 45s infinite linear reverse;
    }
  }
  &__texts {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 255px 255px;
    justify-content: space-between;
    gap: 330px 0;
  }
  &__text {
    width: 255px;
    height: 235px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background-color: white;
    box-shadow: 0px 4px 15px 0px #694e4b24;
    border-radius: 30px;
  }
}

@include r($md) {
  .tools {
    &__bg {
      display: none;
    }
    &__texts {
      grid-template-columns: 1fr;
      gap: 25px;
    }
    &__text {
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
}

@keyframes rotate {
  to {
    transform: rotate(0deg) translate(-50%, -50%);
  }
  from {
    transform: rotate(360deg) translate(-50%, -50%);
  }
}
</style>
