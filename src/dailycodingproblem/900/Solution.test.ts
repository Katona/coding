import { maxSubArraySum } from "./Solution";

describe("maxSubArraySum", () => {
  it("should work", () => {
    expect(maxSubArraySum([1])).toBe(1);
    expect(maxSubArraySum([1, 2])).toBe(3);
    expect(maxSubArraySum([1, -1, 2])).toBe(2);
    expect(maxSubArraySum([1, -1, 2])).toBe(2);
    expect(maxSubArraySum([-1, -1, -2])).toBe(0);
    expect(maxSubArraySum([34, -50, 42, 14, -5, 86])).toBe(137);
  });
});
