<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 1/5. <span class="c-primary"> общая информация</span></h2>

    <client-only>
      <template slot="placeholder">
        <UiLoader :loading="true" theme="block" />
      </template>

      <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
        <UiError :error="error" />

        <!--section -->
        <div class="step__section">
          <div class="step__section-label h4-title">Условия предоставления услуг</div>

          <div class="step__agree-wrapper">
            <ValidationProvider v-slot="{ errors }" :rules="{ required: { allowFalse: false } }">
              <UiCheckbox name="authRemember" :error="errors[0]" :value="agree" @onChange="(v) => (agree = v)">
                *Я принимаю&nbsp;<a href="#" target="_blank"> условия предоставления услуг.</a>
              </UiCheckbox>
            </ValidationProvider>
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
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
                <UiSelect
                  :value="city"
                  theme="description"
                  label="*Ваш город"
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
                  label="*Номера телефона"
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
                    :value="onlineView === true"
                    type="radio"
                    @onChange="() => (onlineView = true)"
                  >
                    Есть
                  </UiCheckbox>
                  <UiCheckbox
                    label="Нет"
                    name="onlineView"
                    :value="onlineView === false"
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
              <ValidationProvider v-slot="{ touched, errors }" class="ui-group" rules="required">
                <div
                  v-click-outside="() => (showSuggestions = false)"
                  class="suggestions"
                  :class="[suggestions && suggestions.length && showSuggestions && 'is-open']"
                >
                  <UiInput
                    label="*Адрес площадки"
                    theme="description"
                    placeholder="Город, улица, номер здания"
                    :value="address"
                    type="text"
                    :error="errors[0] || (touched && !addressSelected && 'Выберите адрес из подсказки')"
                    @click="() => (showSuggestions = true)"
                    @onChange="(v) => handleAddressChange(v)"
                  />
                  <div class="suggestions__dropdown">
                    <div
                      v-for="(suggestion, idx) in suggestions"
                      :key="idx"
                      class="suggestions__item"
                      @click="() => selectSuggestion(suggestion)"
                    >
                      {{ suggestion.unrestricted_value }}
                    </div>
                  </div>
                </div>
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="">
                <UiSelect
                  :value="region"
                  theme="description"
                  label="Район"
                  placeholder="Впишите или выберите"
                  :error="errors[0]"
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (region = v)"
                />
              </ValidationProvider>
            </div>
            <div class="col col-6 col-md-12">
              <ValidationProvider v-slot="{ errors }" class="ui-group" rules="">
                <UiSelect
                  :value="metro"
                  theme="description"
                  label="Метро поблизости (если есть)"
                  placeholder="Впишите или выберите"
                  :error="errors[0]"
                  multiple
                  :options="['option 1', 'option 2', 'option 3']"
                  @onSelect="(v) => (metro = v)"
                />
              </ValidationProvider>
            </div>
          </div>
        </div>

        <div class="step__cta">
          <UiButton type="submit">Далее</UiButton>
        </div>
      </ValidationObserver>
    </client-only>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import debounce from 'lodash/debounce'
import ClickOutside from 'vue-click-outside'
import { dadataSuggestion, dadataGeocoder } from '~/api/dadata'
import { selectToApi } from '~/api/helpers'

export default {
  name: 'UiPage',
  directives: {
    ClickOutside,
  },
  data() {
    return {
      error: '',
      suggestions: [],
      showSuggestions: false,
      addressData: {},
      // section 1
      agree: false,
      name: '',
      city: '',
      time: '',
      phone: '',
      onlineView: true,

      // section 2
      address: '',
      region: '',
      metro: '',
    }
  },
  computed: {
    addressSelected() {
      return Object.keys(this.addressData).length > 0
    },
  },
  created() {
    this.requestDadataWithDebounce = debounce(this.handleSuggestion, 300)
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) return

      await this.createPlace({
        step: 'one',
        isStepCompleted: true,
        onlineDisplay: this.onlineView ? 'Y' : 'N',
        phoneNumbers: this.phone,
        title: this.name,
        workingHours: this.time,
        address: {
          // majority comes from api, some values are changable
          ...this.addressData,
          cityName: this.city,
          cityDistrict: this.region,
          metroStationName: this.metro,
        },
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
    handleAddressChange(val) {
      this.address = val

      if (val && val.trim().length >= 3) {
        this.requestDadataWithDebounce(val)
      }
    },
    async handleSuggestion(val) {
      const res = await dadataSuggestion({ query: val }, this.$config.dadataKey)

      this.suggestions = res.suggestions
      this.showSuggestions = true
    },
    selectSuggestion(suggestion) {
      const { data } = suggestion

      this.address = suggestion.unrestricted_value
      this.addressData = {
        bounds: {
          latitude: data.geo_lat,
          longitude: data.geo_lon,
        },
        cityArea: data.city_area,
        cityDistrict: data.city_district,
        cityName: data.city || data.settlement,
        cityType: data.city_type_full || data.settlement_type_full,
        houseNumber: data.house,
        metroStationName: data.metro,
        street: data.street_with_type,
      }

      this.city = data.city || data.settlement
      this.region = data.city_district
      this.metro = data.metro

      this.showSuggestions = false
    },
    ...mapActions('place', ['createPlace']),
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

.suggestions {
  position: relative;

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 2;
    max-height: 220px;
    overflow-y: auto;
    background: white;
    border-radius: 0 0 6px 6px;
    opacity: 0;
    cursor: pointer;
    box-shadow: 0px 4px 15px rgba(105, 78, 75, 0.14);
    pointer-events: none;
    transition: opacity 0.25s $ease;
  }
  &__item {
    padding: 14px 20px;
    color: $fontColor;
    font-family: $baseFont;
    font-size: 14px;
    transition: color 0.25s $ease, background 0.25s $ease;
    &:hover {
      background: #ecf4fd;
      color: $fontColor;
    }
  }
  &.is-open {
    ::v-deep input {
      border-radius: 30px 30px 0 0;
    }

    .suggestions__dropdown {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>
