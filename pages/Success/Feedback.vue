<template>
  <div class="wrapper container">
    <AuthWrapper>
      <template #title>Принято! <span class="c-primary">До связи! :)</span></template>
      <template #description>
        <p class="p-main">Заявка успешно отправлена. Менеджер обычно отвечает в течение получаса</p>
      </template>

      <template #image>
        <img src="~/assets/img/auth-login-illustration.svg" alt="cover illustration" />
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
    title: 'Успех -  Обратная свзяь | Guest&Place',
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
