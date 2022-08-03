import { findMinMissingInteger } from "./Solution";

describe("findMinMissingInteger", () => {
  it("should work", () => {
    expect(findMinMissingInteger([0, 1])).toBe(2);
    expect(findMinMissingInteger([1, 0])).toBe(2);
    expect(findMinMissingInteger([-1, 1])).toBe(2);
    expect(findMinMissingInteger([-1, 1, 3])).toBe(2);
    expect(findMinMissingInteger([3, 4, -1, 1])).toBe(2);
    expect(findMinMissingInteger([3, 2, 1, 0])).toBe(4);
  });
});
