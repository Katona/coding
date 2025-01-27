function sortedSquares(nums: number[]): number[] {
  if (nums.length === 0) return nums;
  if (nums[0] >= 0) return nums.map((n) => n * n);
  if ((nums.at(-1) ?? 0) <= 0) return nums.map((n) => n * n).reverse();

  let positive = nums.findIndex((n) => n >= 0);
  let negative = positive - 1;
  let result: number[] = [];

  while (negative >= 0 || positive < nums.length) {
    const negativeSquare = negative >= 0 ? nums[negative] ** 2 : Number.MAX_VALUE;
    const positiveSquare = positive < nums.length ? nums[positive] ** 2 : Number.MAX_VALUE;
    if (negativeSquare < positiveSquare) {
      result.push(negativeSquare);
      negative = negative - 1;
    } else {
      result.push(positiveSquare);
      positive = positive + 1;
    }
  }
  return result;
}

export { sortedSquares };
