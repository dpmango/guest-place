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
        <UiButton theme="outline" @click="() => $emit('onNext', 3)">Назад</UiButton>

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
      this.$emit('onNext', 4)
    },
  },
}
</script>

<style lang="scss" scoped>
.request {
  &__cta {
    flex-wrap: wrap;
    gap: 15px 20px;
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

@include r(440) {
  .request {
    &__cta {
      flex-direction: column-reverse;
      .button {
        max-width: 100%;
        width: 100%;
      }
    }
  }
}
</style>
