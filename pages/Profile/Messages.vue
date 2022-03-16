<template>
  <ChatHome />
</template>

<script>
export default {
  middleware: ['restrictedAccess'],
  head: {
    title: 'Сообщения | Guest&Place',
  },
}
</script>
