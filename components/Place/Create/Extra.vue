<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 4/4. <span class="c-primary"> Дополнительная информация</span></h2>

    <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
      <UiError :error="error" />

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Стоимость, р.</div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">
          Депозит (минимальная стоимость закрытия площадки, зала под одно мероприятие):
        </div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Другое</div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Документы</div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Меню</div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Часто задаваемые вопросы</div>
      </div>

      <div class="step__cta">
        <UiButton theme="outline" @click="() => $emit('onStepChange', 3)">Назад</UiButton>

        <UiButton type="submit">Отправить</UiButton>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'UiPage',
  data() {
    return {
      error: '',

      description: '',
    }
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      // if (!isValid) {
      // }

      // this.$emit('onStepChange', 4)

      this.$toast.global.default({ message: 'emit compleation' })

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
