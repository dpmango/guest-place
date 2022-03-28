<template>
  <div class="lenta mb-4">
    <div class="lenta__img">
      <img :src="lenta.img" alt="Img" />
    </div>
    <div class="lenta__content">
      <div class="lenta__header">
        <img :src="lenta.avatar" alt="Аватар" class="lenta__user-avatar" />
        <div class="lenta__user-info">
          <h3 class="h3-title">{{ lenta.title }}</h3>
          <p class="h5-title">{{ lenta.date }}</p>
        </div>
      </div>
      <div class="lenta__text mt-1 mb-2">
        <slot> </slot>
      </div>
      <p class="lenta__footer"><UiSvgIcon name="thumbs-up" /> {{ lenta.likes }} человек это оценили</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lenta: Object,
  },
}
</script>

<style lang="scss" scoped>
.lenta {
  // flex-wrap: wrap;
  display: flex;
  gap: 30px;
  &__img {
    width: 340px;
    height: 230px;
    border-radius: 30px;
    img {
      border-radius: 30px;
      height: inherit;
      width: inherit;
    }
  }
  &__user-avatar {
    border-radius: 50%;
    height: 58px;
    width: 58px;
  }
  &__header {
    display: flex;
    gap: 20px;
  }
  &__footer {
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      color: white;
      font-size: 24px;
    }
  }
}

@include r($md) {
  .lenta {
    flex-direction: column;
    &__img {
      width: 100%;
      height: 180px;
      img {
        object-fit: cover;
      }
    }
  }
}
</style>
