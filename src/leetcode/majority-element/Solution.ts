export function majorityElementLinearSpace(nums: number[]): number {
  let histogram: Record<number, number> = {};
  let majorityElement = -1;
  let majorityElementFrequency = 0;
  nums.forEach((num) => {
    histogram[num] = (histogram[num] || 0) + 1;
    if (histogram[num] > majorityElementFrequency) {
      majorityElementFrequency = histogram[num];
      majorityElement = num;
    }
  });
  return majorityElement;
}

// Boyer Moore
export function majorityElement(nums: number[]): number {
  let m = -1;
  let c = 0;
  nums.forEach((num) => {
    if (c === 0) {
      m = num;
      c++;
    } else if (num === m) c += 1;
    else c -= 1;
  });
  return m;
}

export function majority2Element(nums: number[]): number[] {
    let thershold = Math.floor(nums.length / 3);
  let m1 = -1;
  let c1 = 0;
  let m2 = -1;
  let c2 = 0;
  nums.forEach((num) => {
    if (c1 === 0) {
      m1 = num;
      c1++;
    } else if (c2 === 0) {
      m2 = num;
      c2++;
    } else if (m1 === num) {
      c1 += 1;
    } else if (m2 === num) {
      c2 += 1;
    } else {
      c1 -= 1;
      c2 -= 1;
    }
  });
  const counts = nums.reduce(
    (acc, num) => ({ c1: acc.c1 + (num === m1 ? 1 : 0), c2: acc.c2 + (num === m2 ? 1 : 0) }),
    { c1: 0, c2: 0 }
  );
  let res = [];
  if (counts.c1  > thershold) res.push(m1);
  if (counts.c2  > thershold) res.push(m2);

  return res;
}
