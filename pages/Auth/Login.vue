<template>
  <AuthLogin />
</template>

<script>
export default {
  layout: 'auth',
  middleware: ['authenticated'],
  head: {
    title: 'Войти | Guest&Place',
  },
}
</script>
