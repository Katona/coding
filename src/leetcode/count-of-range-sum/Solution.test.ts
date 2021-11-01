import { countRangeSum, countRangeSum2, findIndex } from "./Solution";

describe("countRangeSum", () => {
  it("should work.", () => {
    expect(countRangeSum2([-2, 5, -1], -2, 2)).toBe(3);
    expect(countRangeSum2([0], 0, 0)).toBe(1);
    expect(countRangeSum2([1, 2], 1, 3)).toBe(3);
    expect(countRangeSum2([1, 2, 3], 3, 5)).toBe(3);
    expect(countRangeSum2([1, 2, 3], 4, 4)).toBe(0);
    expect(countRangeSum2([1, 2, 3], 3, 6)).toBe(4);
    expect(countRangeSum2([-3,-3,1,1,2], 3, 5)).toBe(2);
    expect(countRangeSum2([0, 1,1,2], 3, 5)).toBe(3);
  });
  it("performance compare.", () => {
      const nums = Array(10000).fill(0).map((_, i) => i);
      const nums2 = Array(20000).fill(0).map((_, i) => i);
      const nums3 = Array(4000000).fill(0).map((_, i) => i);
    
      console.time("countRangeSum2")
      countRangeSum2(nums, 3, 50);
      console.timeEnd("countRangeSum2")
      console.time("countRangeSum2")
      countRangeSum2(nums2, 3, 50);
      console.timeEnd("countRangeSum2")
      console.time("countRangeSum2")
      countRangeSum2(nums3, 3, 50);
      console.timeEnd("countRangeSum2")

    //   console.time("countRangeSum")
    //   countRangeSum(nums, 3, 50);
    //   console.timeEnd("countRangeSum")
    //   console.time("countRangeSum")
    //   countRangeSum(nums2, 3, 50);
    //   console.timeEnd("countRangeSum")
    //   console.time("countRangeSum")
    //   countRangeSum(nums3, 3, 50);
    //   console.timeEnd("countRangeSum")


  })
});

describe("findIndex", () => {
  it("should work", () => {
    expect(findIndex([0], 0, 0, 0)).toBe(0);
    expect(findIndex([1, 2], 2, 0, 1)).toBe(1);
    expect(findIndex([1, 2], 1, 0, 1)).toBe(0);
    expect(findIndex([1, 2], 3, 0, 1)).toBe(2);
    expect(findIndex([1, 2, 3], 2, 0, 2)).toBe(1);
  });
});
