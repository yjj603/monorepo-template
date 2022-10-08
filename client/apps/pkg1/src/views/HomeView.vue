<template>
  测试测试2
  <br />
  auto-import:{{ count }}
</template>

<script setup lang="ts">
import { isString } from "lodash-es";
const count = ref(0);
console.log(isString(count));
</script>

<style scoped></style>
