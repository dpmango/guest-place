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
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="category"
                  theme="description"
                  label="*Категория"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="getSelectValues('categories')"
                  @onSelect="(v) => (category = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="typePlace"
                  theme="description"
                  label="*Тип места"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="getSelectValues('placeTypes')"
                  @onSelect="(v) => (typePlace = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="features"
                  theme="description"
                  label="*Особенности"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="getSelectValues('features')"
                  @onSelect="(v) => (features = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="service"
                  theme="description"
                  label="*Услуги"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="getSelectValues('services')"
                  @onSelect="(v) => (service = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="equipment"
                  theme="description"
                  label="*Оборудование в наличии"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="getSelectValues('equipments')"
                  @onSelect="(v) => (equipment = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="kitchen"
                  theme="description"
                  label="*Кухня"
                  placeholder="Выберите варианты"
                  :error="errors[0]"
                  :options="getSelectValues('cuisines')"
                  @onSelect="(v) => (kitchen = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <div class="ui-group">
                <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                  <UiSelect
                    :value="parking"
                    theme="description"
                    label="*Парковка"
                    placeholder="Выберите варианты"
                    :error="errors[0]"
                    :options="['Бесплатная', 'Платная', 'Отсутствует']"
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
                <ValidationProvider v-slot="{ errors }" class="ui-group">
                  <UiSelect
                    :value="style"
                    theme="description"
                    label="Стиль интерьера"
                    placeholder="Выберите варианты"
                    :error="errors[0]"
                    :options="getSelectValues('interiors')"
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
          <div v-for="hall in hallList" :key="hall.id" class="row">
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="">
                <UiInput
                  theme="description"
                  :label="'Название зала №' + hall.id"
                  placeholder="Название"
                  :value="hall.hallName"
                  type="text"
                  :error="errors[0]"
                  @onChange="(v) => (hall.hallName = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="">
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
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="">
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
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="">
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
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="">
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
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="">
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
            <button v-if="hallList.length < hallLimit" type="button" class="step__add-hall c-primary" @click="addHall">
              + Добавить зал
            </button>
            <button v-if="hallList.length > 1" type="button" class="step__add-hall c-primary" @click="removeHall">
              - Удалить зал
            </button>
          </div>
        </div>

        <!--section -->
        <div class="step__section">
          <div class="step__section-label h4-title">*Описание площадки</div>

          <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
            <UiInput
              textarea
              :value="description"
              placeholder="Введите текст..."
              :rows="5"
              :error="errors[0]"
              @onChange="(v) => (description = v)"
            />
          </ValidationProvider>
        </div>

        <div class="step__cta">
          <UiButton theme="outline" @click="() => $emit('onBack')">Назад</UiButton>

          <UiButton type="submit">Далее</UiButton>
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
      hallLimit: 5,
      hallList: [
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

      // Section 3
      description: '',
    }
  },
  computed: {
    ...mapGetters('place', ['getSavedId']),
    ...mapGetters('dictionary', ['getSelectValues']),
  },
  methods: {
    addHall() {
      const hallId = this.hallList[this.hallList.length - 1].id + 1
      const hallObj = {
        id: hallId,
        hallName: '',
        areaHall: '',
        countPlaceBanquet: '',
        countPlaceBuffet: '',
        countPlaceTheatre: '',
        countPlaceYet: '',
      }

      this.hallList.push(hallObj)
    },
    removeHall() {
      this.hallList.pop()
    },
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) return

      await this.createPlace({
        step: 'two',
        placeId: this.getSavedId,
        isStepCompleted: true,
        categories: selectToApi(this.category),
        cuisines: selectToApi(this.kitchen),
        equipments: selectToApi(this.equipment),
        features: selectToApi(this.features),
        interiorStyle: selectToApi(this.style),
        placeTypes: selectToApi(this.typePlace),
        services: selectToApi(this.service),
        halls: this.hallList.map((h) => ({
          area: h.areaHall,
          banquetNumberOfSeats: h.countPlaceBanquet,
          buffetNumberOfSeats: h.countPlaceBuffet,
          seatingTheaterNumberOfSeats: h.countPlaceTheatre,
          moreNumberOfSeats: h.countPlaceYet,
          title: h.hallName,
        })),

        parking: selectToApi(this.parking),
        parkingSpace: this.parkingCount,
        placeDescription: this.description,
      })
        .then((_res) => {
          this.error = null
          this.$emit('onNext')
        })
        .catch((err) => {
          const { data, code } = err

          this.$toast.global.error({ message: 'Ошибка, проверьте поля' })

          if (data && code === 401) {
            // Object.keys(data).forEach((key) => {
            //   this.error = data[key]
            // })
          }
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
