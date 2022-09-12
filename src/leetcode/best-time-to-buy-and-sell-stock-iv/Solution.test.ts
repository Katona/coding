import { maxProfit } from "./Solution";

describe("Solution", () => {
  it("should work", () => {
    expect(maxProfit(1, [])).toBe(0);
    expect(maxProfit(1, [1])).toBe(0);
    expect(maxProfit(1, [1, 2])).toBe(1);
    expect(maxProfit(1, [1, 2, 1])).toBe(1);
    expect(maxProfit(1, [1, 2, 3])).toBe(2);
    expect(maxProfit(2, [1, 2, 1, 2])).toBe(2);
    expect(maxProfit(2, [1, 2, 3, 1, 4, 2, 5])).toBe(6);
    expect(maxProfit(2, [6, 1, 3, 2, 4, 7])).toBe(7);
  });
});
