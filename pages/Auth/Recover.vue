<template>
  <AuthRecover />
</template>

<script>
export default {
  layout: 'auth',
  middleware: ['authenticated'],
  head: {
    title: 'Восстановление пароля | Guest&Place',
  },
}
</script>
