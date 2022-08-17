import { isLastReachable, isLastReachableIter } from "./Solution";
const large = [
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0
];
describe("isLastReachable", () => {
  it("should work", () => {
    expect(isLastReachable([1])).toBe(true);
    expect(isLastReachable([1, 1])).toBe(true);
    expect(isLastReachable([1, 0])).toBe(true);
    expect(isLastReachable([1, 0, 0])).toBe(false);
    expect(isLastReachable([2, 0, 1, 0])).toBe(true);
    expect(isLastReachable([1, 1, 0, 1])).toBe(false);
    expect(isLastReachable(large)).toBe(true);
  });
});

describe("isLastReachableIter", () => {
  it("should work", () => {
    expect(isLastReachableIter([1])).toBe(true);
    expect(isLastReachableIter([1, 1])).toBe(true);
    expect(isLastReachableIter([1, 0])).toBe(true);
    expect(isLastReachableIter([1, 0, 0])).toBe(false);
    expect(isLastReachableIter([2, 0, 1, 0])).toBe(true);
    expect(isLastReachableIter([1, 1, 0, 1])).toBe(false);
    expect(isLastReachableIter(large)).toBe(false);
  });
});
