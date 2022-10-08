import { parse } from 'yaml';
import * as path from 'path';
import * as fs from 'fs';

// 获取项目运行环境
export const getEnv = (): string => {
  return process.env.ENV;
};

export const getName = (): string => {
  return process.env.NAME;
};

// 读取项目配置
export const getConfig = () => {
  const name = getName().toUpperCase();
  const environment = getEnv();
  const yamlPath = path.join(
    process.cwd(),
    environment === 'prod'
      ? `backend/.config/.${environment}.yaml`
      : `.config/.${environment}.yaml`,
  );
  const file = fs.readFileSync(yamlPath, 'utf8');
  return parse(file)[name];
};

export const getBasic = (key?: string) => {
  const config = getConfig();
  const basic = config['BASIC'];
  if (key) {
    return basic[key];
  } else {
    return basic;
  }
};
export const getDatabase = () => {
  const config = getConfig();
  return config['DATA_BASE'];
};
export const getRedis = () => {
  const config = getConfig();
  return config['REDIS'];
};
