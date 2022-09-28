<template>
  <el-menu :default-active="route.name" router>
    <el-menu-item index="home">
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="proxy">
      <span>代理</span>
    </el-menu-item>
    <el-menu-item index="test">
      <span>测试</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
<style scoped></style>
