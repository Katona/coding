type Position = {
  row: number;
  column: number;
};

const getNeighbors = (input: number[][], pos: Position) => {
  let result = [];
  if (pos.row > 0) result.push({ row: pos.row - 1, column: pos.column });
  if (pos.row < input.length - 1) result.push({ row: pos.row + 1, column: pos.column });
  if (pos.column > 0) result.push({ row: pos.row, column: pos.column - 1 });
  if (pos.column < input[0]!.length - 1) result.push({ row: pos.row, column: pos.column + 1 });
  return result;
};

const getTrailTails = (input: number[][], pos: Position): Position[] => {
  const value = input[pos.row]![pos.column]!;
  if (value === 9) return [pos];

  const neighbors = getNeighbors(input, pos);
  const allTails = neighbors
    .filter((n) => input[n.row]![n.column] === value + 1)
    .reduce<Position[]>((acc, neighbor) => [...getTrailTails(input, neighbor), ...acc], []);
  return allTails;
};

const getTrailHeads = (input: number[][]) => {
  return input
    .flatMap((_, row) => input[row]!.map((_, column) => ({ row, column })))
    .filter(({ row, column }) => input[row]![column] === 0);
};

const distinctPositions = (acc: Position[], pos: Position) =>
  acc.some((p) => p.row === pos.row && p.column === pos.column) ? acc : [...acc, pos];

const getTrailHeadScores = (input: number[][]) => {
  const allTrailTails = getTrailHeads(input).reduce<Position[]>(
    (acc, pos) => [...getTrailTails(input, pos).reduce<Position[]>(distinctPositions, []), ...acc],
    [],
  );
  return allTrailTails.length;
};

const getTrailHeadScores2 = (input: number[][]) => {
  const allTrailTails = getTrailHeads(input).reduce<Position[]>(
    (acc, pos) => [...getTrailTails(input, pos), ...acc],
    [],
  );
  return allTrailTails.length;
};

export { getTrailHeadScores, getTrailHeadScores2 };
