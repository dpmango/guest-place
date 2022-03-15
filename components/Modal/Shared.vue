<template>
  <div class="shared-modals">
    <portal-target v-for="modal in modals" :key="modal" :name="`modal-${modal}`" />
  </div>
  <!--  -->
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {},
  data() {
    return {
      modals: ['expert', 'help', 'nav'],
    }
  },
  methods: {
    ...mapMutations('ui', ['setModal']),
  },
}
</script>
<style lang="scss" scoped></style>
