import { timer1, timer2 } from "../lib/timer";

describe("mock timer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test("timer1 测试", () => {
    const fn = jest.fn();
    timer1(fn);
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);
  });
  test("timer2 测试", () => {
    const fn = jest.fn();
    timer2(fn);
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(2);
  });
  test("timer2 测试", () => {
    const fn = jest.fn();
    timer2(fn);
    jest.runOnlyPendingTimers();
    expect(fn).toHaveBeenCalledTimes(1);
  });
  test("timer2 测试", () => {
    const fn = jest.fn();
    timer2(fn);
    jest.advanceTimersByTime(4000);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  test("timer2 测试", () => {
    const fn = jest.fn();
    timer2(fn);
    jest.advanceTimersByTime(4000);
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(4000);
    expect(fn).toHaveBeenCalledTimes(2);
  });
  test("timer2 测试 重复 需要重新定义模拟时间 beforeEach", () => {
    const fn = jest.fn();
    timer2(fn);
    jest.advanceTimersByTime(4000);
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(4000);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
