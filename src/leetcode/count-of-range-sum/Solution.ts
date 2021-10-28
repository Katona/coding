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
