<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 2/4. <span class="c-primary"> Фото и Видео</span></h2>

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Добавьте фото и/или видео вашей площадки</div>
    </div>

    <div class="step__cta">
      <UiButton theme="outline" @click="() => $emit('onStepChange', 1)">Назад</UiButton>

      <UiButton type="submit">Далее</UiButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiPage',
  data() {
    return {
      error: '',
    }
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      // if (!isValid) {
      // }

      this.$emit('onStepChange', 3)
      // await this.login({ step: 1 })
      //   .then((_res) => {
      //     this.error = null
      //   })
      //   .catch((err) => {
      //     const { data, code } = err

      //     if (data && code === 401) {
      //       Object.keys(data).forEach((key) => {
      //         this.error = data[key]
      //       })
      //     }
      //   })
    },
    // ...mapActions('auth', ['login']),
  },
}
</script>

<style lang="scss" scoped>
.step {
  &__title {
    margin-bottom: 50px;
  }
  &__section {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__section-label {
    font-weight: 500;
    text-align: center;
    margin-bottom: 25px;
  }
  &__cta {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .button {
      min-width: 190px;
    }
  }
}

.form {
  position: relative;
  // .ui-group{}
}
</style>
