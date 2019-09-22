import axios from "axios";
export const fetchData = fn => {
  axios
    .get("http://www.dell-lee.com/react/api/demo.json")
    .then(({ data }) => fn(data));
};
export const fetchData1 = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
};
