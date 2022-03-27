<template>
  <UiPanel name="nav" class="fixed">
    <div class="nav">
      <div class="nav__wrapper container">
        <ul class="nav__menu">
          <li v-for="(li, idx) in menu" :key="idx">
            <NuxtLink :to="li.to">{{ li.label }}</NuxtLink>
          </li>
        </ul>
        <ul class="nav__menu nav__menu--cta">
          <li>
            <a @click="() => setModal({ name: 'request' })">+ Разместить запрос</a>
          </li>
          <li>
            <NuxtLink to="/create/place">+ Добавить место</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </UiPanel>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      menu: [
        { to: '/about', label: 'О платформе' },
        { to: '/about/place', label: 'Площадкам' },
        { to: '/about/guest', label: 'Гостям' },
        { to: '/messages', label: 'Чат' },
        { to: '/favorites', label: 'Избранное' },
      ],
    }
  },
  methods: {
    ...mapMutations('ui', ['setModal']),
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &__menu {
    display: none;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0;
    gap: 25px;
    margin: 0;
    li {
      display: block;
      flex: 0 0 auto;
      &:last-child {
        margin-right: 0;
      }
    }
    a {
      display: inline-block;
      padding: 6px;
      transition: color 0.25s $ease;
      cursor: pointer;
      &:hover,
      &.nuxt-link-exact-active {
        color: $colorPrimary;
      }
    }
    &--cta {
      margin-top: 25px;
      display: flex;
      text-align: center;
      a {
        font-weight: 500;
        color: $colorPrimary;
        &:hover {
          color: $colorAccent;
        }
      }
    }
  }
}

@include r($md) {
  .nav {
    &__menu {
      display: flex;
    }
  }
}
</style>
