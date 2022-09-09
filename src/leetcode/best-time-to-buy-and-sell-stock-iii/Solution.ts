export function maxProfit(prices: number[]): number {
  const maxProfitUpTo: number[] = [];
  let lowestSoFar = prices[0];
  for (let i = 0; i < prices.length; i++) {
    const currProfit = prices[i] - lowestSoFar;
    const prevProfit = i > 0 ? maxProfitUpTo[i - 1] : 0;
    maxProfitUpTo.push(Math.max(currProfit, prevProfit));
    lowestSoFar = Math.min(lowestSoFar, prices[i]);
  }
  let highestSoFar = prices[prices.length - 1];
  let maxProfit = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    const maxProfitAfter = highestSoFar - prices[i];
    maxProfit = Math.max(maxProfit, maxProfitAfter + maxProfitUpTo[i]);
    highestSoFar = Math.max(highestSoFar, prices[i]);
  }
  return maxProfit;
}
