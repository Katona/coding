type MergeItem = {
  value: number;
  index: number;
  inversionCount: number;
};

function arraycopy<T>(src: T[], srcPos: number, dst: T[], dstPos: number, length: number) {
  while (length--) dst[dstPos++] = src[srcPos++];
  return dst;
}

export function countSmaller(nums: number[]) {
  const merge = (nums: MergeItem[], start: number, end: number, buffer: MergeItem[]) => {
    if (start === end - 1) return 0;
    let inversionCnt = 0;
    const middle = (start + end) >> 1;
    merge(nums, start, middle, buffer);
    merge(nums, middle, end, buffer);
    let left = start;
    let right = middle;
    let merged = start;
    while (merged < end) {
      const leftValue = left < middle ? nums[left].value : Number.MAX_VALUE;
      const rightValue = right < end ? nums[right].value : Number.MAX_VALUE;
      if (leftValue <= rightValue) {
        nums[left].inversionCount += inversionCnt;
        buffer[merged] = nums[left];
        left++;
      } else {
        inversionCnt += 1;
        buffer[merged] = nums[right];
        right++;
      }
      merged++;
    }
    arraycopy(buffer, start, nums, start, end - start);
  };

  const mergeItems: MergeItem[] = nums.map((n, i) => ({ value: n, index: i, inversionCount: 0 }));
  merge(mergeItems, 0, mergeItems.length, Array(nums.length));
  const result = Array<number>(nums.length);
  mergeItems.forEach((m) => (result[m.index] = m.inversionCount));
  return result;
}
