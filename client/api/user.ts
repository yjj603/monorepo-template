import { $http } from "../common/utils/http";
export const apiRegister = async (data: Record<string, unknown>) => {
  return await $http({
    data,
    method: "post",
    url: "register",
  });
};
export const apiGetRole = async () => {
  return await $http({
    url: "role",
  });
};
export const apiGetUser = async (params: Record<string, unknown> = {}) => {
  return await $http({
    params,
    url: "user/findAll",
  });
};
export const apiLogin = async (data: Record<string, unknown>) => {
  return await $http({
    data,
    method: "post",
    url: "login",
  });
};
