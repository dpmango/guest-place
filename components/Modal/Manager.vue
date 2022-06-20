<template>
  <UiModal name="manager" content-class="mt-1">
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
            type="number"
            theme="request"
            :error="errors[0]"
            @onChange="(v) => (count = v)"
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
          <UiInput
            textarea
            rows="1"
            :value="comment"
            placeholder="Ваше сообщение* "
            type="text"
            theme="request"
            :error="errors[0]"
            @onChange="(v) => (comment = v)"
          />
        </ValidationProvider>
        <div class="mt-2 tac mt-md-1 modal__button">
          <UiButton type="submit">Отправить</UiButton>
        </div>
      </ValidationObserver>
    </template>
  </UiModal>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { djs } from '~/helpers/Date'

export default {
  data() {
    return {
      count: null,
      date: null,
      comment: '',
      error: null,
    }
  },
  computed: {
    ...mapState('ui', ['modalParams']),
  },
  methods: {
    async handleSubmit() {
      this.error = null
      const isValid = await this.$refs.form.validate()
      if (!isValid) {
        return
      }

      const { count, date, comment } = this

      const dateDjs = djs(date).toISOString()

      await this.formManager({
        id: this.modalParams.id,
        message: comment,
        guestNumber: count,
        date: dateDjs,
      })
        .then((_res) => {
          this.$toast.global.success({ message: 'Запрос отправлен' })
          this.resetForm()
          this.resetModals()
        })
        .catch((err) => {
          this.error = err.message
        })
    },
    resetForm() {
      this.count = null
      this.date = null
      this.comment = ''
    },
    ...mapActions('feedback', ['formManager']),
    ...mapMutations('ui', ['resetModals']),
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
