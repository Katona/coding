const factorial = (num: number) => {
  if (num === 0 || num === 1) {
    return BigInt(1);
  }
  let result = BigInt(1);
  for (let i = 2; i <= num; i++) {
    result = result * BigInt(i);
  }
  return result;
};
const isSafe = (n: number) => {
  if (n > Number.MAX_SAFE_INTEGER) throw new Error("!Unsafe");
};

const binomialCoefficient = (n: number, k: number) => {
  if (k < 0 || k > n) {
    throw new Error("k must be between 0 and n");
  }
  const divider = factorial(k) * factorial(n - k);

  return factorial(n) / divider;
};
const pow = (base: number, exponent: number) => {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = (result * base) % 1000000007;
    isSafe(result);
  }
  return result;
};

const allPossibleLists = (n: number, goal: number, k: number) => {
  const a = factorial(n) / factorial(n - k);
  const b = BigInt(n - k) ** BigInt(goal - k);
  const all = a * b;
  return all;
};

const numMusicPlaylists = (n: number, goal: number, k: number): number => {
  let result = BigInt(0);
  let sign = BigInt(1);
  for (let i = n; i > k; i--) {
    const listsWithoutElements = allPossibleLists(i, goal, k);
    const listCountWithoutElements = binomialCoefficient(n, i);
    result = result + listsWithoutElements * listCountWithoutElements * sign;
    sign = -sign;
  }
  return Number(result % BigInt(1000000007));
};

export { numMusicPlaylists };
