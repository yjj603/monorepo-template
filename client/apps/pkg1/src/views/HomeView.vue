<template>
  测试测试2 {{ obj.c }}
  <br />
  auto-import:{{ count }}
</template>

<script setup lang="ts">
const obj: Record<string, unknown> = {
  c: "test",
};
const count = ref(0);
</script>

<style scoped></style>
