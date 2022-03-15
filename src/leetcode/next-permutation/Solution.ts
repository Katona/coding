/**
 Do not return anything, modify nums in-place instead.
 */
// [ 1, 2, 3]
export function nextPermutation(nums: number[]): void {
  const swap = (a: number, b: number) => {
    const tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  };

  let a = -1;
  let b = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    let candidate = Number.MAX_VALUE;
    let candidateIndex = -1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i] && candidate > nums[j]) {
        candidate = nums[j];
        candidateIndex = j;
      }
    }
    if (candidateIndex !== -1) {
      a = i;
      b = candidateIndex;
      break;
    }
  }

  if (a === -1) {
    nums.sort((a, b) => a - b);
    return;
  }
  swap(a, b);

  let minIndex = b;
  for (let i = b; i < nums.length; i++) {
      if (nums[i] < nums[minIndex]) minIndex = i;
  }

  if (nums[minIndex] < nums[b]) swap(b, minIndex);
}
