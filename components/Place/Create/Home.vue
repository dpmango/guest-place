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

      <div class="create__box">
        <PlaceCreateGeneral v-if="activeStep === 1" @onNext="onNext" />
        <PlaceCreateDescription v-if="activeStep === 2" @onNext="onNext" @onBack="onBack" />
        <PlaceCreateExtra v-if="activeStep === 3" @onNext="onNext" @onBack="onBack" />
        <PlaceCreatePhotos v-if="activeStep === 4" @onNext="onNext" @onBack="onBack" />
        <PlaceCreateStock v-if="activeStep === 5" @onNext="onNext" @onBack="onBack" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateHome',
  data() {
    return {
      activeStep: 1,
      totalSteps: 5,
      breadcrumbs: [{ to: '', label: 'Добавить место' }],
    }
  },
  watch: {
    activeStep(newVal) {
      const { step: activeStep } = this.$route.query

      if (newVal && Number(activeStep) !== newVal) {
        // prevents navigationDuplicates
        this.$router.replace({ path: this.$route.path, query: { step: Number(newVal) } })
      }
    },
  },
  created() {
    const { step } = this.$route.query
    if (step) {
      this.activeStep = Number(step)
    }
  },
  methods: {
    onNext() {
      if (this.activeStep + 1 > this.totalSteps) {
        this.activeStep = this.totalSteps
      } else {
        this.activeStep = this.activeStep + 1
      }
    },
    onBack() {
      if (this.activeStep - 1 > 0) {
        this.activeStep = this.activeStep - 1
      } else {
        this.activeStep = 1
      }
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

@include r($md) {
  .create {
    &__box {
      padding: 40px 15px;
    }
  }
}
</style>
