export const maxSubArraySum = (nums: number[]) => {
  let result = 0;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    result = Math.max(result, currentSum);
    if (currentSum < 0) currentSum = 0;
  }
  return result;
};
