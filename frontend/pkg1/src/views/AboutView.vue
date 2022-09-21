<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>element测试</el-button>
    <MyTest></MyTest>
  </div>
</template>
<script setup lang="ts">
import { MyTest } from "@malaka/vue-common";
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
