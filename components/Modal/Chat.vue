<template>
  <UiModal name="chat" content-class="mt-1">
    <template #title>Сообщение для менеджера</template>
    <template #subtitleH3>банкетного зала Форест Холл</template>
    <template #subtitle>обычно отвечает в течение получаса</template>
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
        <div class="request__row">
          <div class="request__input">
            <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
              <UiDatePicker :value="date" :error="errors[0]" @onChange="(v) => (date = v)" />
            </ValidationProvider>
          </div>
        </div>
        <UiError :error="error" />
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
          <UiInput
            :value="count"
            placeholder="Количество гостей"
            type="text"
            :error="errors[0]"
            @onChange="(v) => (count = v)"
          />
        </ValidationProvider>
        <span class="ui-group">
          <UiInput :value="comment" placeholder="Ваше сообщение* " type="text" @onChange="(v) => (comment = v)" />
        </span>
        <div class="mt-2 tac mt-md-1 modal__button">
          <UiButton type="submit">Отправить</UiButton>
        </div>
      </ValidationObserver>
    </template>
  </UiModal>
</template>

<script>
export default {
  data() {
    return {
      count: null,
      date: null,
      comment: null,
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
