import { lis } from "./Solution";

describe("lis", () => {
  it("should return a longest increasing subsequence", () => {
    expect(lis([1])).toStrictEqual([1]);
    expect(lis([2])).toStrictEqual([2]);
    expect(lis([1, 2])).toStrictEqual([1, 2]);
    expect(lis([3, 1, 2])).toStrictEqual([1, 2]);
    expect(lis([3, 2, 4, 3, 1, 4])).toStrictEqual([2, 3, 4]);
  });
});
