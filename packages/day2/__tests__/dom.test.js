import $ from "jquery";
import addDivToBody from "../lib/dom";
describe("test dom", () => {
  test("test dom", () => {
    addDivToBody();
    expect($("body").find("div").length).toBe(1);
    console.log($("body").find("div").length);
  });
});
