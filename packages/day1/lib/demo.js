import axios from "axios";
export const runCallBack = fn => fn("abc");
export const classFactory = fn => new fn();
export const getData = () => {
  return axios.get("/www").then(({ data }) => data);
};
