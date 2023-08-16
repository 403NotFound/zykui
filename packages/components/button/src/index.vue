<template>
  <div>
    <el-button type="primary">Button2-{{ a }}</el-button>
  </div>
</template>

<script>
export default { name: 'ZButton' }
</script>

<script setup>
onMounted(() => {
  console.log(111)
})

const msg = ref()

const a = ref(12345)
</script>

<style scoped></style>
