export function isIdealPermutation(nums: number[]): boolean {
  const { invCnt: globalInvCnt } = mergeSort(nums);
  const localInvCnt = calcLocalInvCnt(nums);

  return globalInvCnt === localInvCnt;
}

function calcLocalInvCnt(nums: number[]): number {
  let invCnt = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) invCnt++;
  }
  return invCnt;
}

function arraycopy(src: number[], srcPos: number, dst: number[], dstPos: number, length: number) {
  while (length--) dst[dstPos++] = src[srcPos++];
  return dst;
}

export function mergeSort(nums: number[]): { result: number[]; invCnt: number } {
  const merge = (nums: number[], start: number, end: number, buffer: number[]) => {
    if (start === end - 1) return 0;
    let inversionCnt = 0;
    const middle = (start + end) >> 1;
    inversionCnt += merge(nums, start, middle, buffer);
    inversionCnt += merge(nums, middle, end, buffer);
    let left = start;
    let right = middle;
    let merged = start;
    while (left < middle && right < end) {
      if (nums[left] < nums[right]) {
        buffer[merged] = nums[left];
        left++;
      } else {
        inversionCnt += middle - left;
        buffer[merged] = nums[right];
        right++;
      }
      merged++;
    }
    arraycopy(nums, left, buffer, merged, middle - left);
    arraycopy(nums, right, buffer, merged, end - right);
    arraycopy(buffer, start, nums, start, end - start);

    return inversionCnt;
  };

  const result = [...nums];
  const invCnt = merge(result, 0, result.length, Array(nums.length));
  return { result, invCnt };
}
