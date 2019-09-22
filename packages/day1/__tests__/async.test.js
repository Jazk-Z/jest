import { fetchData, fetchData1 } from "../lib/fetchData";
describe("测试异步", () => {
  test("测试异步", done => {
    fetchData(data => {
      expect(data).toEqual({
        success: true
      });
      done();
    });
  });
  test("测试异步", () => {
    return fetchData1().then(({ data }) => {
      expect(data).toEqual({
        success: true
      });
    });
  });
  //   test("测试异步 404", () => {
  //     // 404语法必须执行
  //     expect.assertions(1);
  //     return fetchData1().catch(e => {
  //       expect(e.toString().indexOf("404") > -1).toBe(true);
  //     });
  //   });
  test("测试异步", () => {
    // 404语法必须执行
    return expect(fetchData1()).resolves.toMatchObject({
      data: {
        success: true
      }
    });
  });
  //   test("测试异步", () => {
  //     // 404语法必须执行
  //     return expect(fetchData1()).rejects.toThrow();
  //   });
  test("测试异步", async () => {
    // 404语法必须执行
    await expect(fetchData1()).resolves.toMatchObject({
      data: {
        success: true
      }
    });
  });
  //   test("测试异步", async () => {
  //     // 404语法必须执行
  //     await expect(fetchData1()).rejects.toThrow();
  //   });
  test("测试异步", async () => {
    // 404语法必须执行
    const { data } = await fetchData1();
    expect(data).toEqual({ success: true });
  });
  //   test("测试异步", async () => {
  //     expect.assertions(1);
  //     // 404语法必须执行
  //     try {
  //       await fetchData1();
  //     } catch (e) {}
  //     expect(e.toString()).toEqual("....");
  //   });
});
