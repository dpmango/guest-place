<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 4/5. <span class="c-primary"> номерной фонд</span></h2>

    <client-only>
      <template slot="placeholder">
        <UiLoader :loading="true" theme="block" />
      </template>

      <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
        <UiError :error="error" />

        <!--section -->
        <div class="step__section">
          <div class="col col-12">
            <div class="ui-group">
              <label for="" class="radio__label tac">*Есть ли у Вашей площадки номерной фонд?</label>

              <div class="radio__row radio__row--center">
                <UiCheckbox
                  label="Да"
                  name="stockAvailable"
                  :value="stockAvailable === true"
                  :error="error"
                  type="radio"
                  @onChange="() => (stockAvailable = true)"
                >
                  Да
                </UiCheckbox>
                <UiCheckbox
                  :checked="true"
                  label="Нет"
                  name="stockAvailable"
                  :value="stockAvailable === false"
                  :error="error"
                  type="radio"
                  @onChange="() => (stockAvailable = false)"
                >
                  Нет
                </UiCheckbox>
              </div>
            </div>
          </div>
        </div>

        <!--section -->
        <div v-if="stockAvailable">
          <div class="step__section">
            <div class="step__section-label h4-title">Общая информация о номерном фонде</div>
            <div class="row">
              <div class="col col-6 col-md-12">
                <label for="" class="radio__label">*Категории номеров</label>
                <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                  <UiSelect
                    :value="category"
                    theme="description"
                    placeholder="Впишите или выберите"
                    :error="errors[0]"
                    :options="getSelectValues('roomCategories')"
                    @onSelect="(v) => (category = v)"
                  />
                </ValidationProvider>
              </div>
              <div class="col col-6 col-md-12">
                <label for="" class="radio__label">*Спальные места</label>
                <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                  <UiSelect
                    :value="room"
                    theme="description"
                    placeholder="Впишите или выберите"
                    :error="errors[0]"
                    :options="getSelectValues('roomSleepingPlaces')"
                    @onSelect="(v) => (room = v)"
                  />
                </ValidationProvider>
              </div>
              <div class="col col-6 col-md-12">
                <label for="" class="radio__label">*Удобства в номерах</label>
                <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                  <UiSelect
                    :value="amenities"
                    theme="description"
                    placeholder="Впишите или выберите"
                    :error="errors[0]"
                    :options="getSelectValues('roomAmenities')"
                    @onSelect="(v) => (amenities = v)"
                  />
                </ValidationProvider>
              </div>
              <div class="col col-6 col-md-12">
                <label for="" class="radio__label">*Услуги</label>
                <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                  <UiSelect
                    :value="service"
                    theme="description"
                    placeholder="Впишите или выберите"
                    :error="errors[0]"
                    :options="getSelectValues('roomServices')"
                    @onSelect="(v) => (service = v)"
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
                    :value="checkInTimeBefore"
                    type="text"
                    icon="clock"
                    icon-position="right"
                    :error="errors[0]"
                    @onChange="(v) => (checkInTimeBefore = v)"
                  />
                </ValidationProvider>
              </div>
              <div class="col col-3 col-md-12">
                <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                  <UiInput
                    theme="description"
                    label="Время заезда (до)"
                    placeholder="00:00"
                    :value="checkInTimeFrom"
                    type="text"
                    icon="clock"
                    icon-position="right"
                    :error="errors[0]"
                    @onChange="(v) => (checkInTimeFrom = v)"
                  />
                </ValidationProvider>
              </div>
              <div class="col col-3 col-md-12">
                <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                  <UiInput
                    theme="description"
                    label="Время заезда (от)"
                    placeholder="00:00"
                    :value="checkOutTimeBefore"
                    type="text"
                    icon="clock"
                    icon-position="right"
                    :error="errors[0]"
                    @onChange="(v) => (checkOutTimeBefore = v)"
                  />
                </ValidationProvider>
              </div>
              <div class="col col-3 col-md-12">
                <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                  <UiInput
                    theme="description"
                    label="Время заезда (до)"
                    placeholder="00:00"
                    :value="checkOutTimeFrom"
                    type="text"
                    icon="clock"
                    icon-position="right"
                    :error="errors[0]"
                    @onChange="(v) => (checkOutTimeFrom = v)"
                  />
                </ValidationProvider>
              </div>
            </div>
          </div>
          <!--section -->

          <div v-for="stock in stockList" :key="stock.id" class="step__stock">
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
                        :value="stock.type === 'Одноместное'"
                        type="radio"
                        @onChange="() => (stock.type = 'Одноместное')"
                      >
                        Одноместное
                      </UiCheckbox>
                      <UiCheckbox
                        label="Двухместное"
                        name="type"
                        :value="stock.type === 'Двухместное'"
                        type="radio"
                        @onChange="() => (stock.type = 'Двухместное')"
                      >
                        Двухместное
                      </UiCheckbox>
                      <UiCheckbox
                        label="Трехместное"
                        name="type"
                        :value="stock.type === 'Трехместное'"
                        type="radio"
                        @onChange="() => (stock.type = 'Трехместное')"
                      >
                        Трехместное
                      </UiCheckbox>
                      <UiCheckbox
                        label="Другое"
                        name="type"
                        :value="stock.type === 'Другое'"
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
            <button v-if="stockList.length < stockLimit" class="step__add-hall c-primary mb-sm-1" @click="addStock">
              + Добавить еще один тип номеров
            </button>
            <button v-if="stockList.length > 1" class="step__add-hall c-primary" @click="removeStock">
              - Удалить один тип номеров
            </button>
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
import { mapActions, mapGetters } from 'vuex'
import { selectToApi } from '~/api/helpers'

