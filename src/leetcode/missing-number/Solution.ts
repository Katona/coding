export function missingNumber(nums: number[]): number {
  const fullRange = [...Array(nums.length + 1)].map((_, i) => i);
  const fullRangeXor = fullRange.reduce((acc, curr) => acc ^ curr, 0);
  const numsXor = nums.reduce((acc, curr) => acc ^ curr, 0);
  return numsXor ^ fullRangeXor;
}
