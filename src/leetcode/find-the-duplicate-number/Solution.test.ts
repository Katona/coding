import findDuplicate from "./Solution";

describe("findDuplicate", () => {
  it("should find the duplicate element in the array", () => {
    expect(findDuplicate([1, 1, 2])).toBe(1);
    expect(findDuplicate([1, 2, 3, 4, 5, 5])).toBe(5);
    expect(findDuplicate([1, 2, 3, 3, 4, 5])).toBe(3);
    expect(findDuplicate([3, 3, 3, 3])).toBe(3);
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
    expect(findDuplicate([1, 1])).toBe(1);
  });
});
