"use strict";

import { add, minus, multi } from "../lib/math.js";
import { ETIMEDOUT } from "constants";

describe("@jest/day1", () => {
  test("测试 === ", () => {
    expect(add(3, 7)).toBe(10);
  });
  test("测试对象内容相等", () => {
    const a = { b: 1 };
    expect(a).toEqual({ b: 1 });
  });
});
describe("描述真假匹配器", () => {
  test("测试toBeNull", () => {
    const a = null;
    expect(a).toBeNull();
  });
  test("测试toBeUndefined", () => {
    const a = undefined;
    expect(a).toBeUndefined();
  });
  test("测试toBeDefined", () => {
    const a = 1;
    expect(a).toBeDefined();
  });
  test("测试toBeTruthy", () => {
    const a = 1;
    expect(a).toBeTruthy();
  });
  test("测试toBeFalsy", () => {
    const a = 0;
    expect(a).toBeFalsy();
  });
  test("not 匹配器", () => {
    const a = undefined;
    expect(a).not.toBeTruthy();
  });
});

describe("数字相关匹配器", () => {
  test("toBeGreaterThan", () => {
    const a = 1;
    expect(a).toBeGreaterThan(0);
  });
  test("toBeLessThan", () => {
    const a = 1;
    expect(a).toBeLessThan(2);
  });
  test("toBeGreaterThanOrEqual", () => {
    const a = 1;
    expect(a).toBeGreaterThanOrEqual(1);
  });
  test("toBeCloseTo", () => {
    // 浮点数相关问题
    const a = 0.1;
    const b = 0.2;
    expect(a + b).toBeCloseTo(0.3);
  });
});
describe("字符串匹配器", () => {
  test("toMatch", () => {
    // js match
    const url = "www.baudu.com";
    expect(url).toMatch(/www/);
    expect(url).toMatch("www");
  });
});
describe("Array Set", () => {
  test("toContain", () => {
    // js match
    const arr = [1, 2, 3];
    const arrSet = new Set([1, 2, 3]);
    expect(arr).toContain(1);
    expect(arr).toContain(3);
  });
});
describe("处理异常", () => {
  test("toThrow", () => {
    // js match
    const a = () => {
      throw new Error("1");
    };
    expect(a).toThrow();
    expect(a).toThrow("1");
    expect(a).toThrow(/1/);
  });
});
