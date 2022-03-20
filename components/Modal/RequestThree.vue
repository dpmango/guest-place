<template>
  <div>
    <div class="request">
      <div class="request__section mt-2">
        <h6 class="h6-title request__title-section mb-1 tac">Выберите тип и особенности площадки</h6>
        <div class="request__row">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="type"
                theme="request"
                placeholder="Тип"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (type = v)"
              />
            </ValidationProvider>
          </div>
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="features"
                theme="request"
                placeholder="Особенности"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (features = v)"
              />
            </ValidationProvider>
          </div>
        </div>
      </div>

      <div class="request__section mt-2">
        <h6 class="h6-title request__title-section mb-1 tac">Выберите услуги и кухню площадки</h6>
        <div class="request__row">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="service"
                theme="request"
                placeholder="Услуги"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (service = v)"
              />
            </ValidationProvider>
          </div>
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="kitchen"
                theme="request"
                placeholder="Кухня"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (kitchen = v)"
              />
            </ValidationProvider>
          </div>
        </div>
      </div>

      <div class="request__section mt-2">
        <h6 class="h6-title request__title-section mb-1 tac">Выберите удобный для вас способ и время для связи</h6>
        <div class="request__row">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="connection"
                theme="request"
                placeholder="Способ связи"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (connection = v)"
              />
            </ValidationProvider>
          </div>
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="time"
                theme="request"
                placeholder="Удобное время"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (time = v)"
              />
            </ValidationProvider>
          </div>
        </div>
      </div>

      <div class="request__cta">
        <UiButton theme="outline" @click="() => $emit('onStepChange', 2)">Назад</UiButton>

        <UiButton @click="handleSubmit">Далее</UiButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      features: '',

      service: '',
      kitchen: '',

      connection: '',
      time: '',
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('onStepChange', 4)
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
    max-width: 250px;
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
