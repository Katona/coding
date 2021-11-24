import { largestRectangleArea } from "./Solution";

describe("largestRectangleArea", () => {
  it("should work", () => {
    expect(largestRectangleArea([1])).toBe(1);
    expect(largestRectangleArea([1, 1])).toBe(2);
    expect(largestRectangleArea([1, 2, 1])).toBe(3);
    expect(largestRectangleArea([2, 2, 1])).toBe(4);
    expect(largestRectangleArea([2, 4])).toBe(4);
    expect(largestRectangleArea([2, 5])).toBe(5);
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    expect(largestRectangleArea([2, 0, 5])).toBe(5);
  });
  it("should work #2", () => {
    expect(largestRectangleArea([3, 2, 5])).toBe(6);
    expect(largestRectangleArea([4, 0, 3, 2, 5])).toBe(6);
  })
});
