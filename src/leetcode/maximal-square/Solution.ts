function maximalSquare(matrix: string[][]): number {
  let cache = Array.from(Array(matrix.length), () => new Array<number>(matrix[0].length));
  let maximalSquare = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const leftSquare = cache[i][j - 1] ?? 0;
      const topLeftSquare = cache[i - 1]?.[j - 1] ?? 0;
      const topSquare = cache[i - 1]?.[j] ?? 0;
      if (matrix[i][j] === "1") {
        cache[i][j] = Math.min(leftSquare, topLeftSquare, topSquare) + 1;
      } else {
        cache[i][j] = 0;
      }
      maximalSquare = Math.max(maximalSquare, cache[i][j]);
    }
  }
  return maximalSquare ** 2;
}

export { maximalSquare };
