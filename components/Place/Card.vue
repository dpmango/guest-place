<template>
  <div class="card" :data-id="data.id">
    <div class="card__image">
      <img :src="data.img" :alt="data.title" />
    </div>
    <div class="card__content">
      <div class="card__title h4-title">{{ data.title }}</div>
      <div class="card__rating">
        <UiStars :rating="data.rating" />
      </div>

      <div class="card__stat">
        <div class="card__stat-icon">
          <UiSvgIcon name="map-pin" />
        </div>
        <span>{{ data.location }}</span>
      </div>

      <div class="card__stat">
        <div class="card__stat-icon">
          <UiSvgIcon name="group" />
        </div>
        <span>{{ data.stats }}</span>
      </div>

      <div class="card__stat">
        <div class="card__stat-icon">
          <UiSvgIcon name="wallet" />
        </div>
        <span>{{ data.price }}</span>
      </div>

      <div class="card__cta">
        <UiButton theme="outline" size="small">Подробнее</UiButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    data: Object,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  &__image {
    position: relative;
    z-index: 1;
    overflow: hidden;
    font-size: 0;
    border-radius: 30px;
    img {
      width: 100%;
    }
  }
  &__content {
    padding: 20px 20px 0;
  }
  &__rating {
    margin-top: 16px;
  }

  &__stat {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }
  &__stat-icon {
    flex: 0 0 30px;
    padding-right: 10px;
    font-size: 14px;
    line-height: 1;
    text-align: center;
    .svg-icon--map-pin {
      font-size: 20px;
    }
  }
  &__cta {
    display: flex;
    justify-content: flex-end;
    margin-top: -32px;
  }
}
</style>
