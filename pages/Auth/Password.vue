<template>
  <AuthPassword />
</template>

<script>
export default {
  layout: 'auth',
  middleware: ['authenticated'],
  head: {
    title: 'Установка пароля | Guest&Place',
  },
}
</script>
