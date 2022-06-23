<template>
  <section class="recents" :class="className">
    <div class="container">
      <h2 class="h2-title">Последние <span class="c-primary">добавленные</span></h2>

      <div class="recents__grid mt-4 mt-sm-2">
        <PlaceCard v-for="place in places" :key="place.id" :data="place" />
      </div>

      <!-- <div class="recents__cta mt-4">
        <UiButton>Показать еще 18</UiButton>
      </div> -->
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    className: String,
  },
  data() {
    return {
      places: [
        {
          id: 1,
          title: 'Банкетный зал лофт Форест Холл',
          img: require('~/assets/img/recent-1.jpg'),
          rating: 5,
          location: 'Сокольники',
          stats: '35/100/150',
          price: '$$$',
        },
      ],
    }
  },

  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.recents {
  position: relative;
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
  }
  &__cta {
    display: flex;
    justify-content: center;
  }
}

@include r($lg) {
  .recents {
    &__grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

@include r($md) {
  .recents {
    &__grid {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@include r($sm) {
  .recents {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
