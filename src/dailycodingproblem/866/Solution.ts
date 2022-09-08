export const getMaxProfit = (prices: number[], k: number) => {
  const loop = (start: number, end: number, k: number): number => {
    if (k === 0) return 0;
    let maxStock = prices[end];
    let maxProfit = 0;
    for (let i = end; i > start; i--) {
      maxStock = Math.max(maxStock, prices[i]);
      maxProfit = Math.max(maxProfit, maxStock - prices[i] + loop(start, i, k - 1));
    }
    return maxProfit;
  };
  return loop(0, prices.length - 1, k);
};
