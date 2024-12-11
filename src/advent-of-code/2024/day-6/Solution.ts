const MARKER_TO_DIRECTION = {
  ">": [0, 1],
  v: [1, 0],
  "<": [0, -1],
  "^": [-1, 0],
} as const;

type DirectionMarkerType = keyof typeof MARKER_TO_DIRECTION;

const POSITION_MARKERS = Object.keys(MARKER_TO_DIRECTION);

const DIRECTIONS = [
  MARKER_TO_DIRECTION[">"],
  MARKER_TO_DIRECTION.v,
  MARKER_TO_DIRECTION["<"],
  MARKER_TO_DIRECTION["^"],
];

const getStartPosition = (map: string[][]) => {
  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row]!.length; column++) {
      if (POSITION_MARKERS.includes(map[row]![column]!)) return { row, column };
    }
  }
  throw new Error();
};

type Step = {
  row: number;
  column: number;
  directionIndex: number;
};
const getStartStep = (map: string[][]): Step => {
  let position = getStartPosition(map);
  const startDirection =
    MARKER_TO_DIRECTION[map[position.row]![position.column]! as DirectionMarkerType];
  let directionIndex = DIRECTIONS.indexOf(startDirection);
  return { ...position, directionIndex };
};
const getPath = (map: string[][], startStep: Step) => {
  let step = startStep;
  let path: Step[] = [];
  let visited = Array.from<number, number[]>(Array(map.length), () =>
    new Array(map[0]?.length).fill(-1),
  );
  while (true) {
    if (visited[step.row]![step.column] === step.directionIndex) {
      // console.log("Cycle!");
      // console.log(
      //   visited.map((line) => line.map((dir) => (dir === -1 ? "." : dir)).join("")).join("\n"),
      // );
      return undefined;
    }
    path.push(step);
    visited[step.row]![step.column] = step.directionIndex;

    const direction = DIRECTIONS[step.directionIndex]!;
    const nextPosition = {
      row: step.row + direction[0],
      column: step.column + direction[1],
    };
    const next = map[nextPosition.row]?.[nextPosition.column];
    if (next) {
      if (next === "#") {
        const newDirectionIndex = (step.directionIndex + 1) % DIRECTIONS.length;
        const newDirection = DIRECTIONS[newDirectionIndex]!;
        step = {
          row: step.row + newDirection[0],
          column: step.column + newDirection[1],
          directionIndex: newDirectionIndex,
        };
      } else {
        step = { ...step, ...nextPosition };
      }
    } else {
      break;
    }
  }
  // console.log(
  //   visited.map((line) => line.map((dir) => (dir === -1 ? "." : dir)).join("")).join("\n"),
  // );
  return path;
};

const predictPath = (map: string[][]) => {
  const step = getStartStep(map);
  const path = getPath(map, step);
  const distinctPositions = path?.reduce<Omit<Step, "directionIndex">[]>(
    (acc, curr) =>
      acc.find((step) => curr.row === step.row && curr.column === step.column)
        ? acc
        : [...acc, curr],
    [],
  );
  return distinctPositions?.length;
};

const hasObstructionToRight = (step: Step, map: string[][]) => {
  const directionToRight = DIRECTIONS[(step.directionIndex + 1) % DIRECTIONS.length]!;
  let nextPosition = {
    row: step.row + directionToRight[0],
    column: step.column + directionToRight[1],
  };
  while (true) {
    const next = map[nextPosition.row]?.[nextPosition.column];
    if (!next) break;
    if (next === "#") return true;
    nextPosition = {
      row: nextPosition.row + directionToRight[0],
      column: nextPosition.column + directionToRight[1],
    };
  }
  return false;
};
const getNumberOfObstructions = (map: string[][]) => {
  const startStep = getStartStep(map);
  const [, ...path] = getPath(map, startStep)!;
  const obstructions = path
    .map((step, index) => {
      // if (index > 100) return false;
      const direction = DIRECTIONS[step.directionIndex]!;
      let nextPosition = {
        row: step.row + direction[0],
        column: step.column + direction[1],
      };
      const next = map[nextPosition.row]?.[nextPosition.column];
      if (!next) return undefined;
      if (next !== ".") return undefined;
      const hasObstruction = hasObstructionToRight(step, map);
      if (!hasObstruction) return undefined;

      // console.log("Obstruction pos", { nextPosition });

      map[nextPosition.row]![nextPosition.column] = "#";
      const path = getPath(map, startStep);
      map[nextPosition.row]![nextPosition.column] = ".";
      return !path ? nextPosition : undefined;
    })
    .filter((e): e is Step => e !== undefined);
  const distinctObstruction = obstructions?.reduce<Omit<Step, "directionIndex">[]>(
    (acc, curr) =>
      acc.find((step) => curr.row === step.row && curr.column === step.column)
        ? acc
        : [...acc, curr],
    [],
  );
  return distinctObstruction.length;
};

export { predictPath, getNumberOfObstructions };
