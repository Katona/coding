const getPossibleResults = (numbers: number[]): number[] => {
  const [first, ...rest] = numbers;
  if (numbers.length === 1) return [numbers[0]!];
  const subResults = getPossibleResults(rest);
  return subResults.flatMap((r) => [
    r + first!,
    r * first!,
    Number(r.toString() + first?.toString()),
  ]);
};

const isPossible = (result: number, numbers: number[]) => {
  const possibleResults = getPossibleResults(numbers.reverse());
  return possibleResults.includes(result);
};

const sumOfPossibles = (input: { result: number; numbers: number[] }[]) => {
  return input
    .filter((i) => isPossible(i.result, i.numbers))
    .reduce((sum, curr) => sum + curr.result, 0);
};

export { isPossible, sumOfPossibles };
