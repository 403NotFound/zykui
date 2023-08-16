<template>
  <div>
    <el-button type="primary">Button2-{{ a }}</el-button>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ZButton',
})

const a = ref(12345)
</script>

<style scoped></style>
