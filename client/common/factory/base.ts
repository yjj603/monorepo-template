import { isPlainObject } from "lodash-es";

export class Base {
  // 获取实例对象的属性
  get(key: string) {
    if (!key.includes(".")) {
      return Reflect.get(this, key);
    }
    const str = key.split(/\./);
    const fn = (str: string[], obj = this): unknown => {
      if (str.length === 1) {
        return Reflect.get(obj, str[0]);
      } else {
        const k = str[0];
        if (Reflect.has(obj, k)) {
          return undefined;
        }
        str.shift();
        return fn(str, Reflect.get(obj, k));
      }
    };
    return fn(str);
  }

  // 设置实例对象的属性
  set(key: string, value: unknown) {
    if (!key.includes(".")) {
      Reflect.set(this, key, value);
      return this;
    }
    const str = key.split(/\./);
    const fn = (str: string[], obj = this): void => {
      if (str.length === 1) {
        Reflect.set(obj, str[0], value);
      } else {
        const k = str[0];
        if (!Reflect.has(obj, k)) {
          Reflect.set(obj, k, {});
        }
        str.shift();
        return fn(str, Reflect.get(obj, k));
      }
    };
    fn(str);
    return this;
  }

  // 如果设置的值和原始值同是对象或数组则进行合并,否则同set
  add(key: string, value: unknown) {
    if (!isPlainObject(value)) {
      return this.set(key, value);
    }
    const str = key.split(/\./);
    const fn = (str: string[], obj = this): void => {
      if (str.length === 1) {
        const origin = Reflect.get(obj, str[0]);
        if (isPlainObject(origin) && isPlainObject(value)) {
          Reflect.set(obj, str[0], Object.assign(origin, value));
        } else {
          Reflect.set(obj, str[0], value);
        }
      } else {
        const k = str[0];
        if (!Reflect.has(obj, k)) {
          Reflect.set(obj, k, {});
        }
        str.shift();
        return fn(str, Reflect.get(obj, key));
      }
    };
    fn(str);
    return this;
  }

  // 删除实例对象的属性
  delete(key: string) {
    if (!key.includes(".")) {
      Reflect.deleteProperty(this, key);
      return this;
    }
    const str = key.split(/\./);
    const fn = (st: string[], obj = this): void => {
      if (str.length === 1) {
        Reflect.deleteProperty(obj, str[0]);
      } else {
        const k = str[0];
        if (!Reflect.has(obj, k)) {
          return;
        }
        str.shift();
        return fn(str, Reflect.get(obj, k));
      }
    };
    fn(str);
    return this;
  }

  // 判断实例对象的属性是否存在
  has(key: string) {
    if (!key.includes(".")) {
      return Reflect.has(this, key);
    }
    return !!this.get(key);
  }
}
