<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 3/5. <span class="c-primary"> Дополнительная информация</span></h2>

    <client-only>
      <template slot="placeholder">
        <UiLoader :loading="true" theme="block" />
      </template>
      <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
        <UiError :error="error" />

        <!--section -->
        <div class="step__section">
          <div class="step__section-label h4-title mb-1">Цены</div>
          <p class="radio__label tac mb-2">Заполните только те поля, которые подходят для вас</p>

          <div class="row">
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Средний чек"
                  placeholder="Сумма (в рублях)"
                  :value="middleCheck"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (middleCheck = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Банкетное меню на гостя"
                  placeholder="Сумма (в рублях)"
                  :value="banquetMenu"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (banquetMenu = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Фуршетное меню на гостя"
                  placeholder="Сумма (в рублях)"
                  :value="buffetMenu"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (buffetMenu = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Аренда/час"
                  placeholder="Сумма (в рублях)"
                  :value="rentHour"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (rentHour = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Аренда площадки под мероприятие в будни/выходные и праздничные дни"
                  placeholder="пт-сб. 100 000 р. будни 80 000 р."
                  :value="rentArea"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (rentArea = v)"
                />
              </ValidationProvider>
            </div>
          </div>
        </div>

        <!--section -->
        <div class="step__section">
          <div class="step__section-label h4-title">Депозит</div>
          <div class="row">
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Депозит (минимальная стоимость закрытия площадки, зала под одно мероприятие):"
                  placeholder="Сумма (в рублях)"
                  :value="deposit"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (deposit = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Что входит в депозит"
                  placeholder="Еда, часть напитков"
                  :value="inDeposit"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (inDeposit = v)"
                />
              </ValidationProvider>
            </div>
          </div>
        </div>

        <!--section -->
        <div class="step__section">
          <div class="step__section-label h4-title">Другое</div>
          <div class="row">
            <div class="col col-6 col-md-6 col-sm-12">
              <div class="ui-group">
                <label for="" class="radio__label">Возможность своего алкоголя</label>
                <div class="radio__col">
                  <UiCheckbox
                    label="Да"
                    name="alcohol"
                    :checked="true"
                    :value="true"
                    type="radio"
                    @onChange="() => (alcohol = 'Да')"
                  >
                    Да
                  </UiCheckbox>
                  <UiCheckbox
                    label="Нет"
                    name="alcohol"
                    :value="false"
                    type="radio"
                    @onChange="() => (alcohol = 'Нет')"
                  >
                    Нет
                  </UiCheckbox>
                  <UiCheckbox
                    label="50/50"
                    name="alcohol"
                    :value="true"
                    type="radio"
                    @onChange="() => (alcohol = '50/50')"
                  >
                    50/50
                  </UiCheckbox>
                  <UiCheckbox
                    label="По договоренности"
                    name="alcohol"
                    :value="true"
                    type="radio"
                    @onChange="() => (alcohol = 'По договоренности')"
                  >
                    По договоренности
                  </UiCheckbox>
                </div>
              </div>
            </div>
            <div class="col col-6 col-md-12">
              <div class="ui-group">
                <label for="" class="radio__label">Сервисное облуживание</label>
                <div class="radio__col">
                  <UiCheckbox
                    label="Да"
                    name="service"
                    :checked="true"
                    :value="true"
                    type="radio"
                    @onChange="() => (service = '10%')"
                  >
                    10%
                  </UiCheckbox>
                  <UiCheckbox
                    label="Нет"
                    name="service"
                    :value="false"
                    type="radio"
                    @onChange="() => (service = '15%')"
                  >
                    15%
                  </UiCheckbox>
                  <UiCheckbox
                    label="Нет"
                    name="service"
                    :value="false"
                    type="radio"
                    @onChange="() => (service = 'Нет')"
                  >
                    Нет
                  </UiCheckbox>
                  <UiCheckbox
                    label="Нет"
                    name="service"
                    :value="false"
                    type="radio"
                    @onChange="() => (service = 'Другое')"
                  >
                    Другое
                  </UiCheckbox>
                </div>
                <div v-if="service === 'Другое'" class="mt-1">
                  <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                    <UiInput
                      theme="description"
                      placeholder="Введите ваш вариант"
                      :value="serviceOther"
                      type="text"
                      :error="errors[0]"
                      @onChange="(v) => (serviceOther = v)"
                    />
                  </ValidationProvider>
                </div>
              </div>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Пробковый сбор"
                  placeholder="500 р./чел. или 300 р. за бут."
                  :value="corkage"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (corkage = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Дополнительные затраты"
                  placeholder="Оборудование, чехлы, аренда мебели, и т.д."
                  :value="additionallExpenses"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (additionallExpenses = v)"
                />
              </ValidationProvider>
            </div>
          </div>
        </div>

        <!--section -->
        <div class="step__section">
          <div class="step__section-label h4-title">Дополнительно</div>

          <div class="ui-group">
            <UiInput
              textarea
              :value="description"
              placeholder="Введите текст..."
              :rows="5"
              label="Сюда можно внести дополнительную информацию по ценам и условиям, если предыдущие поля не подходят или не полностью соответствуют вашему месту."
              @onChange="(v) => (description = v)"
            />
          </div>
        </div>

        <div class="step__cta">
          <UiButton theme="outline" @click="() => $emit('onBack')">Назад</UiButton>

          <UiButton type="submit">Отправить</UiButton>
        </div>
      </ValidationObserver>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'UiPage',
  data() {
    return {
      error: '',
      photos: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        file: null,
        blob: null,
        desc: '',
      })),

      description: '',

      // Section 1
      middleCheck: '',
      banquetMenu: '',
      buffetMenu: '',
      rentHour: '',
      rentArea: '',

      // Section 2
      deposit: '',
      inDeposit: '',

      // Section 3
      alcohol: '',
      service: '',
      serviceOther: '',
      corkage: '',
      additionallExpenses: '',
      additionall: '',
    }
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      // if (!isValid) {
      // }

      this.$emit('onNext')

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
    handleDescChange({ photo, val }) {
      this.photos = [...this.photos.map((x) => (x.id === photo.id ? { ...x, desc: val } : { ...x }))]
    },
    // ...mapActions('auth', ['login']),
  },
}
</script>

<style lang="scss" scoped>
.col {
  &--mt {
    margin-top: 20px;
  }
}
.radio {
  &__label {
    display: block;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Raleway', sans-serif;
    color: #585f66;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__row {
    display: flex;
    align-items: center;
    height: 60px;
    gap: 10px 30px;
    flex-wrap: wrap;
  }
  &__col {
    display: flex;
    // align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: column;
  }
}

.uploader-trigger {
  position: relative;
  padding-bottom: 24px;

  &__box {
    position: relative;
    z-index: 1;
    width: 100%;
    padding-bottom: 100%;
    justify-content: center;
    background: #ecf4fd;
    border: 1px dashed #aba7af;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.25s $ease, border 0.25s $ease;
    &:hover {
      border-color: $colorPrimary;
      background: white;
    }
  }
  &__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__info {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    display: block;
    padding: 8px 0;
    font-size: 14px;
    line-height: 1.35;
    text-align: center;
    color: $colorLight;
    border: 0;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    transition: color 0.25s $ease;
    background-color: transparent;
    &::placeholder {
      color: $colorLight;
    }
  }
  &__plus {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .svg-icon {
      font-size: 34px;
      color: $colorPrimary;
    }
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
  &__section-sublabel {
    max-width: 540px;
    margin: 0 auto;
  }
  &__cta {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .button {
      min-width: 190px;
    }
  }
  &__grid {
    display: grid;
    margin-top: 25px;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px 30px;
    .uploader {
      width: 100%;
      ::v-deep .uploader__file {
        display: none;
      }
    }
  }
}

.form {
  position: relative;
  // .ui-group{}
}

@include r($lg) {
  .step {
    &__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@include r($md) {
  .col {
    &--mt {
      margin-top: -25px;
    }
  }
}

@include r($sm) {
  .step {
    &__grid {
      grid-template-columns: 1fr 1fr;
    }
    &__cta {
      flex-direction: column-reverse;
      gap: 15px;
    }
  }
}
</style>
