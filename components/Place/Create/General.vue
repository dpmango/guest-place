<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 1/5. <span class="c-primary"> общая информация</span></h2>

    <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
      <UiError :error="error" />

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Условия предоставления услуг</div>

        <div class="step__agree-wrapper">
          <UiCheckbox name="authRemember" :value="agree" @onChange="(v) => (agree = v)">
            *Я принимаю <a href="#" target="_blank"> условия предоставления услуг.</a>
          </UiCheckbox>
        </div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Основные сведения</div>

        <div class="row">
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Название площадки на русском / английском"
                theme="description"
                placeholder="Введите название"
                :value="name"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (name = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <label for="" class="radio__label">*Ваш город</label>
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="city"
                theme="description"
                placeholder="Впишите или выберите"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (city = v)"
              />
            </ValidationProvider>
          </div>

          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="*Время работы"
                theme="description"
                placeholder="Пн - Чт: с 12:00 до 22:00, Пт - Вс: с 10:00 до 24:00"
                :value="time"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (time = v)"
              />
            </ValidationProvider>
          </div>

          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                v-mask="'+7 (###) ###-####'"
                theme="description"
                label="*Номера телефонова"
                placeholder="+7(111)-111-11-11"
                :value="phone"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (phone = v)"
              />
            </ValidationProvider>
          </div>

          <div class="col col-6 col-md-12">
            <div class="ui-group">
              <label for="" class="radio__label">Онлайн показ:</label>
              <p class="p-label">
                возможность показа Места по видео-связи с Гостем, через удобный для обеих сторон сервис
              </p>
              <div class="radio__row">
                <UiCheckbox
                  label="Есть"
                  name="onlineView"
                  :checked="true"
                  :value="true"
                  type="radio"
                  @onChange="() => (onlineView = true)"
                >
                  Есть
                </UiCheckbox>
                <UiCheckbox
                  label="Нет"
                  name="onlineView"
                  :value="false"
                  type="radio"
                  @onChange="() => (onlineView = false)"
                >
                  Нет
                </UiCheckbox>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Локация</div>

        <div class="row">
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                label="Адрес площадки"
                theme="description"
                placeholder="Город, улица, номер здания"
                :value="address"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (address = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <label for="" class="radio__label">Район</label>
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="region"
                theme="description"
                placeholder="Впишите или выберите"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (region = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <label for="" class="radio__label">Метро поблизости (если есть)</label>
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiSelect
                :value="nearPlace"
                theme="description"
                placeholder="Впишите или выберите"
                :error="errors[0]"
                :options="['option 1', 'option 2', 'option 3']"
                @onSelect="(v) => (nearPlace = v)"
              />
            </ValidationProvider>
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
      agree: true,
      name: '',
      city: '',
      time: '',
      phone: '',
      onlineView: true,

      // section 2
      address: '',
      region: '',
      nearPlace: '',
    }
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      // if (!isValid) {
      // }

      this.$emit('onNext')
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
.radio {
  &__label {
    display: block;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Raleway', sans-serif;
    color: #585f66;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__row {
    display: flex;
    align-items: center;
    height: 60px;
    gap: 30px;
  }
}
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
  &__agree-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}

.form {
  position: relative;
  // .ui-group{}
}
</style>
