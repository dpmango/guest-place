<template>
  <div class="chat mb-3">
    <div class="chat__content">
      <div class="chat__header">
        <img :src="chat.avatar" alt="Аватар" class="chat__user-avatar" />
        <div class="chat__user-info">
          <h3 class="h3-title">{{ chat.name }}</h3>
          <p class="h5-title">{{ chat.date }}</p>
        </div>
        <UiStars :rating="chat.rating" class="chat__user-rating" />
      </div>
      <div class="chat__text mt-1">
        {{ chat.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chat: Object,
  },
}
</script>

<style lang="scss" scoped>
.chat {
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
    height: 50px;
    width: 50px;
  }
  &__user-rating {
    margin-left: auto;
  }
  &__header {
    display: flex;
    align-items: flex-start;
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
  .chat {
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
