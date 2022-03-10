<template>
  <div class="ui">
    <div class="container">
      <div class="section">
        <h2 class="section__title h2-title">Типографика (typography.scss)</h2>

        <h1 class="h1-title">H1 title</h1>
        <h2 class="h2-title">H2 title</h2>
        <h3 class="h3-title">H3 title</h3>
        <h4 class="h4-title">H4 title</h4>
        <h5 class="h5-title">H5 title</h5>
        <h6 class="h6-title">H6 title</h6>

        <p class="p-main mt-2">Прямая связь с площадкой в режиме реального времени</p>
        <p class="p-regular">Прямая связь с площадкой в режиме реального времени</p>
        <p class="p-label">Прямая связь с площадкой в режиме реального времени</p>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Иконки</h2>

        <div class="icons mt-2">
          <UiSvgIcon v-for="icon in icons" :key="icon" :name="icon" />
        </div>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Цвета (_colors.scss)</h2>

        <h3 class="c-font mt-1">Font $fontColor</h3>
        <h3 class="c-gray mt-1">Gray $colorGray</h3>
        <h3 class="c-light mt-1">Light $colorLight</h3>

        <h3 class="c-primary mt-1">Primary $colorPrimary</h3>
        <h3 class="c-accent mt-1">Accent $colorAccent</h3>
        <h3 class="c-green mt-1">Green $colorGreen</h3>
        <h3 class="c-red mt-1">Red $colorRed</h3>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Кнопки</h2>

        <div class="btns">
          <UiButton>Кнопка primary</UiButton>
          <UiButton theme="outline">Кнопка outline</UiButton>
          <UiButton size="small">Кнопка primary</UiButton>
          <UiButton size="small" theme="outline">Кнопка outline</UiButton>

          <UiButton :loading="loaderStatus" loader-color="#FFF">Кнпока с загрузкой</UiButton>
        </div>
      </div>

      <div class="section">
        <h2 class="section__title h2-title">Интерфейс</h2>

        <div class="ui-group">
          <UiInput
            :value="inputVal"
            theme="dynamic"
            name="inputVal"
            label="Фамилия"
            type="text"
            @onChange="(v) => (inputVal = v)"
          />
        </div>

        <div class="ui-group">
          <UiInput
            :value="inputVal"
            icon="key"
            icon-position="left"
            theme="dynamic"
            name="inputVal"
            label="Пароль"
            type="password"
            @onChange="(v) => (inputVal = v)"
          />
        </div>

        <div class="ui-group">
          <UiSelect
            :value="select"
            placeholder="Удобное время для звонка"
            :options="['10:00-12:00', '12:00-14:00', '14:00-18:00']"
            @onSelect="(v) => (select = v)"
          />
        </div>

        <div class="ui-group">
          <UiLoader theme="inline" :loading="true" />
        </div>

        <div class="ui-group">
          <UiStars :rating="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiPage',
  data() {
    return {
      inputVal: '',
      select: null,
      loaderStatus: false,
      icons: [
        'arrow-left',
        'camera',
        'caret',
        'chat-circle',
        'checkmark',
        'close',
        'coffee',
        'email',
        'export',
        'file',
        'filter',
        'group',
        'home',
        'id-badge',
        'key',
        'like',
        'login',
        'logout',
        'mail',
        'map-pin',
        'monitor-play',
        'paper-clip',
        'question',
        'search',
        'selection',
        'shopping-cart',
        'social-facebook',
        'social-google',
        'social-vk',
        'star',
        'user',
        'wallet',
      ],
    }
  },
  head: {
    title: 'Интерфейс | Guest&Place',
  },
  mounted() {
    setInterval(() => {
      this.loaderStatus = !this.loaderStatus
    }, 2000)
  },
}
</script>

<style lang="scss" scoped>
.ui {
  padding-bottom: 40px;
}
.section {
  margin: 60px 0;
  &__title {
    margin-bottom: 24px;
  }

  .ui-group {
    max-width: 420px;
    margin-bottom: 24px;
  }
}

.btns {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 16px;
  font-size: 0;
  max-width: 720px;
}
.icons {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 16px;
  font-size: 0;
  max-width: 720px;
  .svg-icon {
    font-size: 32px;
  }
}
</style>
