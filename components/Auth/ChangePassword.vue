<template>
  <AuthWrapper>
    <template #title>Смена пароля</template>
    <template #description> Чтобы войти в свой акканут, заполните поля ниже. </template>

    <template #image>
      <img src="~/assets/img/auth-login-illustration.svg" alt="cover illustration" />
    </template>

    <template #form>
      <ValidationObserver
        ref="form"
        v-slot="{ invalid }"
        tag="form"
        class="login__form mt-md-2"
        @submit.prevent="handleSubmit"
      >
        <UiError class="mb-1" :error="error" />

        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required|min:8" vid="password">
          <UiInput
            :value="password"
            theme="dynamic"
            name="password"
            label="Введите новый пароль"
            type="password"
            :error="errors[0]"
            @onChange="(v) => (password = v)"
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required|confirmed:password">
          <UiInput
            :value="passwordConfirm"
            theme="dynamic"
            name="password"
            label="Подтвердите пароль"
            type="password"
            :error="errors[0]"
            @onChange="(v) => (passwordConfirm = v)"
          />
        </ValidationProvider>

        <UiButton class="mt-2" type="submit" block>Сменить пароль</UiButton>
      </ValidationObserver>
    </template>
  </AuthWrapper>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      password: null,
      passwordConfirm: null,
      query: null,
      error: null,
    }
  },
  computed: {},
  created() {
    // store in state is much safer
    this.query = this.$route.query
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) {
        return
      }

      await this.passwordChange({
        ...{ newPassword: this.passwordConfirm },
        ...this.query,
      })
        .then((res) => {
          this.error = null
          this.$toast.global.success({ message: 'Пароль успешно изменен' })
          this.$router.push('/success/password')
        })
        .catch((err) => {
          const { data, message } = err

          this.error = message
        })
    },
    ...mapActions('auth', ['passwordChange']),
  },
}
</script>

<style lang="scss" scoped>
.login__form {
  max-width: 445px;
}
</style>
