const getDigits = (num: number) => {
  let digits = [];
  let currentNum = num;
  while (currentNum > 0) {
    digits.push(currentNum % 10);
    currentNum = Math.floor(currentNum / 10);
  }
  return digits.reverse();
};
export const largestPossibleInteger = (nums: number[]) => {
  const sortedNums = nums.sort((a, b) => {
    const digitsA = getDigits(a);
    const digitsB = getDigits(b);
    let i = 0;
    while (i < Math.min(digitsA.length, digitsB.length) && digitsA[i] === digitsB[i]) i++;
    if (i < digitsA.length && i < digitsB.length) return digitsA[i] - digitsB[i];
    if (i < digitsA.length) return digitsA[i] - digitsA[i - 1];
    else return digitsB[i] - digitsB[i - 1];
  });
  return sortedNums;
};
