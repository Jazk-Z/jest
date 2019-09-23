import { generateConfig, generateOtherConfig } from "../lib/day2";
describe("快照 toMatchSnapshot", () => {
  test("测试 generateConfig", () => {
    expect(generateConfig()).toMatchInlineSnapshot(`
      Object {
        "domain": "localhost",
        "port": 8080,
        "server": "http://localhost",
      }
    `);
  });
  //   test("测试 generateOtherConfig", () => {
  //     expect(generateOtherConfig()).toMatchSnapshot({
  //       time: expect.any(Date)
  //     });
  //   });
});
