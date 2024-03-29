<template>
  <div class="container">
    <div class="request">
      <p class="h5-title request__text">
        У Вас намечается <span class="c-primary">банкет?</span> Отлично! Приглашаем отметить
        <span class="c-primary">ваше торжество</span> в нашем загородном клубе на берегу
        <br />
        Москва-реки.
        <br />
        Мы уверены, что Вам понравится.
        <br /><br />
        Загородный клуб — это особая атмосфера, со своей энергетикойи своим миром. Попадая на территорию комплекса,
        первое,что бросается в глаза, это единый стиль в котором выдержана вся инфраструктура. Светлые здания,
        белоснежная ротонда, ухоженная набережная, река и живописные пейзажи вокруг создают визуальное ощущение
        нарисованной акварелью картины, в которой нет ничего лишнего.
        <br /><br />
        Для гостей клуба действует ресторанная кухня, бар и караоке. На территории предусмотрена охраняемая парковка и
        детская площадка. Инфраструктура клуба позволяет проводить различные мероприятия.
        <br /><br />
        Наша основная гордость — блюда, приготовленные на настоящем огне.
        <br /><br />
        Рады Вам в любое время суток и в любое время года!
      </p>

      <ValidationObserver
        ref="form"
        v-slot="{ invalid }"
        tag="form"
        class="request__form mt-3 mt-md-2"
        @submit.prevent="handleSubmit"
      >
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
          <UiInput
            theme="description"
            label=""
            placeholder="Введите Ваше имя"
            :value="name"
            type="text"
            :error="errors[0]"
            @onChange="(v) => (name = v)"
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="tel|required">
          <UiInput
            v-mask="'+7 (###) ###-####'"
            theme="description"
            label=""
            placeholder="Введите Ваш номер телефона"
            :value="phone"
            type="tel"
            :error="errors[0]"
            @onChange="(v) => (phone = v)"
          />
        </ValidationProvider>
        <UiButton class="request__button">Оставить заявку</UiButton>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  date() {
    return {
      name: null,
      phone: null,
    }
  },
  methods: {
    async handleSubmit() {
      this.error = null
      const isValid = await this.$refs.form.validate()
      if (!isValid) {
        return
      }
      const { name, phone } = this

      await this.formQuestion({
        id: this.$route.params.id,
        name,
        phoneNumber: phone,
      })
        .then((_res) => {
          this.$toast.global.success({ message: 'Запрос отправлен' })
          this.resetForm()
        })
        .catch((err) => {
          this.error = err.message
        })
    },
    resetForm() {
      this.name = null
      this.phone = null
    },
    ...mapActions('feedback', ['formQuestion']),
  },
}
</script>

<style lang="scss" scoped>
.request {
  padding: 80px 95px 80px 100px;
  background-color: $colorLightBlueUltra;
  border-radius: 40px;
  &__form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px 30px;
    .ui-group {
      flex: 1;
      width: 100%;
    }
  }
}

@include r($lg) {
  .request {
    &__button {
      width: 100%;
    }
  }
}
@include r($md) {
  .request {
    padding: 40px 15px;
    &__form {
      flex-direction: column;
    }
  }
}
</style>
