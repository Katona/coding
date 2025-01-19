import { subarraySum } from "./Solution";

describe("subarraySum", () => {
  it("should work", () => {
    expect(subarraySum([1, 2, 3], 3)).toBe(2);
    expect(subarraySum([1, 2, 3], 1)).toBe(1);
    expect(subarraySum([1, 2, 3], 1)).toBe(1);
    expect(subarraySum([1, 2, -1, 3], 1)).toBe(2);
    expect(subarraySum([1, 2, -1, 3], -1)).toBe(1);
    expect(subarraySum([1, 1, 1], 2)).toBe(2);
    expect(subarraySum([1], 0)).toBe(0);
  });
});
