import { update } from "../../../dailycodingproblem/1609/Solution";

const getFirstIncorrectPosition = (
  position: number,
  rules: Record<number, Set<number>>,
  update: number[],
) => {
  const current = update[position];
  if (!current) throw Error();
  const after = update.slice(position + 1);
  const incorrectPosition = after.findIndex((afterElement) => !rules[current]?.has(afterElement));
  return incorrectPosition !== -1 ? incorrectPosition + position + 1 : -1;
};

const isCorrectReport = (rules: Record<number, Set<number>>, update: number[]) => {
  let result = true;
  for (let i = 0; i < update.length; i++) {
    result = result && getFirstIncorrectPosition(i, rules, update) === -1;
  }
  return result;
};

const swap = (array: number[], pos1: number, pos2: number) =>
  ([array[pos1], array[pos2]] = [array[pos2]!, array[pos1]!]);

const fixReport = (rules: Record<number, Set<number>>, update: number[]) => {
  let currentIndex = 0;
  let fixedReport = [...update];
  while (currentIndex < update.length) {
    const incorrectIndex = getFirstIncorrectPosition(currentIndex, rules, fixedReport);
    if (incorrectIndex === -1) currentIndex++;
    else swap(fixedReport, incorrectIndex, currentIndex);
  }
  return fixedReport;
};

const sumOfMiddles = (updates: number[][]) => {
  const middles = updates.map((u) => u[Math.floor(u.length / 2)]!);
  return middles.reduce((acc, curr) => acc + curr);
};

const fixReports = (rules: Record<number, Set<number>>, updates: number[][]) => {
  const fixedReports = updates
    .filter((updates) => !isCorrectReport(rules, updates))
    .map((u) => fixReport(rules, u));
  return sumOfMiddles(fixedReports);
};

const getValidReports = (rules: Record<number, Set<number>>, updates: number[][]): number => {
  const correctUpdates = updates.filter((update) => isCorrectReport(rules, update));
  return sumOfMiddles(correctUpdates);
};

export { getValidReports, fixReport, fixReports };
