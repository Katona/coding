import { maxProfit } from "./Solution";

describe("maxProfit", () => {
  it("should work", () => {
    expect(maxProfit([1])).toBe(0);
    expect(maxProfit([1, 2])).toBe(1);
    expect(maxProfit([1, 2, 3])).toBe(2);
    expect(maxProfit([1, 2, 3, 2, 4, 2])).toBe(4);
    expect(maxProfit([1, 2, 3, 2, 4, 2, 3])).toBe(5);
  });
});
