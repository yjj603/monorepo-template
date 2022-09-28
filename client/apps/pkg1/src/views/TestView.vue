<template>
  <div>公共组件测试</div>
  <MyTest></MyTest>
  <div>workspace方法测试:</div>
  <div>{{ now }}</div>
  <div>{{ now2 }}</div>
  <div>{{ now3 }}</div>
  <div>{{ now4 }}</div>
</template>

<script setup lang="ts">
import {
  timeFormat,
  timestamp,
  dateFormat,
  dateTimeFormat,
} from "@malaka/utils-common";
const now = timeFormat();
const now2 = timestamp();
const now3 = dateFormat();
const now4 = dateTimeFormat();
</script>
<style scoped></style>
