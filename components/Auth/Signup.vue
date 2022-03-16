<template>
  <AuthWrapper>
    <template #title>Регистрация</template>
    <template #description>Чтобы cоздать акканут, заполните поля ниже.</template>

    <template #image>
      <img src="~/assets/img/auth-login-illustration.svg" alt="cover illustration" />
    </template>

    <template #form>
      <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="login__form" @submit.prevent="handleSubmit">
        <UiError class="mb-1" :error="error" />

        <div class="row">
          <div class="col col-6">
            <ValidationProvider v-slot="{ errors }" rules="required">
              <UiInput
                :value="firstName"
                theme="dynamic"
                name="firstName"
                label="Имя"
                type="text"
                :error="errors[0]"
                @onChange="(v) => (firstName = v)"
              />
            </ValidationProvider>
          </div>

          <div class="col col-6">
            <UiInput
              :value="lastName"
              theme="dynamic"
              name="lastName"
              label="Фамилия"
              type="text"
              @onChange="(v) => (lastName = v)"
            />
          </div>

          <div class="col col-6">
            <ValidationProvider v-slot="{ errors }" rules="tel|required">
              <UiInput
                v-mask="'+7 (###) ###-####'"
                :value="phone"
                theme="dynamic"
                name="phone"
                label="Номер телефона"
                type="tel"
                :error="errors[0]"
                @onChange="(v) => (phone = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-6">
            <ValidationProvider v-slot="{ errors }" rules="email|required">
              <UiInput
                :value="email"
                theme="dynamic"
                name="email"
                label="Email"
                type="email"
                :error="errors[0]"
                @onChange="(v) => (email = v)"
              />
            </ValidationProvider>
          </div>
          <div class="col col-12">
            <ValidationProvider v-slot="{ errors }" rules="required|min:8" vid="password">
              <UiInput
                :value="password"
                theme="dynamic"
                name="password"
                label="Создайте пароль"
                type="password"
                :error="errors[0]"
                @onChange="(v) => (password = v)"
              />
            </ValidationProvider>
          </div>
        </div>

        <div class="buttons">
          <UiButton type="submit" block>Зарегистрироваться</UiButton>
          <NuxtLink to="/auth/login">
            <UiButton theme="outline" block>Вход</UiButton>
          </NuxtLink>
        </div>
      </ValidationObserver>

      <div class="socialLogin">
        <AuthSocialLogin />
      </div>
    </template>
  </AuthWrapper>
</template>

<script>
import { mapActions } from 'vuex'
import { rebuildSocket } from '~/helpers/RebuildSocket'

export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      password: null,
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
      const { firstName, lastName, phone, email, password } = this
      await this.signup({
        firstName,
        lastName,
        email,
        phoneNumber: phone,
        password,
      })
        .then((_res) => {
          // this.verifyPost()
          this.error = null
          this.$toast.global.success({ message: `Успешная регистрация ${email}` })
          this.$router.push('/success/account')
        })
        .catch((err) => {
          const { data, message } = err

          this.error = message
        })
    },
    ...mapActions('auth', ['signup', 'verifyPost']),
  },
}
</script>

<style lang="scss" scoped>
.login__form {
  max-width: 540px;
}

::v-deep .socAuth {
  max-width: 540px;
}

.buttons {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
</style>
