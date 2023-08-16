<template>
  <div class="box">
    <el-input placeholder="请输入1"></el-input>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ZInput',
})
const a = ref(123)
onMounted(() => {
  console.log('hello')
})
</script>

<style scoped></style>
