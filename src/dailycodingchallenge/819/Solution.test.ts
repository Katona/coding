import { getMaxProfit } from "./Solution";

describe("getMaxProfit", () => {
  it("should return the max profit", () => {
    expect(getMaxProfit([1, 5])).toBe(4);
    expect(getMaxProfit([3, 5, 2, 7])).toBe(5);
    expect(getMaxProfit([9, 11, 8, 5, 7, 10])).toBe(5);

  });
});
