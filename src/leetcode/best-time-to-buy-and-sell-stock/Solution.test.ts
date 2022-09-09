import { maxProfit, maxProfit2 } from "./Solution";

describe("maxProfit", () => {
  it("should work", () => {
    expect(maxProfit([1, 2])).toBe(1);
    expect(maxProfit([1, 2, 3])).toBe(2);
    expect(maxProfit([1, 3, 2])).toBe(2);
    expect(maxProfit([1, 3, 2, 4])).toBe(3);
    expect(maxProfit([2, 4, 1, 4])).toBe(3);
  });
});

describe("maxProfit2", () => {
  it("should work", () => {
    expect(maxProfit2([1, 2])).toBe(1);
    expect(maxProfit2([1, 2, 3])).toBe(2);
    expect(maxProfit2([1, 3, 2])).toBe(2);
    expect(maxProfit2([1, 3, 2, 4])).toBe(3);
    expect(maxProfit2([2, 4, 1, 4])).toBe(3);
  });
});
