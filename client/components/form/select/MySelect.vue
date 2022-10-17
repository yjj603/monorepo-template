<template>
  <el-select
    v-model="model"
    v-bind="{ ...$attrs, ...formConfig }"
    :filterable="true"
    @change="emit"
  >
    <el-option
      v-for="item in option"
      :key="item[optionIndex[1]]"
      :label="item[optionIndex[0]]"
      :value="item[optionIndex[1]]"
    />
  </el-select>
</template>
<script lang="ts" setup>
import { useFormCommonScript } from "../common";
const props = defineProps<{
  config: Record<string, unknown>;
  data: Record<string, unknown>;
}>();
const { emit, config, data, formConfig } = useFormCommonScript(props);
//处理多选的model是数组
const model = Reflect.get(formConfig, "multiple")
  ? computed({
      get: () => {
        if (Array.isArray(data[config.prop])) {
          return data[config.prop];
        } else {
          return [];
        }
      },
      set: (val) => {
        data[config.prop] = val ?? [];
      },
    })
  : computed({
      get: () => {
        return data[config.prop] ?? "";
      },
      set: (val) => {
        data[config.prop] = val ?? "";
      },
    });

//处理后台查询的数据
onMounted(async () => {
  if (config.store) {
    await config.store.init();
  }
});
const option = computed(() =>
  Reflect.get(config, "store") ? config.store.list : config.option
);
const optionIndex = Reflect.get(config, "store")
  ? config.store.optionIndex
  : config.optionIndex;
</script>

<style scoped></style>
