<template>
  <el-container class="divide-y">
    <el-header>
      <LayoutHeader></LayoutHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <LayoutAside class="h-[calc(100vh-61px)]"></LayoutAside>
      </el-aside>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutAside from "./layout/LayoutAside.vue";
import LayoutHeader from "./layout/LayoutHeader.vue";
</script>

<style scoped></style>
