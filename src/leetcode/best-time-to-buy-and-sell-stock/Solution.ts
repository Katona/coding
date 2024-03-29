export function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let boughtAt = 0;

  for (let i = 0; i < prices.length; i++) {
    let currentProfit = prices[i] - prices[boughtAt];
    maxProfit = Math.max(currentProfit, maxProfit);
    if (currentProfit < 0) boughtAt = i;
  }

  return maxProfit;
}

export const maxProfit2 = (prices: number[]): number => {
  let lowestPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - lowestPrice);
    lowestPrice = Math.min(lowestPrice, prices[i]);
  }
  return maxProfit;
};
