<template>
  <div class="page">
    <LayoutHeader />
    <div class="page__content header-pad">
      <Nuxt />
    </div>
    <LayoutFooter />

    <ModalShared />
    <portal-target name="modals" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  middleware: ['default'],

  computed: {
    ...mapGetters('chat', ['isConnected']),
  },
  watch: {
    isConnected(newVal, oldVal) {
      if (newVal === true) {
        this.getDialogs()
        this.getNotificationCount()
      }
    },
  },
  mounted() {
    // console.log('default mounted  -connect ?', !this.isConnected);

    if (!this.isConnected) {
      this.connect()
    } else {
      try {
        this.getDialogs()
        this.getNotificationCount()
      } catch (e) {
        this.$toast.global.error({ message: 'Ошибка подключения к сообщениям. Перезагрузите страницу' })
      }
    }
  },
  methods: {
    ...mapActions('chat', ['connect', 'getDialogs', 'getNotificationCount']),
  },
}
</script>

<style lang="scss">
.header-pad {
  padding-top: 146px;
}
</style>
