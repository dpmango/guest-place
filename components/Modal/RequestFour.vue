<template>
  <div>
    <div class="request">
      <div class="request__section mt-2">
        <h6 class="h6-title request__title-section mb-1 tac">
          Почти готово! Укажите свои контактные данные, чтобы с вами могли связаться
        </h6>
        <div class="request__row mt-1">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                placeholder="Ваше имя"
                :value="name"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (name = v)"
              />
            </ValidationProvider>
          </div>
        </div>
        <div class="request__row mt-1">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                placeholder="E-mail адрес"
                :value="email"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (email = v)"
              />
            </ValidationProvider>
          </div>
        </div>
        <div class="request__row mt-1">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                v-mask="'+7 (###) ###-####'"
                theme="description"
                placeholder="Номер телефона"
                :value="phone"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (phone = v)"
              />
            </ValidationProvider>
          </div>
        </div>
      </div>

      <div class="request__cta">
        <UiButton theme="outline" @click="() => $emit('onStepChange', 3)">Назад</UiButton>

        <UiButton @click="handleSubmit">Разместить запрос</UiButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',

      email: '',

      phone: '',
    }
  },
  methods: {
    handleSubmit() {
      // const isValid = await this.$refs.form.validate()
      // // if (!isValid) {
      // // }

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
.request {
  &__cta {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    .button {
      min-width: 190px;
    }
  }
  &__row {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 0 auto;
  }
  &__date {
    color: $colorLight;
    transition: $transitionSpeed $ease;
    border-bottom: 1px solid transparent;
    &--active {
      color: $fontColor;
      border-color: $colorPrimary;
    }
    &:focus-visible {
      color: $fontColor;
    }
  }
  &__input {
    width: 100%;
    display: flex;
    gap: 14px;
    max-width: 445px;
    align-items: center;
    .ui-group {
      width: 100%;
    }
  }
}
</style>
