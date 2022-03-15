<template>
  <section class="categories mt-4 mb-5">
    <div class="container">
      <h2 class="h2-title">Места <span class="c-primary">по категориям</span></h2>

      <div class="categories__grid mt-4 mt-sm-2">
        <NuxtLink v-for="(category, idx) in list" :key="category.id || idx" :to="category.slug" class="category">
          <h3 class="category__title h3-title">
            {{ category.label }}
          </h3>
          <div class="category__image">
            <img :src="category.img" :alt="category.label" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      list: [
        { id: 1, label: 'Отдых', slug: '/place?category=leisure', img: require('~/assets/img/category-leisure.svg') },
        {
          id: 2,
          label: 'Бизнес',
          slug: '/place?category=business',
          img: require('~/assets/img/category-business.svg'),
        },
        {
          id: 3,
          label: 'Банкеты',
          slug: '/place?category=banquets',
          img: require('~/assets/img/category-banquets.svg'),
        },
        { id: 4, label: 'Здоровье', slug: '/place?category=health', img: require('~/assets/img/category-leisure.svg') },
      ],
    }
  },

  methods: {
    // ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.categories {
  position: relative;
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 90px 30px;
  }
}

.category {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(105, 78, 75, 0.14);
  border-radius: 60px;
  overflow: hidden;
  min-height: 240px;
  transition: box-shadow 0.25s $ease;
  &__title {
    flex: 0 0 50%;
    // font-size: 32px;
    // line-height: 130%;
    padding: 30px;
    position: relative;
    z-index: 2;
  }
  &__image {
    position: relative;
    margin-left: auto;
    text-align: center;
    font-size: 0;
    padding-right: 30px;
    &::before {
      display: inline-block;
      content: ' ';
      position: absolute;
      width: 150%;
      height: 400px;
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
      background: #ecf4fd;
      border-radius: 50%;
      transition: transform 0.25s $ease;
      will-change: transform;
    }
    img {
      position: relative;
      z-index: 2;
      max-width: 100%;
    }
  }
  &:hover {
    box-shadow: 0px 4px 4px rgba(105, 78, 75, 0.14);
    .category__image {
      &::before {
        transform: translate(-50%, -50%) scale(0.9);
      }
    }
  }
}

@include r($md) {
  .categories {
    &__grid {
      gap: 20px;
      grid-template-columns: 1fr;
    }
  }
  .category {
    min-height: 130px;
    &__image {
      &::before {
        width: 200px;
        height: 200px;
      }

      img {
        max-width: 110px;
        max-height: 110px;
      }
    }
  }
}
</style>
