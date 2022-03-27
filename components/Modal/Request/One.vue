<template>
  <div>
    <div class="request">
      <h5 class="request__subtitle h5-title tac mt-3">
        С вами свяжутся только те площадки, которые подходят под выбранные вами параметры. Чем больше полей заполнено,
        тем уже круг поиска и меньше предложений.
      </h5>
      <div class="request__section mt-2">
        <h6 class="h6-title request__title-section mb-1 tac">На какую дату запланировано Ваше мероприятие?</h6>
        <div class="request__row mb-1">
          <button
            class="request__date"
            :class="{ 'request__date--active': isDateOne }"
            @click="() => (isDateOne = true)"
          >
            Один день
          </button>
          <button
            class="request__date"
            :class="{ 'request__date--active': !isDateOne }"
            @click="() => (isDateOne = false)"
          >
            Несколько дней
          </button>
        </div>
        <div v-if="isDateOne" class="request__row">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiDatePicker :value="date" :error="errors[0]" @onChange="(v) => (date = v)" />
            </ValidationProvider>
          </div>
        </div>
        <div v-if="!isDateOne" class="request__row">
          <div class="request__input">
            с
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiDatePicker :value="fromDate" :error="errors[0]" @onChange="(v) => (fromDate = v)" />
            </ValidationProvider>
          </div>
          <div class="request__input">
            по
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiDatePicker :value="toDate" :error="errors[0]" @onChange="(v) => (toDate = v)" />
            </ValidationProvider>
          </div>
        </div>
      </div>

      <div class="request__section mt-2">
        <h6 class="h6-title request__title-section mb-1 tac">Какой планируется формат мероприятия?</h6>
        <div class="request__row">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="format"
                theme="request"
                placeholder="Выберите варианты"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (format = v)"
              />
            </ValidationProvider>
          </div>
        </div>
        <div class="request__row"></div>
      </div>

      <div class="request__cta">
        <!-- <UiButton theme="outline" @click="() => $emit('onNext', 1)">Назад</UiButton> -->

        <UiButton @click="handleSubmit">Далее</UiButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popover: {
        positionFixed: true,
        placement: 'bottom',
      },
      isDateOne: true,
      date: '',
      toDate: '',
      fromDate: '',

      format: '',

      masks: {
        input: 'DD.MM.YYYY',
      },
    }
  },
  methods: {
    handleDescChange({ photo, val }) {
      this.photos = [...this.photos.map((x) => (x.id === photo.id ? { ...x, desc: val } : { ...x }))]
    },
    handleSubmit() {
      // const isValid = await this.$refs.form.validate()
      // // if (!isValid) {
      // // }

      this.$emit('onNext', 2)
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
    justify-content: flex-end;
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
</style>
