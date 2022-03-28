export function trap(height: number[]): number {
  const sumWater = (
    height: number[],
    cmpFun: (a: number, b: number) => boolean = (a, b) => a >= b
  ): number => {
    let result = 0;
    let start = 0;
    let groundSum = 0;
    for (let i = 1; i < height.length; i++) {
      if (cmpFun(height[i], height[start])) {
        const waterLevel = Math.min(height[i], height[start]);
        const trappedAmount = waterLevel * (i - start - 1) - groundSum;
        result += trappedAmount;
        groundSum = 0;
        start = i;
      } else {
        groundSum += height[i];
      }
    }
    return result;
  };
  return sumWater(height, (a, b) => a > b) + sumWater([...height].reverse());
}

export function trap2(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let result = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left += 1;
      leftMax = Math.max(leftMax, height[left]);
      result += leftMax - height[left];
    } else {
      right -= 1;
      rightMax = Math.max(rightMax, height[right]);
      result += rightMax - height[right];
    }
  }
  return result;
}
