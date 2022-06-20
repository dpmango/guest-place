<template>
  <div class="news">
    <div class="news__icon-wrapper">
      <div class="news__icon" :class="'news__icon--' + color">
        <UiSvgIcon :name="icon" />
      </div>
    </div>
    <p class="news__text tac">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    color: {
      type: String,
      validator: (theme) => ['yellow', 'orange', 'red'].includes(theme),
    },
  },
}
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 15px 0px #694e4b24;
  max-width: 350px;
  width: 100%;
  height: 225px;
  border-radius: 40px;
  position: relative;
  padding: 20px 32px 0;
  &__icon {
    position: absolute;
    box-shadow: 3px 4px 10px 0px #4e063e2e;
    width: 82px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    svg {
      position: relative;
      z-index: 2;
      width: 40px !important;
      height: 40px !important;
      color: white;
    }
    &--yellow {
      background-color: #f8da75;
    }
    &--orange {
      background-color: #f7b686;
    }
    &--red {
      background-color: #ef8062;
    }
  }
  &__icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 122px;
    height: 122px;
    position: absolute;
    top: -61px;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
    background-color: white;
    box-shadow: inset 0px 4px 15px 0px #694e4b24;
    &::before {
      content: '';
      width: 100%;
      height: 50%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
    }
  }
  &__text {
    font-weight: 500;
  }
}
@include r($md) {
  .news {
    padding: 20px 16px 0;
  }
}
</style>
