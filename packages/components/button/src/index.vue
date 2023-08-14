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

const a = ref(123)
</script>

<style scoped></style>
