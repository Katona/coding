import { mergeSort } from "../global-and-local-inversions/Solution";

export function countRangeSum(nums: number[], lower: number, upper: number): number {
  let prefixArray = nums.reduce<number[]>(
    (prev, curr) => [...prev, (prev[prev.length - 1] ?? 0) + curr],
    []
  );

  let result = 0;
  for (let i = -1; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const left = i >= 0 ? prefixArray[i] : 0;
      const right = prefixArray[j];
      const rangeSum = right - left;
      if (rangeSum >= lower && rangeSum <= upper) {
        result += 1;
      }
    }
  }
  return result;
}
type Range = {
  start: number;
  end: number;
};

const countRangeSums = (prefixSum: number[], left: Range, right: Range, sumRange: Range) => {
  let i = left.start;
  let l = right.start;
  let r = right.start;
  let count = 0;
  while (i <= left.end) {
    while (l <= right.end && prefixSum[l] - prefixSum[i] < sumRange.start) l += 1;
    while (r <= right.end && prefixSum[r] - prefixSum[i] <= sumRange.end) r += 1;
    count += r - l;
    i += 1;
  }
  return count;
};

function arraycopy<T>(src: T[], srcPos: number, dst: T[], dstPos: number, length: number) {
  while (length--) dst[dstPos++] = src[srcPos++];
  return dst;
}

const merge = (nums: number[], left: Range, right: Range, buffer: number[]) => {
  let l = left.start;
  let r = right.start;
  let merged = left.start;

  while (merged <= right.end) {
    if (r > right.end || l <= left.end && nums[l] < nums[r]) {
      buffer[merged] = nums[l];
      l += 1;
    } else {
      buffer[merged] = nums[r];
      r += 1;
    }
    merged += 1;
  }
  arraycopy(buffer, left.start, nums, left.start, right.end - left.start + 1);
};

const countRangeSumSub = (
  prefixSum: number[],
  range: Range,
  sumRange: Range,
  buffer: number[]
): number => {
  if (range.start === range.end)
    return prefixSum[range.start] >= sumRange.start && prefixSum[range.start] <= sumRange.end
      ? 1
      : 0;
  const middle = (range.start + range.end) >> 1;
  const leftHalf = { start: range.start, end: middle };
  const rightHalf = { start: middle + 1, end: range.end };
  const result =
    countRangeSumSub(prefixSum, leftHalf, sumRange, buffer) +
    countRangeSumSub(prefixSum, rightHalf, sumRange, buffer) +
    countRangeSums(prefixSum, leftHalf, rightHalf, sumRange);
  merge(prefixSum, leftHalf, rightHalf, buffer);
  return result;
};

/**
 * nums = [-2, 5, -1]
 * prefix = [ 2, 3, 2]
 */
export function countRangeSum2(nums: number[], lower: number, upper: number): number {
  const prefixArray = nums.reduce<number[]>(
    (prev, curr) => [...prev, (prev[prev.length - 1] ?? 0) + curr],
    []
  );
  return countRangeSumSub(
    prefixArray,
    { start: 0, end: prefixArray.length - 1 },
    { start: lower, end: upper },
    Array(nums.length - 1)
  );
}

/**
 * nums = [1, 2];
 * value = 2;
 *
 */
export const findIndex = (nums: number[], value: number, start: number, end: number) => {
  let l = start;
  let r = end;

  while (l <= r) {
    const m = (l + r) >> 1;
    if (value <= nums[m]) r = m - 1;
    else l = m + 1;
  }
  return l;
};
