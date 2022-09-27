import { ElMessage } from "element-plus";

export const $success = (options: any) => ElMessage.success(options);
export const $message = (options: any) => ElMessage(options);
export const $warning = (options: any) => ElMessage.warning(options);
export const $error = (options: any) => ElMessage.error(options);
