<template>
  <section class="section" :class="[className, reverse && 'reverse']">
    <div class="container">
      <div class="section__wrapper row">
        <div class="section__content col col-6 col-lg-12">
          <div class="section__content-wrapper">
            <h2 class="h2-title">
              <slot name="title"></slot>
            </h2>
            <p class="h5-title c-gray mt-2">
              <slot name="content"></slot>
            </p>
          </div>
        </div>

        <div class="section__image col col-6 col-lg-12">
          <div class="section__image-holder">
            <slot name="image"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    className: String,
    reverse: Boolean,
  },
  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  &__wrapper {
    align-items: center;
  }
  &__content-wrapper {
    max-width: 540px;
  }
  &__image {
    flex-direction: row;
    justify-content: flex-end;
  }
  &__image-holder {
    position: relative;
    z-index: 1;
    max-width: 475px;
    font-size: 0;
    border-radius: 40px;
    overflow: hidden;
    img {
      max-width: 100%;
    }
  }
  &.reverse {
    .section__content {
      order: 2;
    }
    .section__image {
      order: 1;
      justify-content: flex-start;
    }
  }
}
@include r($lg) {
  .section {
    &__content {
      text-align: center;
    }
    &__image-holder {
      margin: 0 auto;
    }
    &__content-wrapper {
      margin: 0 auto;
    }
  }
}
@include r($md) {
  .section {
    &.reverse {
      .section__content {
        order: 1;
      }

      .section__image {
        order: 2;
      }
    }
  }
}
</style>
