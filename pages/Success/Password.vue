<template>
  <div class="wrapper container">
    <AuthWrapper>
      <template #title>Пароль успешно изменен!</template>
      <template #description>
        <p class="p-main">
          Мы сохранили ваш новый пароль. Вы всегда можете изменить его в вашем
          <NuxtLink to="/profile">личном кабинете</NuxtLink>
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
    title: 'Успех - Пароль | Guest&Place',
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  ::v-deep .buttons {
    margin-top: 50px;
    .button {
      min-width: 190px;
    }
  }
}
</style>
