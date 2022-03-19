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
              <v-date-picker
                v-model="date"
                :masks="masks"
                :input-debounce="0"
                class="request__calendar"
                :popover="popover"
              >
                <template #default="{ inputValue, inputEvents }">
                  <UiInput
                    v-mask="'##.##.####'"
                    :value="inputValue"
                    theme="request"
                    placeholder="Выберите дату"
                    :error="errors[0]"
                    type="text"
                    v-on="inputEvents"
                    @onChange="(v) => (inputValue = v)"
                  />
                </template>
              </v-date-picker>
            </ValidationProvider>
          </div>
        </div>
        <div v-if="!isDateOne" class="request__row">
          <div class="request__input">
            с
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <v-date-picker v-model="fromDate" :masks="masks" :input-debounce="0">
                <template #default="{ inputValue, inputEvents }">
                  <UiInput
                    v-mask="'##.##.####'"
                    :value="inputValue"
                    theme="request"
                    placeholder="Выберите дату"
                    type="text"
                    :error="errors[0]"
                    v-on="inputEvents"
                    @onChange="(v) => (inputValue = v)"
                  />
                </template>
              </v-date-picker>
            </ValidationProvider>
          </div>
          <div class="request__input">
            по
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <v-date-picker v-model="toDate" :masks="masks" :input-debounce="0">
                <template #default="{ inputValue, inputEvents }">
                  <UiInput
                    v-mask="'##.##.####'"
                    :value="inputValue"
                    theme="request"
                    placeholder="Выберите дату"
                    type="text"
                    :error="errors[0]"
                    v-on="inputEvents"
                    @onChange="(v) => (inputValue = v)"
                  />
                </template>
              </v-date-picker>
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
        <!-- <UiButton theme="outline" @click="() => $emit('onStepChange', 1)">Назад</UiButton> -->

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

      this.$emit('onStepChange', 2)
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

<style lang="scss">
.request {
  &__calendar {
    .vc-container {
      max-width: 250px;
      width: 100%;
      box-shadow: 0px 8px 10px 0px #694e4b24;
      border-radius: 0px 0px 40px 40px;
      // padding: 18px 23px;
      border: 0;
    }
  }
  .vc-pane-container,
  .vc-pane-layout {
    padding: 0;
    margin: 0;
    box-shadow: none;
  }
  .vc-nav-popover-container {
  }
}
</style>
