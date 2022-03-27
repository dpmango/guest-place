<template>
  <div class="verification">
    <div class="h2-title">Подтверждение email</div>
    <div class="verification__status">
      <div v-if="verified" class="verification__status-text">
        Email подтвержден, перенаправляю на главную страницу...
      </div>
      <template v-else-if="error">
        <div class="verification__status-text verification__status-text--error">{{ error }}</div>
        <NuxtLink to="/">
          <UiButton class="mt-2"> Вернуться на главную </UiButton>
        </NuxtLink>
      </template>
      <template v-else>
        <UiLoader :loading="true" theme="block" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      query: null,
      verified: false,
      error: null,
    }
  },
  computed: {},
  created() {
    // store in state is much safer
    this.query = this.$route.query
  },
  mounted() {
    this.verifyEmail()
  },
  methods: {
    async verifyEmail() {
      await this.verifyGet(this.query)
        .then((res) => {
          this.error = null
          this.verified = true
          this.$toast.global.success({ message: 'Email успешно подтвержден. Задайте пароль для аккаунта' })
          setTimeout(() => {
            this.$router.push(`/auth/password?userId=${res.id}&passwordToken=${this.query.passwordToken}`)
          }, 800)
        })
        .catch((err) => {
          const { data, message } = err

          this.error = message
        })
    },
    ...mapActions('auth', ['verifyGet']),
  },
}
</script>

<style lang="scss" scoped>
.verification {
  padding: 32px;
  text-align: center;
  &__status {
    text-align: center;
    margin: 16px 0;
  }
  &__status-text {
    font-weight: 500;
    font-size: 20px;
    color: $colorPrimary;
    &--error {
      color: $colorRed;
    }
  }
}
</style>
