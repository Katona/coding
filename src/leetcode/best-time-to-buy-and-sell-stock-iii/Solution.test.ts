import { maxProfit } from "./Solution";

describe("maxProfit", () => {
  it("should work", () => {
    expect(maxProfit([1, 2])).toBe(1);
    expect(maxProfit([1, 2, 1, 3])).toBe(3);
    expect(maxProfit([1, 2, 1, 3, 2, 4])).toBe(4);
    expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6);
  });
});
