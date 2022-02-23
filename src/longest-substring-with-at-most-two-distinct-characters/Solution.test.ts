import { getLongestSubstring } from "./Solution";

describe("getLongestSubstring", () => {
  it("should work", () => {
    expect(getLongestSubstring("aaaaa")).toEqual({ start: 0, end: 4 });
    expect(getLongestSubstring("abcaa")).toEqual({ start: 2, end: 4 });
    expect(getLongestSubstring("abcaacc")).toEqual({ start: 2, end: 6 });
    expect(getLongestSubstring("abcdef")).toEqual({ start: 0, end: 1 });
  });
});
