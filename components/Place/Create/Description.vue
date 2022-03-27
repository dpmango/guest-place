<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 2/5. <span class="c-primary"> описание</span></h2>

    <client-only>
      <template slot="placeholder">
        <UiLoader :loading="true" theme="block" />
      </template>

      <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
        <UiError :error="error" />

        <!--section -->
        <div class="step__section">
          <div class="step__section-label h4-title">Основные характеристики</div>
          <div class="row">
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Категория</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="category"
                  theme="description"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (category = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Тип места</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="typePlace"
                  theme="description"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (typePlace = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Особенности</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="features"
                  theme="description"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (features = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Услуги</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="service"
                  theme="description"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (service = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Оборудование в наличии</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="equipment"
                  theme="description"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (equipment = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <label for="" class="radio__label">*Кухня</label>
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="kitchen"
                  theme="description"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (kitchen = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <div class="ui-group">
                <label for="" class="radio__label">*Парковка</label>
                <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                  <UiSelect
                    :value="parking"
                    theme="description"
                    placeholder="Выберите варианты"
                    :error="errors[0]"
                    :options="['option 1', 'option 2', 'option 3']"
                    @onSelect="(v) => (parking = v)"
                  />
                </ValidationProvider>
              </div>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group">
                <UiInput
                  theme="description"
                  label="Количество парковочных мест"
                  placeholder="Например: 11"
                  :value="parkingCount"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (parkingCount = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <div class="ui-group">
                <label for="" class="radio__label">Стиль интерьера</label>
                <ValidationProvider v-slot="{ errors }" class="ui-group">
                  <UiSelect
                    :value="style"
                    theme="description"
                    placeholder="Выберите варианты"
                    :error="errors[0]"
                    :options="['option 1', 'option 2', 'option 3']"
                    @onSelect="(v) => (style = v)"
                  />
                </ValidationProvider>
              </div>
            </div>
          </div>
        </div>

        <!--section -->
        <div class="step__section">
          <div class="step__section-label h4-title">Информация о залах</div>
          <div v-for="hall in hallInformation" :key="hall.id" class="row">
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  :label="'*Название зала №' + hall.id"
                  placeholder="Название"
                  :value="hall.hallName"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (hall.hallName = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Площадь зала, кв. м."
                  placeholder="Площадь"
                  :value="hall.areaHall"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (hall.areaHall = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Кол-во мест/Банкет"
                  placeholder="Количество"
                  :value="hall.countPlaceBanquet"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (hall.countPlaceBanquet = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Кол-во мест/Фуршет"
                  placeholder="Количество"
                  :value="hall.countPlaceBuffet"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (hall.countPlaceBuffet = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Кол-во мест/рассадка «Театр»"
                  placeholder="Количество"
                  :value="hall.countPlaceTheatre"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (hall.countPlaceTheatre = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-3 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiInput
                  theme="description"
                  label="Кол-во мест/Еще"
                  placeholder="Количество"
                  :value="hall.countPlaceYet"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (hall.countPlaceYet = v)"
                />
              </ValidationProvider>
            </div>
          </div>
          <div class="row mt-1">
            <button v-if="hallInformation.length < hallLimited" class="step__add-hall c-primary" @click="addHall">
              + Добавить зал
            </button>
            <button v-if="hallInformation.length > 1" class="step__add-hall c-primary" @click="removeHall">
              - Удалить зал
            </button>
          </div>
        </div>

        <!--section -->
        <div class="step__section">
          <div class="step__section-label h4-title">Описание площадки</div>

          <div class="ui-group">
            <UiInput
              textarea
              :value="description"
              placeholder="Введите текст..."
              :rows="5"
              @onChange="(v) => (description = v)"
            />
          </div>
        </div>

        <div class="step__cta">
          <UiButton theme="outline" @click="() => $emit('onNext', 2)">Назад</UiButton>

          <UiButton type="submit">Далее</UiButton>
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

      description: '',

      // Section 1
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
      hallLimited: 5,
      hallInformation: [
        {
          id: 1,
          hallName: '',
          areaHall: '',
          countPlaceBanquet: '',
          countPlaceBuffet: '',
          countPlaceTheatre: '',
          countPlaceYet: '',
        },
      ],
    }
  },
  methods: {
    addHall() {
      const hallId = this.hallInformation[this.hallInformation.length - 1].id + 1
      const hallObj = {
        id: hallId,
        hallName: '',
        areaHall: '',
        countPlaceBanquet: '',
        countPlaceBuffet: '',
        countPlaceTheatre: '',
        countPlaceYet: '',
      }

      this.hallInformation.push(hallObj)
    },
    removeHall() {
      this.hallInformation.pop()
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
