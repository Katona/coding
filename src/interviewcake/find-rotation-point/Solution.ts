const findRotationPoint = (words: Array<string>, start = 0, end = words.length - 1): number => {
  const first = words.at(start);
  const last = words.at(end);
  if (!first || !last) return 0;
  if (first.localeCompare(last) !== 1) {
    console.log("not rotated", { first, last });
    return 0;
  }
  console.log("rotated");
  const middle = Math.floor((start + end) / 2);
  const rotationPoint =
    findRotationPoint(words, start, middle) || findRotationPoint(words, middle + 1, end);
  return rotationPoint === 0 ? middle + 1 : rotationPoint;
};

export default findRotationPoint;
