<template>
  <div class="create">
    <div class="container">
      <div class="create__head">
        <div v-if="breadcrumbs" class="create__breadcrumbs">
          <UiCrumbs :list="breadcrumbs" />
        </div>
        <h1 class="h2-title">Добавление места</h1>
        <p class="create__description h5-title c-gray">
          Чтобы ваша площадка стала доступной на <br />
          платформе Guest&Place, пожалуйста, <br />
          заполните поля ниже
        </p>
      </div>

      <div class="nav">
        <span @click="() => (activeStep = 1)">step 1</span>
        <span @click="() => (activeStep = 2)">step 2</span>
        <span @click="() => (activeStep = 3)">step 3</span>
        <span @click="() => (activeStep = 4)">step 4</span>
        <span @click="() => (activeStep = 5)">step 5</span>
      </div>

      <div class="create__box">
        <PlaceCreateGeneral v-if="activeStep === 1" @onNext="onNext" />
        <PlaceCreateDescription v-if="activeStep === 2" @onNext="onNext" @onBack="onBack" />
        <PlaceCreateExtra v-if="activeStep === 3" @onNext="onNext" @onBack="onBack" />
        <PlaceCreatePhotos v-if="activeStep === 4" @onNext="onNext" @onBack="onBack" />
        <PlaceCreateStock v-if="activeStep === 5" @onNext="onNext" @onBack="onBack" />
        <!-- <PlaceCreateExtra v-if="activeStep === 5" @onNext="handleStepChange" @onBack="onBack" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiPage',
  data() {
    return {
      activeStep: 1,
      breadcrumbs: [{ to: '', label: 'Добавить место' }],
    }
  },
  methods: {
    onNext() {
      this.activeStep = this.activeStep + 1
    },
    onBack() {
      this.activeStep = this.activeStep - 1
    },
  },
}
</script>

<style lang="scss" scoped>
.create {
  margin-top: 22px;
  &__breadcrumbs {
    margin-bottom: 36px;
  }
  &__head {
    text-align: center;
  }
  &__description {
    margin-top: 25px;
  }
  &__box {
    margin-top: 60px;
    background: #ecf4fd;
    border-radius: 40px;
    padding: 60px 95px;
    margin-bottom: 100px;
  }
}

.nav {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: block;
    cursor: pointer;
    padding: 5px;
    margin-right: 16px;
    &:hover {
      color: $colorPrimary;
    }
  }
}

@include r($md) {
  .create {
    &__box {
      padding: 40px 15px;
    }
  }
}
</style>
