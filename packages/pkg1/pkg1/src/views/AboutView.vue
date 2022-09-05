<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
<!--    <test></test>-->
    <MyTest></MyTest>
  </div>
</template>
<script setup>
import {MyTest} from "@malaka/core";
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
