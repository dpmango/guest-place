<template>
  <div class="wrapper container">
    <AuthWrapper>
      <template #title>Запрос размещен!</template>
      <template #description>
        <p class="p-main">
          Предложения от площадок придут в указанное вами место
          <NuxtLink to="/profile">(Чат в личном кабинете, почта или звонок)</NuxtLink>
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
    title: 'Успех - Создано | Guest&Place',
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
