import { Base } from "./base";
import { cloneDeep, isNumber, isString } from "lodash-es";
import type { FormRules } from "element-plus";
import { MyInput, MySelect } from "~";
import type { Store } from "pinia";
class Field extends Base {
  prop: string;
  label: string;
  event = new Set<Function>();
  minWidth = 100;
  formatter = (res: Record<string, unknown>) => {
    const value = Reflect.get(res, this.prop);
    return isNumber(value) || isString(value) ? value : "-";
  };
  formConfig: Record<string, unknown> = {};
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
  formTemplate = MyInput;
}

export class TextArea extends Input {
  showOverflowTooltip = true;
  formConfig = {
    type: "textarea",
    rows: 2,
  };
}

export class Password extends Input {
  formConfig = {
    type: "password",
    showPassword: true,
  };
}

export class InputNumber extends Field {
  type = "InputNumber";
}

export class BaseSelect extends Field {
  option: Record<string, string | number>[] = [];
  optionIndex: [string, string] = ["label", "value"];
  store: Store | null = null;
  constructor(
    prop: string,
    label: string,
    option: Record<string, string | number> | (string | number)[] | Store = [],
    config: Record<string, unknown> = {}
  ) {
    super(prop, label);
    this.setOption(option);
    this.setConfig(config);
  }

  setOption(
    option: Record<string, string | number> | (string | number)[] | Store = []
  ) {
    if (Array.isArray(option)) {
      this.option = option.map((v, i) => {
        if (typeof v === "string" || typeof v === "number") {
          return {
            label: v,
            value: i,
          };
        } else {
          return v;
        }
      });
    } else {
      this.store = option as Store;
    }
    return this;
  }
}
export class Select extends BaseSelect {
  formTemplate = MySelect;
}
export class SelectMultiple extends BaseSelect {
  formTemplate = MySelect;
  formConfig = {
    multiple: true,
    collapseTags: true,
    collapseTagsTooltip: true,
  };
}
