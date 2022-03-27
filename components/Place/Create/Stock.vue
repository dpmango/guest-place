<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 5/5. <span class="c-primary"> номерной фонд</span></h2>

    <!--section -->
    <div class="step__section">
      <div class="col col-12">
        <div class="ui-group">
          <label for="" class="radio__label tac">*Есть ли у Вашей площадки номерной фонд?</label>
          <div class="radio__row radio__row--center">
            <UiCheckbox
              label="Да"
              name="stockVisible"
              :value="true"
              type="radio"
              @onChange="() => (stockVisible = true)"
            >
              Да
            </UiCheckbox>
            <UiCheckbox
              :checked="true"
              label="Нет"
              name="stockVisible"
              :value="false"
              type="radio"
              @onChange="() => (stockVisible = false)"
            >
              Нет
            </UiCheckbox>
          </div>
        </div>
      </div>
    </div>

    <!--section -->
    <div v-if="stockVisible">
      <div v-for="stock in stockInformation" :key="stock.id" class="step__stock">
        <!--section -->

        <div class="step__section">
          <div class="step__section-label h4-title">Общая информация о номерном фонде</div>
          <div class="row">
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Категории номеров</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="stock.category"
                  theme="description"
                  placeholder="Впишите или выберите"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (stock.category = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Спальные места</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="stock.room"
                  theme="description"
                  placeholder="Впишите или выберите"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (stock.room = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Удобства в номерах</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="stock.inRoom"
                  theme="description"
                  placeholder="Впишите или выберите"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (stock.inRoom = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Услуги</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="stock.service"
                  theme="description"
                  placeholder="Впишите или выберите"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (stock.service = v)"
                />
              </ValidationProvider>
            </div>
          </div>
        </div>
        <!--section -->

        <div class="step__section">
          <div class="step__section-label h4-title">Заезд/выезд</div>
          <div class="row">
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Время заезда (от)"
                  placeholder="00:00"
                  :value="stock.timeFromOne"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (stock.timeFromOne = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Время заезда (до)"
                  placeholder="00:00"
                  :value="stock.timeToOne"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (stock.timeToOne = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Время заезда (от)"
                  placeholder="00:00"
                  :value="stock.timeFromTwo"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (stock.timeFromTwo = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Время заезда (до)"
                  placeholder="00:00"
                  :value="stock.timeToTwo"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (stock.timeToTwo = v)"
                />
              </ValidationProvider>
            </div>
          </div>
        </div>
        <!--section -->

        <div class="step__section">
          <div class="step__section-label h4-title">Детальная информация о номерах</div>
          <div class="row">
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Название"
                  placeholder="Название"
                  :value="stock.name"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (stock.name = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-3 col-md-12">
              <div class="ui-group">
                <label for="" class="radio__label">Тип размещения</label>
                <div class="radio__col">
                  <UiCheckbox
                    label="Одноместное"
                    name="type"
                    :value="true"
                    type="radio"
                    @onChange="() => (type = 'Одноместное')"
                  >
                    Одноместное
                  </UiCheckbox>
                  <UiCheckbox
                    label="Двухместное"
                    name="type"
                    :value="false"
                    type="radio"
                    @onChange="() => (stock.type = 'Двухместное')"
                  >
                    Двухместное
                  </UiCheckbox>
                  <UiCheckbox
                    label="Трехместное"
                    name="type"
                    :value="false"
                    type="radio"
                    @onChange="() => (stock.type = 'Трехместное')"
                  >
                    Трехместное
                  </UiCheckbox>
                  <UiCheckbox
                    label="Другое"
                    name="type"
                    :value="false"
                    type="radio"
                    @onChange="() => (stock.type = 'Другое')"
                  >
                    Другое
                  </UiCheckbox>
                </div>
                <div v-if="stock.type === 'Другое'" class="mt-1">
                  <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                    <UiInput
                      theme="description"
                      placeholder="Введите ваш вариант"
                      :value="stock.typeOther"
                      type="text"
                      :error="errors[0]"
                      @onChange="(v) => (stock.typeOther = v)"
                    />
                  </ValidationProvider>
                </div>
              </div>
            </div>
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Цена"
                  placeholder="Сумма (р.)"
                  :value="stock.price"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (stock.price = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-3 col-md-12">
              <label for="" class="radio__label">Дополнительно</label>
              <div class="ui-group">
                <UiInput
                  textarea
                  :value="stock.description"
                  placeholder="Введите текст..."
                  :rows="5"
                  @onChange="(v) => (stock.description = v)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <button
          v-if="stockInformation.length < stockLimited"
          class="step__add-hall c-primary mb-sm-1"
          @click="addStock"
        >
          + Добавить еще один тип номеров
        </button>
        <button v-if="stockInformation.length > 1" class="step__add-hall c-primary" @click="removeStock">
          - Удалить один тип номеров
        </button>
      </div>
    </div>

    <div class="step__cta">
      <UiButton theme="outline" @click="() => $emit('onBack')">Назад</UiButton>

      <UiButton type="submit">Отправить</UiButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiPage',
  data() {
    return {
      error: '',

      description: '',

      // Section 1
      stockVisible: false,
      category: '',
      typePlace: '',
      features: '',
      kitchen: '',
      service: '',
      equipment: '',
      parking: '',
      parkingCount: '',
      style: '',

      // Section 2
      stockLimited: 5,
      stockInformation: [
        {
          id: 1,
          category: '',
          room: '',
          inRoom: '',
          service: '',
          timeFromOne: '',
          timeToOne: '',
          timeFromTwo: '',
          timeToTwo: '',
          name: '',
          price: '',
          type: '',
          typeOther: '',
          description: '',
        },
      ],
    }
  },
  methods: {
    addStock() {
      const stockId = this.stockInformation[this.stockInformation.length - 1].id + 1
      const stockObj = {
        id: stockId,
        category: '',
        room: '',
        inRoom: '',
        service: '',
        timeFromOne: '',
        timeToOne: '',
        timeFromTwo: '',
        timeToTwo: '',
        name: '',
        price: '',
        type: '',
        typeOther: '',
        description: '',
      }

      this.stockInformation.push(stockObj)
    },
    removeStock() {
      this.stockInformation.pop()
    },
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
    gap: 30px;
    &--center {
      justify-content: center;
    }
  }
  &__col {
    display: flex;
    // align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: column;
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
    justify-content: space-between;
    .button {
      min-width: 190px;
    }
  }
}

.step__stock + .step__stock {
  margin-top: 32px;
}

.form {
  position: relative;
  // .ui-group{}
}

@include r($sm) {
  .step {
    &__cta {
      flex-direction: column-reverse;
      gap: 15px;
    }
  }
}
</style>
