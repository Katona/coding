function subarraySumSlow(nums: number[], k: number): number {
  const sumArray = nums.reduce<number[]>(
    (sumArray, n) => [...sumArray, (sumArray.at(-1) ?? 0) + n],
    [],
  );
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sum = sumArray[j] - (sumArray[i - 1] ?? 0);
      if (sum === k) result = result + 1;
    }
  }

  return result;
}

function subarraySum(nums: number[], k: number): number {
  let result = 0;
  let sum = 0;
  const sumFrequencies = new Map<number, number>();
  sumFrequencies.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    result = result + (sumFrequencies.get(sum - k) ?? 0);
    sumFrequencies.set(sum, (sumFrequencies.get(sum) ?? 0) + 1);
  }
  return result;
}
export { subarraySum };