export default {
  name: 'UiPage',
  data() {
    return {
      error: '',

      stockAvailable: null,

      // Section 1
      category: '',
      room: '',
      amenities: '',
      service: '',

      // Section 2
      checkInTimeBefore: '',
      checkInTimeFrom: '',
      checkOutTimeBefore: '',
      checkOutTimeFrom: '',

      // Section 3
      stockLimit: 5,
      stockList: [
        {
          id: 1,
          name: '',
          price: '',
          type: '',
          typeOther: '',
          description: '',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('place', ['getSavedId']),
    ...mapGetters('dictionary', ['getSelectValues']),
  },
  methods: {
    addStock() {
      const stockId = this.stockList[this.stockList.length - 1].id + 1
      const stockObj = {
        id: stockId,
        name: '',
        price: '',
        type: '',
        typeOther: '',
        description: '',
      }

      this.stockList.push(stockObj)
    },
    removeStock() {
      this.stockList.pop()
    },
    async handleSubmit() {
      // custom validations
      if (this.stockAvailable === null) {
        this.error = 'Выберите вариант ниже'
        return
      }

      if (this.stockAvailable === false) {
        this.error = null
        this.$emit('onNext')
        return
      }

      const isValid = await this.$refs.form.validate()

      this.error = null

      if (!isValid) return

      await this.createPlace({
        step: 'four',
        placeId: this.getSavedId,
        isStepCompleted: true,

        roomCategories: selectToApi(this.category),
        sleepingPlaces: selectToApi(this.room),
        roomAmenities: selectToApi(this.amenities),
        roomServices: selectToApi(this.service),

        checkInTimeBefore: this.checkInTimeBefore,
        checkInTimeFrom: this.checkInTimeFrom,
        checkOutTimeBefore: this.checkOutTimeBefore,
        checkOutTimeFrom: this.checkOutTimeFrom,

        rooms: this.stockList.map((r) => ({
          additionalInformation: r.description,
          allocationType: r.type !== 'Другое' ? r.type : r.typeOther,
          price: r.price,
          title: r.name,
        })),
      })
        .then((_res) => {
          this.error = null
          this.$emit('onNext')

          // this.$router.push('/success/create')
        })
        .catch((err) => {
          this.$toast.global.error({ message: 'Ошибка, проверьте поля' })

          this.error = err.message
        })
    },
    ...mapActions('place', ['createPlace']),
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
