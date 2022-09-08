<template>
  <div>{{count}}</div>
  <el-button @click="btnClick"></el-button>
</template>
<script lang="ts" setup>
const count = ref(0)
const btnClick = ()=>count.value ++
</script>

<style scoped>

</style>