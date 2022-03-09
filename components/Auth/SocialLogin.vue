<template>
  <div class="socAuth">
    <div class="socAuth__label p-label">Или зарегистрируйтесь с помощью</div>

    <ul class="socAuth__list">
      <li>
        <UiSvgIcon name="social-google" />
      </li>
      <li>
        <UiSvgIcon name="social-vk" />
      </li>
      <li>
        <UiSvgIcon name="social-facebook" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.socAuth {
  margin-top: 40px;
  &__label {
    font-size: 14px;
    line-height: 16px;
    color: $colorLight;
    text-align: center;
  }
  &__list {
    margin: 12px 0 -5px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    li {
      font-size: 0;
      cursor: pointer;
      color: rgba(#aab9ed, 0.7);
      padding: 5px;
      transition: color 0.25s $ease;
      .svg-icon {
        font-size: 30px;
      }
      &:hover {
        color: $colorPrimary;
      }
    }
  }
}
</style>
