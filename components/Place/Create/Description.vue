<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 2/5. <span class="c-primary"> описание</span></h2>

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Основные характеристики</div>
      <div class="row">
        <div class="col col-6 col-md-12">
          <label for="" class="radio__label">Тип места</label>
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
          <label for="" class="radio__label">Особенности</label>
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
          <label for="" class="radio__label">Кухня</label>
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
          <label for="" class="radio__label">Услуги</label>
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
          <label for="" class="radio__label">Оборудование</label>
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
        <div class="col col-3 col-md-6 col-sm-12">
          <div class="ui-group">
            <label for="" class="radio__label">Парковка</label>
            <div class="radio__row">
              <UiCheckbox
                label="Есть"
                name="parking"
                :checked="true"
                :value="true"
                type="radio"
                @onChange="() => (parking = true)"
              >
                Есть
              </UiCheckbox>
              <UiCheckbox label="Нет" name="parking" :value="false" type="radio" @onChange="() => (parking = false)">
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
              placeholder="Количество мест"
              :value="parkingCount"
              type="text"
              :error="errors[0]"
              :disabled="!parking"
              @onChange="(v) => (parkingCount = v)"
            />
          </ValidationProvider>
        </div>
      </div>
    </div>

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Информация о залах</div>
      <div class="row">
        <div class="col col-6 col-md-12">
          <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
            <UiInput
              theme="description"
              label="*Название зала №1"
              placeholder="Название"
              :value="hallName"
              type="text"
              :error="errors[0]"
              @onChange="(v) => (hallName = v)"
            />
          </ValidationProvider>
        </div>
        <div class="col col-6 col-md-12">
          <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
            <UiInput
              theme="description"
              label="Площадь зала, кв. м."
              placeholder="Площадь"
              :value="areaHall"
              type="text"
              :error="errors[0]"
              @onChange="(v) => (areaHall = v)"
            />
          </ValidationProvider>
        </div>
        <div class="col col-3 col-md-12">
          <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
            <UiInput
              theme="description"
              label="Кол-во мест/Банкет"
              placeholder="Количество"
              :value="countPlaceBanquet"
              type="text"
              :error="errors[0]"
              @onChange="(v) => (countPlaceBanquet = v)"
            />
          </ValidationProvider>
        </div>
        <div class="col col-3 col-md-12">
          <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
            <UiInput
              theme="description"
              label="Кол-во мест/Фуршет"
              placeholder="Количество"
              :value="countPlaceBuffet"
              type="text"
              :error="errors[0]"
              @onChange="(v) => (countPlaceBuffet = v)"
            />
          </ValidationProvider>
        </div>
        <div class="col col-3 col-md-12">
          <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
            <UiInput
              theme="description"
              label="Кол-во мест/рассадка «Театр»"
              placeholder="Количество"
              :value="countPlaceTheatre"
              type="text"
              :error="errors[0]"
              @onChange="(v) => (countPlaceTheatre = v)"
            />
          </ValidationProvider>
        </div>
        <div class="col col-3 col-md-12">
          <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
            <UiInput
              theme="description"
              label="Кол-во мест/Еще"
              placeholder="Количество"
              :value="countPlaceYet"
              type="text"
              :error="errors[0]"
              @onChange="(v) => (countPlaceYet = v)"
            />
          </ValidationProvider>
        </div>
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
      typePlace: '',
      features: '',
      kitchen: '',
      service: '',
      equipment: '',
      parking: true,
      parkingCount: '',

      // Section 2
      hallName: '',
      areaHall: '',
      countPlaceBanquet: '',
      countPlaceBuffet: '',
      countPlaceTheatre: '',
      countPlaceYet: '',
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
