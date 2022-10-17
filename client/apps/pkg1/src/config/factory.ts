import {
  Input,
  Select,
  Password,
  SelectMultiple,
} from "../../../../common/factory/form";
import { useRole } from "../stores";
const roleStore = useRole();
const username = new Input("username", "用户名");
const password = new Password("password", "密码");
const role = new SelectMultiple("role", "角色", roleStore);
const status = new Select("status", "状态", ["禁用", "启用"]);
export const loginFormItem = [username, password];
export const registerFormItem = [username, password, role];
export const userTableColumn = [username, password, role, status];
