<template>
  <el-form :model="register" label-width="60px" inline size="small">
    <el-form-item
      v-bind="item"
      v-for="item in registerFormItem"
      :key="item.prop"
    >
      <component
        :is="item.formTemplate"
        :data="register"
        :config="item"
      ></component>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="registerSubmit">注册</el-button>
    </el-form-item>
  </el-form>
  <el-form :model="login" label-width="60px" inline size="small">
    <el-form-item v-bind="item" v-for="item in loginFormItem" :key="item.prop">
      <component
        :is="item.formTemplate"
        :data="login"
        :config="item"
      ></component>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { registerFormItem, loginFormItem } from "../config/factory";

const register = reactive({
  status: 1,
});
const login = reactive({
  username: "malaka",
  password: "123456",
});
const registerSubmit = async () => {
  const data = await apiRegister(register);
  console.log(data);
};
const loginSubmit = async () => {
  const data = await apiLogin(login);
  console.log(data);
};
/*onMounted(async () => {
  const { data } = await apiGetUser();
});*/
</script>
<style scoped></style>
