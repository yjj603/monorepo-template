import { Base } from "./base";
import { cloneDeep, isNumber, isString } from "lodash-es";
import type { FormRules } from "element-plus";
class Field extends Base {
  prop: string;
  label: string;
  event = new Set<Function>();
  minWidth = 100;
  formatter = (res: Record<string, unknown>) => {
    const value = Reflect.get(res, this.prop);
    return isNumber(value) || isString(value) ? value : "-";
  };
  constructor(
    prop: string,
    label: string,
    config: Record<string, unknown> = {}
  ) {
    super();
    this.prop = prop.trim();
    this.label = label.trim();
    this.setConfig(config);
  }

  setConfig(config: Record<string, unknown>) {
    const list = Object.entries(config);
    for (const l of list) {
      this.set(l[0], l[1]);
    }
  }

  setEvent(value: Function) {
    this.event.add(value);
  }

  setRequired(required = true) {
    this.set("rules", [
      {
        required,
        message: "此项必填",
      },
    ]);
    return this;
  }

  addRules(value: FormRules) {
    if (this.has("rules")) {
      this.get("rules").push(value);
    } else {
      this.set("rules", [value]);
    }
    return this;
  }

  cloneDeep() {
    return cloneDeep(this);
  }
}
export class Input extends Field {
  type = "Input";
}
export class TextArea extends Input {
  showOverflowTooltip = true;
  formConfig = {
    type: "textarea",
    rows: 2,
  };
}
export class InputNumber extends Field {
  type = "InputNumber";
}
export class BaseSelect extends Field {}
