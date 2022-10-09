<template>
  <el-button @click="btnClick">公共方法/反代测试</el-button>
</template>

<script setup lang="ts">
const btnClick = async () => {
  const { data } = await $http({
    url: "/getTestName",
  });
  if (data) {
    $success(`当前环境是${data}`);
  } else {
    $success(`后台配置错误`);
  }
};
</script>
<style scoped></style>
