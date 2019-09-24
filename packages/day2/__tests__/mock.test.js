import { fetchData } from "../lib/mock";
import axios from "axios";
// jest.mock("axios");
jest.mock("../lib/mock");
const { getNumber } = jest.requireActual("../lib/mock.js");
// jest.unmock("../lib/mock"); // 取消模拟
describe("mock test", () => {
  //   test("fetchData", () => {
  //     axios.get.mockResolvedValue({
  //       data: "(function(){return 123}())"
  //     });
  //     return fetchData().then(data => {
  //       expect(eval(data)).toEqual(123);
  //     });
  //   });
  test("fetchData", () => {
    expect.assertions(1);
    return fetchData().then(({ data }) => {
      expect(eval(data)).toEqual(123);
    });
  });
  test("getNumber", () => {
    expect(getNumber()).toEqual(123);
  });
});
