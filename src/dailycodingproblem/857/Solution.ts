export const getDepth = (tree: string): number => {
  const chars = tree.split("");
  const [_, maxDepth] = chars.reduce(
    ([currDepth, maxDepth], char) => {
      let newDepth = currDepth;
      if (char === "(") newDepth = currDepth + 1;
      else if (char === ")") newDepth = currDepth - 1;
      const newMax = Math.max(newDepth, maxDepth);
      return [newDepth, newMax];
    },
    [0, 0]
  );
  return maxDepth;
};
