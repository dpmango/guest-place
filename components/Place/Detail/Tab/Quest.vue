<template>
  <div class="quest mb-1" :class="{ 'is-active': isOpen }">
    <div class="quest__header" @click="isOpen = !isOpen">
      <p class="quest__quest">
        <slot name="quest"></slot>
      </p>
      <button>
        <img v-if="!isOpen" src="~/assets/img/quest-open.png" alt="" />
        <img v-if="isOpen" src="~/assets/img/quest-close.png" alt="" />
      </button>
    </div>
    <div class="quest__text">
      <p class="quest__answer">
        <slot name="answer"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.quest {
  display: flex;
  gap: 5px;
  flex-direction: column;
  position: relative;

  button {
    width: 48px;
    height: 48px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 30px 13px 35px;
    box-shadow: 0px 4px 15px 0px #694e4b24;
    transition: $transitionSpeed $ease;
    border-radius: 50px;
    gap: 10px;
    cursor: pointer;
  }

  &__text {
    position: relative;
  }

  &__answer {
    opacity: 0;
    // transition: left $transitionSpeed $ease;
    padding: 0 30px 0 35px;
    color: $colorLight;
    position: absolute;
    left: 100px;
    pointer-events: none;
  }

  &.is-active & {
    &__header {
      box-shadow: none;
    }

    &__answer {
      position: relative;
      left: 0px;
      opacity: 1;
      transition: $transitionSpeed $ease;
    }
  }
}

@include r($md) {
  .quest {
    &__header {
      padding: 15px 16px;
    }
    &__answer {
      padding: 0 16px;
    }
    button {
      height: 30px;
      width: 30px;
      img {
        width: inherit;
        height: inherit;
      }
    }
  }
}
</style>
