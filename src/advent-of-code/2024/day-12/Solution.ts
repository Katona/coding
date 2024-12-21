type Plot = {
  row: number;
  column: number;
};

const getNeighbors = (
  row: number,
  column: number,
  map: string[][],
): { row: number; column: number }[] => {
  return [
    { row: row - 1, column },
    { row: row + 1, column },
    { row, column: column - 1 },
    { row, column: column + 1 },
  ].filter((c) => map[c.row]?.[c.column] !== undefined);
};

const getRegion = (row: number, column: number, map: string[][], visited: boolean[][]): Plot[] => {
  let region: Plot[] = [];
  const queue: Plot[] = [{ row, column }];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (!curr) continue;
    if (visited[curr.row]?.[curr.column] === true) continue;
    visited[curr.row][curr.column] = true;
    region.push(curr);
    const neighbors = getNeighbors(curr.row, curr.column, map);
    queue.push(...neighbors.filter((n) => map[n.row][n.column] === map[row][column]));
  }
  return region;
};

const getPerimeter = (region: Plot[], map: string[][]): number => {
  const regionType = map[region[0].row][region[0].column];
  const perimeter = region.reduce(
    (perimeter, slot) =>
      perimeter +
      4 -
      getNeighbors(slot.row, slot.column, map).filter(
        (neighbor) => map[neighbor.row]?.[neighbor.column] === regionType,
      ).length,
    0,
  );
  return perimeter;
};

const getRegions = (map: string[][]): Plot[][] => {
  if (map.length === 0) return [];
  const visited = Array.from({ length: map.length }).map(() =>
    new Array<boolean>(map[0]!.length).fill(false),
  );
  let regions = [];

  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row].length; column++) {
      const region = getRegion(row, column, map, visited);
      if (region.length > 0) regions.push(region);
    }
  }
  return regions;
};

type PatternRow = [number | undefined, number | undefined, number | undefined];
type CornerPattern = [PatternRow, PatternRow, PatternRow];

type Corner = {
  pattern: CornerPattern;
  score: number;
};

const _90: Corner = {
  // prettier-ignore
  pattern: [
    [ , 0, ,],
    [0, 1, 1],
    [ , 1, 0],
  ],
  score: 2,
};

const _90_2: Corner = {
  // prettier-ignore
  pattern:[
  [ , 0, ,],
  [0, 1, 1],
  [ , 1, 1],
],
  score: 1,
};

const _180: Corner = {
  // prettier-ignore
  pattern: [
    [ , 0, ,],
    [0, 1, 1],
    [ , 0, ,],
  ],
  score: 2,
};

const _90_3: Corner = {
  pattern: [
    [1, 1, 0],
    [1, 1, 1],
    [, 0, ,],
  ],
  score: 1,
};
const _90_4: Corner = {
  pattern: [
    [1, 1, 0],
    [1, 1, 1],
    [1, 1, 1],
  ],
  score: 1,
};

const T: Corner = {
  pattern: [
    [, 0, ,],
    [1, 1, 1],
    [0, 1, 0],
  ],
  score: 2,
};
const T_2: Corner = {
  pattern: [
    [1, 1, 1],
    [1, 1, 1],
    [0, 1, 0],
  ],
  score: 2,
};

const PLUS: Corner = {
  pattern: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  score: 4,
};

const PLUS_2: Corner = {
  pattern: [
    [0, 1, 1],
    [1, 1, 1],
    [0, 1, 0],
  ],
  score: 3,
};
const PLUS_3: Corner = {
  pattern: [
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 0],
  ],
  score: 2,
};

const DOT: Corner = {
  pattern: [
    [, 0, ,],
    [0, 1, 0],
    [, 0, ,],
  ],
  score: 4,
};

const CORNERS = [_90, _90_2, _90_3, _90_4, _180, T, T_2, PLUS, PLUS_2, PLUS_3, DOT];

const rotate = (p: CornerPattern): CornerPattern => [
  [p[0][2], p[1][2], p[2][2]],
  [p[0][1], p[1][1], p[2][1]],
  [p[0][0], p[1][0], p[2][0]],
];

const getRotations = (
  p: CornerPattern,
): [CornerPattern, CornerPattern, CornerPattern, CornerPattern] => {
  const orig = p;
  const _90 = rotate(p);
  const _180 = rotate(_90);
  const _270 = rotate(_180);
  return [orig, _90, _180, _270];
};

const getMirrorImage = (p: CornerPattern): CornerPattern => [
  [p[0][2], p[0][1], p[0][0]],
  [p[1][2], p[1][1], p[1][0]],
  [p[2][2], p[2][1], p[2][0]],
];

const match = (plot: Plot, map: string[][], pattern: CornerPattern) => {
  const expectedValue = map[plot.row][plot.column];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const currValue = map[plot.row + i - 1]?.[plot.column + j - 1];
      const patternValue = pattern[i][j];
      if (patternValue === 1 && currValue !== expectedValue) return false;
      if (patternValue === 0 && currValue === expectedValue) return false;
    }
  }
  return true;
};
const matchAnyRotations = (plot: Plot, map: string[][], pattern: CornerPattern) => {
  const rotations = [...getRotations(pattern), ...getRotations(getMirrorImage(pattern))];
  return rotations.some((r) => match(plot, map, r));
};

const getFenceCost = (map: string[][]) => {
  const regions = getRegions(map);
  const cost = regions.reduce((acc, region) => acc + region.length * getPerimeter(region, map), 0);
  return cost;
};

const getSides = (region: Plot[], input: string[][]) => {
  const scores = region.map(
    (plot) =>
      CORNERS.find((c) => {
        const matched = matchAnyRotations(plot, input, c.pattern);
        return matched;
      })?.score ?? 0,
  );
  const sides = scores.reduce((acc, curr) => acc + curr);

  return sides;
};

const getFenceCost2 = (map: string[][]) => {
  const regions = getRegions(map);
  const cost = regions.reduce((acc, region) => acc + region.length * getSides(region, map), 0);
  return cost;
};

export { getFenceCost, getFenceCost2, match, matchAnyRotations, _90, _90_2, CORNERS };
