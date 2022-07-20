export const findMinMissingInteger = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] >= 0 && nums[i] < nums.length && nums[i] !== i) {
      const tmp = nums[nums[i]];
      nums[nums[i]] = nums[i];
      nums[i] = tmp;
    }
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
};
