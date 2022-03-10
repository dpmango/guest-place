<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 1/4. <span class="c-primary"> общая информация</span></h2>

    <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
      <UiError :error="error" />

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Основные сведения</div>

        <div class="row">
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Название площадки на русском языке/кириллицей"
                placeholder="Ресторан Версаль"
                :value="name"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (name = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Название площадки на русском языке/кириллицей"
                placeholder="Restaurant Versal"
                :value="nameEng"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (nameEng = v)"
              />
            </ValidationProvider>
          </div>

          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Время работы"
                placeholer="Пн - Чт: с 12:00 до 22:00, Пт - Вс: с 10:00 до 24:00"
                :value="time"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (time = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <div class="ui-group">
              <UiInput
                label="Количество залов"
                placeholder="Укажите количество"
                :value="space"
                type="text"
                @onChange="(v) => (space = v)"
              />
            </div>
          </div>

          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                v-mask="'+7 (###) ###-####'"
                label="*Контактный номер телефона"
                placeholer="+7(111)-111-11-11"
                :value="time"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (time = v)"
              />
            </ValidationProvider>
          </div>
        </div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Расположение</div>

        <div class="row">
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Город, в котором находится площадка"
                placeholder="Название города"
                :value="city"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (city = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Название улицы"
                placeholder="Название улицы"
                :value="street"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (street = v)"
              />
            </ValidationProvider>
          </div>

          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Номер здания"
                placeholer="Номер здания"
                :value="building"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (building = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <div class="ui-group">
              <UiInput
                label="Ближайшая станция метро (можно несколько)"
                placeholder="Название станции (станций) метро"
                :value="metro"
                type="text"
                @onChange="(v) => (metro = v)"
              />
            </div>
          </div>
        </div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Ориентировочная стоимость</div>

        <div class="row">
          <div class="col col-3 col-md-6 col-sm-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="Средний чек, р."
                placeholder="Сумма (в рублях)"
                :value="price"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (price = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-3 col-md-6 col-sm-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Название улицы"
                placeholder="Сумма (в рублях)"
                :value="banqetue"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (banqetue = v)"
              />
            </ValidationProvider>
          </div>

          <div class="col-3 col-md-6 col-sm-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Цена аренды, р./час"
                placeholer="Сумма (в рублях)"
                :value="rent"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (rent = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col-3 col-md-6 col-sm-12">
            <div class="ui-group">
              <label for="">Пробковый сбор:</label>
              <UiRadio label="Есть" name="corkage" :value="corkage" type="text" @onChange="(v) => (corkage = v)" />
              <UiRadio label="Нет" name="corkage" :value="!corkage" type="text" @onChange="(v) => (corkage = v)" />
            </div>
          </div>
        </div>
      </div>

      <div class="step__cta">
        <UiButton type="submit">Далее</UiButton>
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
      // section 1
      name: '',
      nameEng: '',
      time: '',
      space: '',
      phone: '',

      // section 2
      city: '',
      street: '',
      building: '',
      metro: '',

      // section 3
      price: '',
      banqetue: '',
      rent: '',
      corkage: null,
    }
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      // if (!isValid) {
      // }

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
    justify-content: flex-end;
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
