export const isLastReachable = (numbers: number[]): boolean => {
  const loop = (startIndex: number): boolean => {
    if (startIndex === numbers.length - 1) return true;
    const start = numbers[startIndex];
    for (let i = 1; i <= start; i++) {
      const lastReached = loop(startIndex + i);
      if (lastReached) return true;
    }
    return false;
  };
  return loop(0);
};

export const isLastReachableIter = (numbers: number[]): boolean => {
  let lastReachable = numbers.length - 1;
  for (let i = numbers.length - 1; i >= 0; i--) {
    const current = numbers[i];
    if (i + current >= lastReachable) lastReachable = i;
  }
  return lastReachable === 0;
};
