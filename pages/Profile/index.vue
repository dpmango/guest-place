<template>
  <ProfileHome />
</template>

<script>
export default {
  middleware: ['restrictedAccess'],
  head: {
    title: 'Профиль | Guest&Place',
  },
}
</script>
