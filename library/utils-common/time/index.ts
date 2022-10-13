import dayjs from 'dayjs';

export const timeFormat = (time = Date.now(), format: string = '') => dayjs(time).format(format);
export const timestamp = (time = Date.now()) => dayjs(time).valueOf();
export const dateFormat = (time = Date.now()) => dayjs(time).format('YYYY-MM-DD');
export const dateTimeFormat = (time = Date.now()) => dayjs(time).format('YYYY-MM-DD HH:mm:ss');