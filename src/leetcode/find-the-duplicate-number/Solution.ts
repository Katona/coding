const find = (nums: number[], start: number, end: number): number => {
  if (start === end) return start;

  const middle = Math.floor((start + end) / 2);
  const numsInLeft = nums.reduce(
    (acc, value) => (value <= middle && value >= start ? acc + 1 : acc),
    0,
  );
  if (numsInLeft > middle - start + 1) return find(nums, start, middle);
  else return find(nums, middle + 1, end);
};
/**
 * nums: [1, 1, 2]
 */
function findDuplicate(nums: number[]): number {
  return find(nums, 1, nums.length - 1);
}

export default findDuplicate;
