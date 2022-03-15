<template>
  <div class="wrapper container">
    <AuthWrapper>
      <template #title>Ваш <span class="c-primary">аккаунт</span> создан!</template>
      <template #description>
        <p class="p-main">
          Теперь вы можете добавлять и редактировать информацию о себе в
          <NuxtLink to="/profile">личном кабинете</NuxtLink>
        </p>
      </template>

      <template #image>
        <img src="~/assets/img/auth-success-illustration.svg" alt="cover illustration" />
      </template>

      <template #form>
        <div class="buttons">
          <NuxtLink to="/profile">
            <UiButton type="submit" block>В личный кабинет</UiButton>
          </NuxtLink>

          <NuxtLink to="/">
            <UiButton theme="outline" block>На главную</UiButton>
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
    title: 'Добавить место | Guest&Place',
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  ::v-deep .buttons {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 30px;
  }
}
</style>
