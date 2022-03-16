<template>
  <AuthWrapper>
    <template #title>Авторизация</template>
    <template #description>Чтобы войти в свой акканут, заполните поля ниже.</template>

    <template #image>
      <img src="~/assets/img/auth-login-illustration.svg" alt="cover illustration" />
    </template>

    <template #form>
      <ValidationObserver ref="form" v-slot="{ invalid }" tag="form" class="login__form" @submit.prevent="handleSubmit">
        <UiError :error="error" />

        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="email|required">
          <UiInput
            :value="email"
            theme="dynamic"
            icon="user"
            icon-position="left"
            label="Почтовый адрес или номер телефона"
            type="email"
            :error="errors[0]"
            @onChange="(v) => (email = v)"
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" class="ui-group" rules="required">
          <UiInput
            :value="password"
            theme="dynamic"
            icon="key"
            icon-position="left"
            label="Пароль"
            type="password"
            :error="errors[0]"
            @onChange="(v) => (password = v)"
          />
        </ValidationProvider>

        <div class="cta-row">
          <UiCheckbox name="authRemember" :value="remember" @onChange="(v) => (remember = v)">
            Запомнить меня
          </UiCheckbox>

          <NuxtLink to="/auth/recover" class="cta-row__link">Забыли свой пароль?</NuxtLink>
        </div>

        <div class="buttons">
          <UiButton type="submit" block>Войти</UiButton>
          <NuxtLink to="/auth/signup">
            <UiButton theme="outline" block>Регистрация</UiButton>
          </NuxtLink>
        </div>
      </ValidationObserver>

      <AuthSocialLogin />
    </template>
  </AuthWrapper>
</template>

<script>
import { mapActions } from 'vuex'
import { rebuildSocket } from '~/helpers/RebuildSocket'

export default {
  data() {
    return {
      email: null,
      password: null,
      remember: false,
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

      const { email, password } = this
      await this.login({ emailOrPhoneNumber: email, password })
        .then((_res) => {
          this.error = null
          rebuildSocket(this)
          this.$router.push('/profile')
        })
        .catch((err) => {
          const { data, code } = err

          if (data && code === 401) {
            Object.keys(data).forEach((key) => {
              this.error = data[key]
            })
          }
        })
    },
    ...mapActions('auth', ['login']),
  },
}
</script>

<style lang="scss" scoped>
.login__form {
  max-width: 445px;
}

::v-deep .socAuth {
  max-width: 445px;
}

.cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  &__link {
    font-size: 14px;
    transition: color 0.25s $ease;
    color: $colorPrimary;
    &:hover {
      color: $colorPrimaryHover;
    }
  }
}

.buttons {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
</style>
