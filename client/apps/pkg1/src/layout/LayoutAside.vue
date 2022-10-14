<template>
  <el-menu :default-active="route.name" router>
    <el-menu-item index="home">
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="proxy">
      <span>登录注册</span>
    </el-menu-item>
    <el-menu-item index="test">
      <span>账户列表</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
<style scoped></style>
