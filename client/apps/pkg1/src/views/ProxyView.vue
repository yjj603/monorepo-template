<template>
  <el-button @click="btnClick">测试</el-button>
</template>

<script setup lang="ts">
import { $http, $success } from "../../../../common/utils";

const btnClick = async () => {
  await $http({
    url: "/getTestName",
  });
  $success("接口成功连接");
};
</script>
<style scoped></style>
