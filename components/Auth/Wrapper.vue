<template>
  <div class="auth">
    <div class="auth__content">
      <h1 class="auth__title h2-title">
        <slot name="title"></slot>
      </h1>
      <p class="auth__description p-regular">
        <slot name="description"></slot>
      </p>

      <client-only>
        <template slot="placeholder">
          <UiLoader :loading="true" theme="block" />
        </template>

        <slot name="form"></slot>
      </client-only>
    </div>

    <div class="auth__image">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {},
}
</script>

<style lang="scss" scoped>
.auth {
  flex: 1 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  &__content {
    padding-bottom: 40px;
  }

  &__image {
    margin-top: auto;
    text-align: right;
    font-size: 0;
    img {
      max-width: 100%;
    }
  }
  &__description {
    margin-top: 16px;
  }
}

::v-deep form {
  margin-top: 40px;
  .ui-group {
    display: block;
    margin-bottom: 20px;
  }
}

@include r($md) {
  .auth {
    grid-template-columns: 1fr;
  }
}
</style>
