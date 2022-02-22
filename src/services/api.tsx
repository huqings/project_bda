import { post, get } from "./request";

const bicycle_info = "/bicycle/info";
const user_info = "/user/info";

export const getUserData = () => get(bicycle_info);
export const addLogTypeListFun = (param: any) => post(user_info, param);
