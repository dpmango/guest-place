<template>
  <UiModal name="cardrequest" content-class="mt-1">
    <template #title>свяжитесь <span class="c-primary">со мной</span> </template>
    <template #subtitle
      >С вами свяжется представитель площадки <span class="c-primary">Банкетный зал лофт Форест Холл.</span> <br />
      Вы можете предварительно написать свой вопрос</template
    >

    <template #decor>
      <img src="~/assets/img/modal-help-decor-4.svg" alt="background image" class="modal__decor modal__decor--pc" />
      <img
        src="~/assets/img/modal-help-decor-4--mobile.svg"
        alt="background image"
        class="modal__decor modal__decor--mobile"
      />
    </template>

    <template #content>
      <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="form" @submit.prevent="handleSubmit">
        <UiError :error="error" />

        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
          <UiInput
            :value="name"
            placeholder="Ваше имя"
            type="text"
            theme="request"
            :error="errors[0]"
            @onChange="(v) => (name = v)"
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="tel|required">
          <UiInput
            v-mask="'+7 (###) ###-####'"
            :value="phone"
            placeholder="Ваш номер телефона"
            type="tel"
            theme="request"
            :error="errors[0]"
            @onChange="(v) => (phone = v)"
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
          <UiInput
            textarea
            rows="1"
            :value="comment"
            placeholder="Ваш вопрос"
            type="text"
            theme="request"
            :error="errors[0]"
            @onChange="(v) => (comment = v)"
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
          <UiSelect
            :value="time"
            placeholder="Удобное время для звонка"
            :error="errors[0]"
            theme="request"
            :options="['10:00-12:00', '12:00-14:00', '14:00-18:00']"
            @onSelect="(v) => (time = v)"
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
      name: null,
      phone: null,
      comment: '',
      time: null,
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

      const { name, phone, time, comment } = this

      const dateDjs = djs()
      const [timeStart, timeEnd] = time.split('-')
      const [startHH, startMM] = timeStart.split(':')
      const timeToCall = dateDjs.hour(+startHH).minute(+startMM)

      await this.formCallToMe({
        id: this.modalParams.id,
        message: comment,
        name,
        phoneNumber: phone,
        timeToCall: timeToCall.toISOString(),
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
      this.name = null
      this.phone = null
      this.comment = ''
      this.time = null
    },
    ...mapActions('feedback', ['formCallToMe']),
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
