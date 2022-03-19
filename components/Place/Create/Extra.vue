<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 4/4. <span class="c-primary"> Дополнительная информация</span></h2>

    <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
      <UiError :error="error" />

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Стоимость, р.</div>
        <div class="row">
          <div class="col col-3 col-md-12">
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
          <div class="col col-3 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Банкетное меню, от"
                placeholder="Сумма (в рублях)"
                :value="banquetMenu"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (banquetMenu = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-3 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Фуршетное меню, от"
                placeholder="Сумма (в рублях)"
                :value="buffetMenu"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (buffetMenu = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-3 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Аренда/час, от"
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
                label="Аренда площадки под мероприятие"
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
        <div class="step__section-label h4-title">
          Депозит (минимальная стоимость закрытия площадки, зала под одно мероприятие):
        </div>
        <div class="row">
          <div class="col col-3 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Большой зал"
                placeholder="Сумма (в рублях)"
                :value="bigHall"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (bigHall = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-3 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Малый зал"
                placeholder="Сумма (в рублях)"
                :value="smallHall"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (smallHall = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-3 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Весь ресторан"
                placeholder="Сумма (в рублях)"
                :value="allRestaurant"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (allRestaurant = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-3 col-md-12">
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
              <div class="radio__row">
                <UiCheckbox
                  label="Да"
                  name="alcohol"
                  :checked="true"
                  :value="true"
                  type="radio"
                  @onChange="() => (alcohol = true)"
                >
                  Да
                </UiCheckbox>
                <UiCheckbox label="Нет" name="alcohol" :value="false" type="radio" @onChange="() => (alcohol = false)">
                  Нет
                </UiCheckbox>
                <UiCheckbox label="50/50" name="alcohol" :value="true" type="radio" @onChange="() => (alcohol = true)">
                  50/50
                </UiCheckbox>
              </div>
            </div>
          </div>
          <div class="col col-3 col-md-6 col-sm-12">
            <div class="ui-group">
              <label for="" class="radio__label">Сервисный сбор</label>
              <div class="radio__row">
                <UiCheckbox
                  label="Да"
                  name="service"
                  :checked="true"
                  :value="true"
                  type="radio"
                  @onChange="() => (service = true)"
                >
                  Да
                </UiCheckbox>
                <UiCheckbox label="Нет" name="service" :value="false" type="radio" @onChange="() => (service = false)">
                  Нет
                </UiCheckbox>
              </div>
            </div>
          </div>
          <div class="col--mt col col-3 col-md-6 col-sm-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label=""
                placeholder="Сумма, %"
                :value="serviceCount"
                type="text"
                :error="errors[0]"
                :disabled="!service"
                @onChange="(v) => (serviceCount = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-6 col-sm-12">
            <div class="ui-group">
              <label for="" class="radio__label">Пробковый сбор</label>
              <div class="radio__row">
                <UiCheckbox
                  label="Да"
                  name="corkage"
                  :checked="true"
                  :value="true"
                  type="radio"
                  @onChange="() => (corkage = true)"
                >
                  Да
                </UiCheckbox>
                <UiCheckbox label="Нет" name="corkage" :value="false" type="radio" @onChange="() => (corkage = false)">
                  Нет
                </UiCheckbox>
                <UiCheckbox
                  label="По договоренности"
                  name="corkage"
                  :value="true"
                  type="radio"
                  @onChange="() => (corkage = true)"
                >
                  По договоренности
                </UiCheckbox>
              </div>
            </div>
          </div>
          <div class="col--mt col col-3 col-md-6 col-sm-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label=""
                placeholder="Сумма, р./чел."
                :value="serviceCount"
                type="text"
                :error="errors[0]"
                :disabled="!corkage"
                @onChange="(v) => (serviceCount = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Дополнительные затраты"
                placeholder="Введите ваш ответ"
                :value="additionallExpenses"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (additionallExpenses = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-3 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Стоимость номера, от"
                placeholder="Сумма (в рублях)"
                :value="toPrice"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (toPrice = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-3 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Стоимость номера, до"
                placeholder="Сумма (в рублях)"
                :value="fromPrice"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (fromPrice = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <div class="ui-group">
              <UiInput
                textarea
                :value="bonus"
                label="Бонусы и скидки"
                placeholder="Введите текст..."
                :rows="5"
                @onChange="(v) => (bonus = v)"
              />
            </div>
          </div>
          <div class="col col-6 col-md-12">
            <div class="ui-group">
              <UiInput
                textarea
                :value="additionall"
                label="Дополнительно"
                placeholder="Если что-то не учтено в предыдущих полях, можно внести сюда."
                :rows="5"
                @onChange="(v) => (additionall = v)"
              />
            </div>
          </div>
        </div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Документы</div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Меню</div>
        <div class="step__section-sublabel tac mt-1 mb-1">
          Загрузите фотографии своих основных блюд. В описании можно указать название блюда и стоимость (опционально)
        </div>

        <div class="step__grid">
          <UiUploader
            v-for="(photo, idx) in photos"
            :key="idx"
            :file="photo.file"
            :allowed-mime="['image']"
            :max-size="5"
            :include-reader="true"
            @onReader="(img) => (photo.blob = img)"
            @onChange="(f) => (photo.file = f)"
          >
            <template #preview="slotProps">
              <div class="uploader-trigger">
                <div class="uploader-trigger__box" @click="slotProps.trigger">
                  <div v-if="!photo.blob" class="uploader-trigger__plus">
                    <UiSvgIcon name="uploader-add" />
                  </div>
                  <div v-else class="uploader-trigger__img">
                    <img :src="photo.blob" :alt="photo.file.name" />
                  </div>
                </div>
                <input
                  :value="photo.desc"
                  class="uploader-trigger__info"
                  placeholder="Добавить описание.."
                  @change="(e) => handleDescChange({ photo, val: e.target.value })"
                />
              </div>
            </template>
          </UiUploader>
        </div>
      </div>

      <!--section -->
      <div class="step__section">
        <div class="step__section-label h4-title">Часто задаваемые вопросы</div>
        <div class="step__section-sublabel tac mt-1 mb-1">
          Какие вопросы чаще всего задают вам клиенты? Поделитесь ими и ответами, чтобы наши пользователи могли больше
          узнать о вашей площадке
        </div>
        <div class="row">
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Вопрос №1"
                placeholder="Текст вопроса"
                :value="questOne"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (questOne = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Ответ №1"
                placeholder="Текст ответа"
                :value="answerOne"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (answerOne = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Вопрос №2"
                placeholder="Текст вопроса"
                :value="questTwo"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (questTwo = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Ответ №2"
                placeholder="Текст ответа"
                :value="answerTwo"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (answerTwo = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Вопрос №3"
                placeholder="Текст вопроса"
                :value="questThree"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (questThree = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6 col-md-12">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiInput
                theme="description"
                label="Ответ №3"
                placeholder="Текст ответа"
                :value="answerThree"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (answerThree = v)"
              />
            </ValidationProvider>
          </div>
        </div>
      </div>

      <div class="step__cta">
        <UiButton theme="outline" @click="() => $emit('onStepChange', 3)">Назад</UiButton>

        <UiButton type="submit">Отправить</UiButton>
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
      bigHall: '',
      smallHall: '',
      allRestaurant: '',
      inDeposit: '',

      // Section 3
      alcohol: true,
      service: true,
      serviceCount: '',
      corkage: true,
      corkageCount: '',
      additionallExpenses: '',
      toPrice: '',
      fromPrice: '',
      bonus: '',
      additionall: '',

      // Section 5
      questOne: '',
      answerOne: '',
      questTwo: '',
      answerTwo: '',
      questThree: '',
      answerThree: '',
    }
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      // if (!isValid) {
      // }

      // this.$emit('onStepChange', 4)

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
    font-size: 12px;
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
