<template>
  <div class="page">
    <LayoutHeader />

    <div class="page__content">
      <div class="auth header-pad">
        <div class="container">
          <div class="auth__page">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>

    <portal-target name="modals" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.auth {
  &__page {
    position: relative;
    min-height: calc(100vh - 146px);
    padding-top: 40px;
    display: flex;
    flex-direction: column;
  }
}
</style>
