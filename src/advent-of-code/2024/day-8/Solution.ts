type Pos = { row: number; column: number };

const getAntinodePair = (posA: Pos, posB: Pos, map: string[][]): Pos[] => {
  const difference = {
    row: posA.row - posB.row,
    column: posA.column - posB.column,
  };
  const result = [
    { row: posA.row + difference.row, column: posA.column + difference.column },
    { row: posB.row - difference.row, column: posB.column - difference.column },
  ];
  return result.filter((n) => isPositionInBounds(n, map));
};

const isPositionInBounds = (p: Pos, map: string[][]) => {
  return p.row >= 0 && p.row < map.length && p.column >= 0 && p.column < map[0]!.length;
};

const getAntinodesInLine = (posA: Pos, posB: Pos, map: string[][]): Pos[] => {
  const difference = {
    row: posA.row - posB.row,
    column: posA.column - posB.column,
  };
  let result: Pos[] = [];
  let position = posA;
  while (isPositionInBounds(position, map)) {
    result.push(position);
    position = { row: position.row + difference.row, column: position.column + difference.column };
  }
  position = posB;
  while (isPositionInBounds(position, map)) {
    result.push(position);
    position = { row: position.row - difference.row, column: position.column - difference.column };
  }
  return result;
};

type GetAntinodes = (a: Pos, b: Pos, map: string[][]) => Pos[];

const getAllAntinodes = (map: string[][], getAntinodes: GetAntinodes) => {
  let antennaPositions = [];
  let result: Pos[] = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i]!.length; j++) {
      if (map[i]?.[j] !== ".") antennaPositions.push({ row: i, column: j });
    }
  }
  for (let i = 0; i < antennaPositions.length - 1; i++) {
    for (let j = i + 1; j < antennaPositions.length; j++) {
      const posA = antennaPositions[i]!;
      const posB = antennaPositions[j]!;
      const a = map[posA.row]?.[posA.column];
      const b = map[posB.row]?.[posB.column];
      if (a === b) {
        result.push(...getAntinodes(posA, posB, map));
      }
    }
  }
  const distinctAntinodes = result.reduce(
    (acc, node) =>
      acc.some((n) => n.row === node.row && n.column === node.column) ? acc : [...acc, node],
    [] as Pos[],
  );
  return distinctAntinodes;
};

const getAntinodeCount = (map: string[][]) => {
  return getAllAntinodes(map, getAntinodePair).length;
};

const getAntinodeCount2 = (map: string[][]) => {
  return getAllAntinodes(map, getAntinodesInLine).length;
};

export { getAntinodeCount, getAntinodeCount2 };
