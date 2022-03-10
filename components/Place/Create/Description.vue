<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 3/4. <span class="c-primary"> описание</span></h2>

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Основные характеристики</div>
    </div>

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Информация о залах</div>
    </div>

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Описание площадки</div>

      <div class="ui-group">
        <UiInput
          textarea
          :value="description"
          placeholder="Введите текст..."
          :rows="5"
          @onChange="(v) => (description = v)"
        />
      </div>
    </div>

    <div class="step__cta">
      <UiButton theme="outline" @click="() => $emit('onStepChange', 2)">Назад</UiButton>

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

      description: '',
    }
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      // if (!isValid) {
      // }

      this.$emit('onStepChange', 4)
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
