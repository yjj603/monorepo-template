<template>
  <div>公共组件测试</div>
  <MyTest></MyTest>
  <div>workspace方法测试:</div>
  <div>{{ timeFormat() }}</div>
  <div>{{ timestamp() }}</div>
  <div>{{ dateFormat() }}</div>
  <div>{{ dateTimeFormat() }}</div>
</template>

<script setup lang="ts">
import {
  timeFormat,
  timestamp,
  dateFormat,
  dateTimeFormat,
} from "@malaka/utils-common";
</script>
<style scoped></style>
