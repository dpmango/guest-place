<template>
  <UiModal name="nav" content-class="mt-1">
    <template #title>Нужна <span class="c-primary">помощь?</span> </template>

    <template #decor>
      <img src="~/assets/img/modal-help-decor.svg" alt="background image" />
    </template>

    <template #content>
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
  </UiModal>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      phone: null,
      comment: null,
      time: null,
      date: null,
      guests: null,
      error: null,
    }
  },
  computed: {},
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) {
        return
      }

      const { name, phone } = this
      // await this.login({ login: email, password })
      //   .then((_res) => {})
      //   .catch((err) => {
      //     const { data, code } = err

      //     if (data && code === 401) {
      //       Object.keys(data).forEach((key) => {
      //         this.error = data[key]
      //       })
      //     }
      //   })
    },
    // ...mapActions('auth', ['login']),
  },
}
</script>

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
