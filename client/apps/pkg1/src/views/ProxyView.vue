<template>
  <el-form :model="form" label-width="60px" inline size="small">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="权限"> </el-form-item>
    <el-form-item>
      <el-button type="primary">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
const form = reactive({});
</script>
<style scoped></style>
