<template>
  <div class="shared-modals">
    <ModalRequest />
    <ModalExpert />
    <ModalHelp />
    <ModalQuestion />
    <ModalCardRequest />
    <ModalOnline />
    <ModalManager />

    <portal-target v-for="modal in modals" :key="modal" :name="`modal-${modal}`" />
  </div>
  <!--  -->
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  props: {},
  data() {
    return {
      modals: ['expert', 'help', 'request', 'quest', 'cardrequest', 'online', 'manager'],
    }
  },
}
</script>

<style lang="scss" scoped>
.shared-modals {
  height: 0;
  width: 0;
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
