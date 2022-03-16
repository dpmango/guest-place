<template>
  <div class="wrapper container">
    <AuthWrapper>
      <template #title>Ваш <span class="c-primary">вопрос</span> отправлен!</template>
      <template #description>
        <p class="p-main">
          Спасибо за ваш вопрос! Ответ придет в
          <NuxtLink to="/profile">чат личного кабинета</NuxtLink>
        </p>
      </template>

      <template #image>
        <img src="~/assets/img/auth-success-illustration.svg" alt="cover illustration" />
      </template>

      <template #form>
        <div class="buttons">
          <NuxtLink to="/">
            <UiButton type="submit">На главную</UiButton>
          </NuxtLink>
        </div>
      </template>
    </AuthWrapper>
  </div>
</template>

<script>
export default {
  // middleware: ['restrictedAccess'],
  head: {
    title: 'Успех - Вопрос отправлен | Guest&Place',
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  ::v-deep .buttons {
    margin-top: 40px;
    .button {
      min-width: 190px;
    }
  }
}
</style>
