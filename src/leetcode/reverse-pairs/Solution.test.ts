import { reversePairs } from "./Solution";

describe("reversePairs", () => {
  it("should count the reverse pairs.", () => {
    expect(reversePairs([1, 2, 3])).toBe(0);
    expect(reversePairs([2, 1])).toBe(0);
    expect(reversePairs([3, 1])).toBe(1);
    expect(reversePairs([1, 1])).toBe(0);
    expect(reversePairs([1, 1])).toBe(0);
    expect(reversePairs([5, 1, 5, 2])).toBe(3);
    expect(reversePairs([2, 4, 3, 5, 1])).toBe(3);
    expect(reversePairs([4, 5, 2, 3])).toBe(1);
  });
});
