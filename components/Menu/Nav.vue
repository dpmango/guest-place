<template>
  <div class="nav">
    <div class="nav__wrapper container">
      <ul class="nav__menu">
        <li>
          <NuxtLink to="/about">О платформе</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about/place">Площадкам</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about/guest">Гостям</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/messages">Чат</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/favorites">Избранное</NuxtLink>
        </li>
      </ul>
      <ul class="nav__menu nav__menu--cta">
        <li>
          <NuxtLink to="/create/request">+ Разместить запрос</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/create/place">+ Добавить место</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: block;
  background-color: white;
  position: absolute;
  top: 100%;
  height: calc(100vh - 100%);
  width: 100%;
  left: 0;
  &__menu {
    display: flex;
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
      &:hover,
      &.nuxt-link-exact-active {
        color: $colorPrimary;
      }
    }
    &--cta {
      margin-top: 25px;
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
</style>
