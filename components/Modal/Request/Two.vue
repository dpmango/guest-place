<template>
  <div>
    <div class="request">
      <div class="request__section mt-2">
        <h6 class="h6-title request__title-section mb-1 tac">Сколько гостей планируется на мероприятии?</h6>
        <div class="request__row">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="count"
                theme="request"
                placeholder="Выберите вариант"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (count = v)"
              />
            </ValidationProvider>
          </div>
        </div>
      </div>

      <div class="request__section mt-2">
        <h6 class="h6-title request__title-section mb-1 tac">
          Укажите наиболее предпочтительное расположение площадки (опционально)
        </h6>
        <div class="request__row">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="district"
                theme="request"
                placeholder="Район"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (district = v)"
              />
            </ValidationProvider>
          </div>
        </div>
      </div>

      <div class="request__section mt-2">
        <h6 class="h6-title request__title-section mb-1 tac">Укажите ваш бюджет на человека</h6>
        <div class="request__row">
          <div class="request__input request__input--slider">
            <UiRangeSlider
              :value="budget"
              :min="1000"
              :max="50 * 1000"
              :interval="1000"
              @onChange="(v) => (budget = v)"
            />
          </div>
        </div>
      </div>

      <div class="request__cta">
        <UiButton theme="outline" @click="() => $emit('onNext', 1)">Назад</UiButton>

        <UiButton @click="handleSubmit">Далее</UiButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: '',
      district: '',
      budget: [1000, 50000],
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('onNext', 3)
    },
  },
}
</script>

<style lang="scss" scoped>
.request {
  &__cta {
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
    &--slider {
      max-width: 100%;
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
