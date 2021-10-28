export function reversePairs(nums: number[]): number {
  return countInversions(nums);
}

function arraycopy(src: number[], srcPos: number, dst: number[], dstPos: number, length: number) {
  while (length--) dst[dstPos++] = src[srcPos++];
  return dst;
}

function countInversions(nums: number[]): number {
  const calculateInversions = (nums: number[], start: number, end: number) => {
    if (start === end - 1) return 0;
    let inversionCnt = 0;
    let middle = (start + end) >> 1;
    let left = start;
    let right = middle;
    while (right < end && left < middle) {
      if (nums[left] > 2 * nums[right]) {
        inversionCnt += middle - left;
        right++;
      } else {
        left++;
      }
    }
    return inversionCnt;
  }

  const merge = (nums: number[], start: number, end: number, buffer: number[]) => {
    if (start === end - 1) return 0;
    let inversionCnt = 0;
    const middle = (start + end) >> 1;
    inversionCnt += merge(nums, start, middle, buffer);
    inversionCnt += merge(nums, middle, end, buffer);
    inversionCnt += calculateInversions(nums, start, end);
    let left = start;
    let right = middle;
    let merged = start;
    while (left < middle && right < end) {
      if (nums[left] <= nums[right]) {
        buffer[merged] = nums[left];
        left++;
      } else {
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

  const numsCopy = [...nums];
  const invCnt = merge(numsCopy, 0, numsCopy.length, Array(nums.length));
  return invCnt;
}
