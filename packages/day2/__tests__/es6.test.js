import demoFun from "../lib/es6";
import Util from "../lib/util";
jest.mock("../lib/util.js"); // mock 发现引入的文件是一个类 会把类和方法变成jest.fn()
// 第二个参数 jest.mock("../lib/util.js"，() => {const Util = jest.fn() return Util});
describe("test es6", () => {
  test("mock class ", () => {
    demoFun();
    expect(Util).toHaveBeenCalled();
    console.log(Util.mock);
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();
  });
});
