export function numRollsToTarget(d: number, f: number, target: number): number {
  const cache: any = {};

  const loop = (d: number, target: number) => {
    if (d === 0 && target === 0) return 1;
    else if (target < 0 || d < 0) return 0;
    const key = d * 1000 + target;
    if (cache[key] != null) {
        return cache[key];
    }
    let result = 0;
    for (let i = 1; i <= f; i++) {
      result = (result + loop(d - 1, target - i)) % 1000000007;
    }
    cache[key] = result;
    return result;
  };
  const result = loop(d, target);
  return result;
}
