export function maxSlidingWindow(nums: number[], k: number): number[] {
  const window: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (window.length > 0 && nums[i] > nums[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i);
    if (i >= k - 1) {
      result.push(nums[window[0]]);
      if (window[0] <= i - k + 1) window.shift();
    }
  }
  return result;
}
