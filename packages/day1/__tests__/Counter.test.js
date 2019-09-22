import Counter from "../lib/Counter";
let counter = null;
beforeAll(() => {
  console.log("start test");
});
afterAll(() => {
  console.log("test all finished");
});
beforeEach(() => {
  console.log("every start test");
  counter = new Counter();
});
afterEach(() => {
  console.log("every finished test");
});
describe("钩子函数 测试增加", () => {
  test("+1", () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });
  test("+2", () => {
    counter.addTwo();
    expect(counter.number).toBe(2);
  });
  test("-1", () => {
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });
});
describe("钩子函数 测试减少", () => {
  test("-1", () => {
    counter.minusTwo();
    expect(counter.number).toBe(-2);
  });
});
