<template>
  <UiModal name="request" content-class="mt-1" theme="request">
    <template #title>Размещение запроса </template>

    <template #content>
      <div class="modal__wrapper">
        <div class="modal__nav">
          <div class="modal__pagination">
            <p>Шаг {{ activeStep }}/4</p>
          </div>
          <div class="modal__slider">
            <div class="modal__slider-inner" :class="'modal__slider-inner--' + activeStep"></div>
          </div>
        </div>
        <div class="create__box">
          <ModalRequestOne v-if="activeStep === 1" @onNext="handleStepChange" />
          <ModalRequestTwo v-if="activeStep === 2" @onNext="handleStepChange" />
          <ModalRequestThree v-if="activeStep === 3" @onNext="handleStepChange" />
          <ModalRequestFour v-if="activeStep === 4" @onNext="handleStepChange" />
        </div>
      </div>
    </template>
  </UiModal>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 1,
      breadcrumbs: [{ to: '', label: 'Добавить место' }],
    }
  },
  methods: {
    handleStepChange(v) {
      this.activeStep = v
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  &__decor {
    &--mobile {
      display: none;
    }
  }
  &__nav {
    margin-top: 20px;
  }
  &__pagination {
    text-align: center;
    color: $colorLight;
    height: 21px;
    margin-bottom: 6px;
  }
  &__slider {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: $colorLightBlueUltra;
    margin: 0 auto;
  }
  &__slider-inner {
    height: inherit;
    border-radius: 2px;
    transition: $transitionSpeed linear;
    background: linear-gradient(90deg, #8e2dbc 3.6%, #ffc5bd 34.91%, #db7ae3 66.22%, #0066cc 97.52%);
    &--1 {
      width: 25%;
    }
    &--2 {
      width: 50%;
    }
    &--3 {
      width: 75%;
    }
    &--4 {
      width: 100%;
    }
  }
  &__wrapper {
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
  }
}

@include r($md) {
  .modal {
    &__button {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
  .create__box {
    max-width: 400px;
  }
}
</style>
