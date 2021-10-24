class Solution {
  private nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  private randomIndex(max: number): number {
    return Math.floor(Math.random() * max);
  }
  reset(): number[] {
    return this.nums;
  }

  shuffle(): number[] {
    let shuffled = [...this.nums];
    for (let i = 0; i < shuffled.length; i++) {
      const swapWith = this.randomIndex(i + 1);
      let tmp = shuffled[i];
      shuffled[i] = shuffled[swapWith];
      shuffled[swapWith] = tmp;
    }
    return shuffled;
  }
}

export { Solution };
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
