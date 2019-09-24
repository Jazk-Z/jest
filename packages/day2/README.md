# `@jest/day2`

- 快照全部更新 w -> u
- 快照一个一个更新 w -> i
- 行内快照 依赖 prettier toMatchInlineSnapshot (不能用 packages 这个名字)
- automock 自动找引入文件的 同文件夹 **mocks**/a.js 没找到会找 a.js
- 在使用**mocks**时 jest.mock("../lib/mock");这个异步和同步同时存在时 同步测试函数需要这么写 const { getNumber } = jest.requireActual("../lib/mock.js"); 但是模拟 axios 不需要
