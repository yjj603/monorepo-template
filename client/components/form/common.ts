import { throttle } from "lodash-es";
export const useFormCommonScript = (props: any) => {
  const config = props.config;
  const data = props.data;
  const emit = throttle(() => {
    for (const event of config.event as Set<Function>) {
      event.call(config, data, config);
    }
  }, 500);
  const formConfig = Object.assign(
    config.formConfig as Record<string, unknown>,
    {
      clearable: true,
      placeholder: config.label,
      ref: "formItem",
    }
  );
  return {
    emit,
    data,
    config,
    formConfig,
  };
};
