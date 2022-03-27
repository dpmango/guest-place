<template>
  <header class="header">
    <!-- topbar -->
    <div class="header__topbar">
      <div class="container">
        <div class="header__topbar-wrapper">
          <div class="header__geolocation">
            <UiSvgIcon name="map-pin" />
            <span>Москва</span>
            <UiSvgIcon name="caret" />
          </div>

          <div class="header__actions">
            <NuxtLink to="/profile" class="header__action">
              <UiSvgIcon name="user" />
            </NuxtLink>
            <NuxtLink to="/profile/favorites" class="header__action">
              <UiSvgIcon name="like" />
            </NuxtLink>
            <NuxtLink to="/profile/messages" class="header__action">
              <UiSvgIcon name="chat-circle" />
              <div v-if="notificationDialogsCount" class="header__action-count">
                <span>{{ notificationDialogsCount }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="header__main">
      <div class="container">
        <div class="header__wrapper">
          <NuxtLink to="/" class="header__logo">
            <img src="~/assets/img/logo.svg" alt="logo" />
          </NuxtLink>

          <ul class="header__menu">
            <li v-for="(li, idx) in mainnav" :key="idx">
              <NuxtLink :to="li.to">{{ li.label }}</NuxtLink>
            </li>
          </ul>

          <ul class="header__menu header__menu--cta">
            <li>
              <a @click="() => setModal({ name: 'request' })">+ Разместить запрос</a>
            </li>
            <li>
              <NuxtLink to="/create/place">+ Добавить место</NuxtLink>
            </li>
          </ul>

          <NuxtLink to="/profile" class="header__action header__action--menu">
            <UiSvgIcon name="user" />
          </NuxtLink>

          <button class="header__button-burger" @click="mobileNav">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <MenuNav />
  </header>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      tick: 0,
      mainnav: [
        { to: '/about', label: 'О платформе' },
        { to: '/about/place', label: 'Площадкам' },
        { to: '/about/guest', label: 'Гостям' },
        { to: '/ui', label: 'UI' },
      ],
    }
  },
  computed: {
    ...mapGetters('auth', ['user']),
    ...mapGetters('chat', ['notificationDialogsCount', 'notificationMessageCount']),
  },

  methods: {
    async handleLogout() {
      await this.logout()
        .then((res) => {
          this.$toast.global.default({ message: res.detail })
        })
        .catch((_err) => {})
    },
    mobileNav() {
      if (this.panel() !== 'nav') {
        this.setPanel('nav')
      } else {
        this.resetPanels()
      }
    },
    ...mapActions('auth', ['logout']),
    ...mapMutations('ui', ['setPanel', 'resetPanels', 'setModal']),
    ...mapState('ui', ['panel']),
  },
}
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;

  &__button-burger {
    display: none;
    flex-direction: column;
    gap: 6px;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    span {
      width: 18px;
      height: 1px;
      border-radius: 1px;
      background-color: $fontColor;
      display: block;
    }
  }
  &__topbar {
    padding: 8px 0;
    border-bottom: 1px solid rgba($fontColor, 0.1);
  }

  &__topbar-wrapper {
    display: flex;
  }

  &__geolocation {
    display: inline-flex;
    align-items: center;
    .svg-icon--map-pin {
      margin-right: 6px;
    }
    .svg-icon--caret {
      font-size: 5px;
      margin-left: 3px;
    }
  }

  &__actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: -5px;
  }

  &__action {
    position: relative;
    display: inline-block;
    font-size: 0;
    padding: 5px;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
    .svg-icon {
      font-size: 20px;
    }

    &--menu {
      display: none;
      margin: 0;
      margin-left: auto;
    }
  }

  &__action-count {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    background: $colorRed;
    color: white;
    span {
      font-size: 12px;
    }
  }

  &__main {
    padding: 34px 0;
  }

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__logo {
    flex: 0 0 auto;
    font-size: 0;
    img {
      max-width: 100%;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 78px 0 auto;
    padding: 0;
    li {
      display: block;
      flex: 0 0 auto;
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
    a {
      display: inline-block;
      padding: 6px;
      cursor: pointer;
      transition: color 0.25s $ease;
      &:hover,
      &.nuxt-link-exact-active {
        color: $colorPrimary;
      }
    }
    &--cta {
      margin-left: 0;
      margin-right: -6px;
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

@include r($xl) {
  .header {
    &__button-burger {
      display: flex;
    }
    &__menu {
      margin-right: 0;
      &--cta {
        display: none;
      }
    }
  }
}

@include r($md) {
  .header {
    &__main {
      padding: 19px 0;
    }
    &__actions {
      display: none;
    }
    &__geolocation {
      margin: 0 auto;
    }
    &__action {
      &--menu {
        display: inline-block;
      }
    }

    &__button-burger {
      display: flex;
    }
    &__menu {
      display: none;
    }
  }
}
</style>
