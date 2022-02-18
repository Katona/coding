export function numSquares(n: number): number {
  const loop = (n: number, cache: Record<number, number> = {}) => {
    if (n <= 0) return 0;
    if (cache[n] != undefined) return cache[n];

    let result = Number.MAX_VALUE;
    for (let i = 1; i * i <= n; i++) {
      result = Math.min(result, 1 + loop(n - i * i, cache));
    }
    cache[n] = result;
    return result;
  };

  return loop(n);
}
