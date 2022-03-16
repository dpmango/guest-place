<template>
  <UiModal name="expert" content-class="mt-1">
    <template #title>помощь <span class="c-primary">эксперта</span> </template>

    <template #decor>
      <img src="~/assets/img/modal-help-decor-2.svg" alt="background image" class="modal__decor modal__decor--pc" />
      <img
        src="~/assets/img/modal-help-decor-2--mobile.svg"
        alt="background image"
        class="modal__decor modal__decor--mobile"
      />
    </template>

    <template #content>
      <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
        <UiError :error="error" />

        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
          <UiInput :value="name" placeholder="Ваше имя" type="text" :error="errors[0]" @onChange="(v) => (name = v)" />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="tel|required">
          <UiInput
            v-mask="'+7 (###) ###-####'"
            :value="phone"
            placeholder="Ваш номер телефона"
            type="tel"
            :error="errors[0]"
            @onChange="(v) => (phone = v)"
          />
        </ValidationProvider>
        <span class="ui-group">
          <UiInput
            :value="comment"
            placeholder="Ваш комментарий (необязательно)"
            type="text"
            @onChange="(v) => (comment = v)"
          />
        </span>
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
          <UiSelect
            :value="time"
            theme="polymorph"
            placeholder="Удобное время для звонка"
            :error="errors[0]"
            :options="['10:00-12:00', '12:00-14:00', '14:00-18:00']"
            @onSelect="(v) => (time = v)"
          />
        </ValidationProvider>

        <div class="row">
          <div class="col col-6 col-md-12">
            <UiSelect
              :value="date"
              theme="polymorph"
              placeholder="Удобное время для звонка"
              :options="['10:00-12:00', '12:00-14:00', '14:00-18:00']"
              @onSelect="(v) => (date = v)"
            />
          </div>
          <div class="col col-6 col-md-12">
            <UiInput :value="guests" placeholder="Кол-во гостей" type="text" @onChange="(v) => (guests = v)" />
          </div>
        </div>

        <div class="mt-2 tac mt-md-1 modal__button">
          <UiButton type="submit">Перейти к оплате</UiButton>
        </div>
      </ValidationObserver>
    </template>
  </UiModal>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      phone: null,
      comment: null,
      time: null,
      date: null,
      guests: null,
      error: null,
    }
  },
  computed: {},
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) {
        return
      }

      const { name, phone } = this
      // await this.login({ login: email, password })
      //   .then((_res) => {})
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
.modal {
  &__decor {
    &--mobile {
      display: none;
    }
  }
}
.form {
  margin-top: 10px;
  max-width: 345px;
  margin-left: auto;
  margin-right: auto;
  .ui-group {
    display: block;
    margin-bottom: 20px;
  }
}

@include r($md) {
  .modal {
    &__decor {
      &--pc {
        display: none;
      }
      &--mobile {
        display: block;
      }
    }
    &__button {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
  .row {
    margin: 0;
  }
  .col {
    margin-top: 20px;
    width: 100%;
    padding: 0;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>

<style lang="scss">
@include r($md) {
  .modal {
    .input__input {
      height: 38px;
      input {
        padding: 10px 25px;
        height: 38px;
        line-height: 1.35;
      }
    }
  }
}
</style>
