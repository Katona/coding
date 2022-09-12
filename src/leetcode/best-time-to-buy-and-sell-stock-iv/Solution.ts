export function maxProfit(k: number, prices: number[]): number {
  if (prices.length === 0) return 0;
  let cache: number[][] = [...Array(k + 1)].map((_) => Array(prices.length).fill(0));

  for (let n = 1; n <= k; n++) {
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
      min = Math.min(min, prices[i] - cache[n - 1][i - 1]);
      cache[n][i] = Math.max(cache[n][i - 1], prices[i] - min);
    }
  }
  return cache[k][prices.length - 1];
}
