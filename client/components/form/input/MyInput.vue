<template>
  <el-input
    v-model="data[config.prop]"
    v-bind="{ ...$attrs, ...formConfig }"
    @blur="emit"
    @keyup.enter="enter"
    @clear="emit"
  />
</template>
<script lang="ts" setup>
import { useFormCommonScript } from "../common";
const props = defineProps<{
  config: Record<string, unknown>;
  data: Record<string, unknown>;
}>();
const { emit, config, data, formConfig } = useFormCommonScript(props);
const enter = () => {
  if (formConfig.type !== "textarea") {
    emit();
  }
};
</script>

<style scoped></style>
