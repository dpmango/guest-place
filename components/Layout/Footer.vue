<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__logo">
          <img src="~/assets/img/logo.svg" alt="logo" />
          <div class="footer__logo-label">Интерактивная платформа</div>
        </div>

        <ul class="footer__menu">
          <li v-for="(link, idx) in menu" :key="idx">
            <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      menu: [
        { to: '/about', label: 'О проекте' },
        { to: '/about/platforms', label: 'Площадкам' },
        { to: '/about/guests', label: 'Гостям' },
        { to: '/about/contacts', label: 'Контакты' },
        { to: '/about/help', label: 'Помощь' },
        { to: '/about/vacancy', label: 'Вакансии' },
        { to: '/about/support', label: 'Техподдержка' },
      ],
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 52px 0 54px;
  border-top: 1px solid rgba($fontColor, 0.1);
  &__wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  &__logo {
    flex: 0 0 auto;
    font-size: 0;
    margin-bottom: 20px;
    img {
      max-width: 100%;
    }
  }
  &__logo-label {
    margin-top: 5px;
    font-size: 14px;
    line-height: 1.35;
  }
  &__menu {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 8px 0 0 auto;
    padding: 0;
    li {
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
    a {
      transition: color 0.25s $ease;
      &:hover {
        color: $colorPrimary;
      }
    }
  }
}
</style>
