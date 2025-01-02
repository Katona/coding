type Tile = "empty" | "wall" | "box";

type Warehouse = Tile[][];
type Direction = "up" | "right" | "down" | "left";
type Position = {
  row: number;
  column: number;
};

const DELTAS = {
  up: { row: -1, column: 0 },
  right: { row: 0, column: 1 },
  down: { row: +1, column: 0 },
  left: { row: 0, column: -1 },
} as const;

const moveTile = (from: Position, to: Position, warehouse: Warehouse) => {
  warehouse[to.row][to.column] = warehouse[from.row][from.column];
  warehouse[from.row][from.column] = "empty";
};

const push = (pos: Position, direction: Direction, warehouse: Warehouse) => {
  if (warehouse[pos.row][pos.column] === "wall") return false;
  const delta = DELTAS[direction];
  const nextPos: Position = {
    row: pos.row + delta.row,
    column: pos.column + delta.column,
  };
  if (warehouse[nextPos.row][nextPos.column] !== "empty") {
    const pushed = push(nextPos, direction, warehouse);
    if (!pushed) return false;
  }
  moveTile(pos, nextPos, warehouse);
  return true;
};
const move = (pos: Position, direction: Direction, warehouse: Warehouse): Position => {
  const delta = DELTAS[direction];
  const nextPos: Position = {
    row: pos.row + delta.row,
    column: pos.column + delta.column,
  };
  if (warehouse[nextPos.row][nextPos.column] === "empty") return nextPos;
  const pushed = push(nextPos, direction, warehouse);
  if (pushed) return nextPos;
  else return pos;
};

const getBoxCoordinates = (warehouse: Warehouse) => {
  let result: Position[] = [];
  for (let row = 0; row < warehouse.length; row++) {
    for (let column = 0; column < warehouse[row].length; column++) {
      if (warehouse[row][column] === "box") result.push({ row, column });
    }
  }
  return result;
};

const getSumOfCoordinates = (warehouse: Warehouse, start: Position, directions: Direction[]) => {
  let pos = start;
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const nextPos = move(pos, direction, warehouse);
    pos = nextPos;
  }
  const result = getBoxCoordinates(warehouse).reduce(
    (acc, pos) => acc + pos.row * 100 + pos.column,
    0,
  );
  return result;
};

export { getSumOfCoordinates };
export type { Tile, Warehouse, Direction };
