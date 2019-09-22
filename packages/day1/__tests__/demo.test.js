import { runCallBack, classFactory, getData } from "../lib/demo";
import axios from "axios";
jest.mock("axios");
describe("mock 1", () => {
  test("mock", () => {
    const func = jest.fn(() => "123"); // 每次都返回
    func.mockReturnValueOnce("dell"); // 回调函数模拟返回值 1次 覆盖上面的
    func.mockReturnValue("xxx"); // 回调函数模拟返回值 1次 覆盖上面的
    func.mockImplementation(() => {
      return "sdf";
    }); // === jest.fn(() => "123")
    func.mockImplementationOnce(() => {
      return "sdf";
    });
    func.mockReturnThis();
    runCallBack(func);
    runCallBack(func);
    expect(func).toBeCalled(); // expect  都是断言
    console.log(func.mock);
    expect(func.mock.calls.length).toBe(2); // 调用几次
    expect(func.mock.results[0].value).toBe("dell"); // 调用几次
    expect(func.mock.calls[0]).toEqual(["abc"]); // 调用参数 只调用一次
    // ||
    expect(func).toBeCalledWith("abc"); // 每次调用
  });
});
describe("classFactory", () => {
  test("classFactor ", () => {
    const func = jest.fn();
    classFactory(func);
    console.log(func.mock);
  });
});
describe("mock data", () => {
  test.only("classFactor ", async () => {
    axios.get.mockResolvedValue({ data: "hello" });
    axios.get.mockResolvedValueOnce({ data: "hello" });
    await getData().then(data => {
      console.log(data);
      expect(data).toBe("hello");
    });
  });
});
