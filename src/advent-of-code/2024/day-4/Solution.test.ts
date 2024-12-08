import { largeInput, parseInput, smallInput } from "./input";
import { getXmasCount, getX_MASCount } from "./Solution";

describe("getXmasCount", () => {
  it("should work", () => {
    expect(getXmasCount([["X", "M", "A", "S"]])).toBe(1);
    expect(getXmasCount([["X", "M", "A"]])).toBe(0);

    expect(getXmasCount(parseInput(smallInput))).toBe(18);
    expect(getXmasCount(parseInput(largeInput))).toBe(2532);
  });
});
describe("getX_MASCount", () => {
  it("should work", () => {
    expect(getX_MASCount(parseInput(smallInput))).toBe(9);
    expect(getX_MASCount(parseInput(largeInput))).toBe(1941);
  });
});
