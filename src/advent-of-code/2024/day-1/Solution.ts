const compareNumber = (a: number, b: number) => a - b;
const getDistance = (list1: number[], list2: number[]): number => {
  list1.sort(compareNumber);
  list2.sort(compareNumber);

  let diff = 0;
  for (let i = 0; i < Math.max(list1.length, list2.length); i++) {
    const e1 = list1[i] ?? 0;
    const e2 = list2[i] ?? 0;
    diff += Math.abs(e1 - e2);
  }
  return diff;
};
const getSimilarity = (list1: number[], list2: number[]): number => {
  let similarity = 0;
  for (let i = 0; i < list1.length; i++) {
    const e1 = list1[i] ?? 0;
    const frequency = list2.filter((e2) => e2 === e1).length;
    similarity = similarity + e1 * frequency;
  }
  return similarity;
};

export { getDistance, getSimilarity };
