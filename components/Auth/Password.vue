<template>
  <AuthWrapper>
    <template #title>Задайте пароль</template>
    <template #description> Чтобы создать аккаунт, введите пароль. </template>

    <template #image>
      <img src="~/assets/img/auth-login-illustration.svg" alt="cover illustration" />
    </template>

    <template #form>
      <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="login__form" @submit.prevent="handleSubmit">
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

      await this.passwordSet({
        ...{ password: this.passwordConfirm },
        ...this.query, // user id
      })
        .then((res) => {
          this.error = null
          this.$toast.global.success({ message: 'Пароль успешно установлен' })
          this.$router.push('/success/account')
        })
        .catch((err) => {
          const { data, message } = err

          this.error = message
        })
    },
    ...mapActions('auth', ['passwordSet']),
  },
}
</script>

<style lang="scss" scoped>
.login__form {
  max-width: 445px;
}
</style>
