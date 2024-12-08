type Direction = { move: (i: number, j: number) => { i: number; j: number } };

const UP: Direction = {
  move: (i, j) => ({ i: i - 1, j }),
};
const UP_LEFT: Direction = {
  move: (i, j) => ({ i: i - 1, j: j - 1 }),
};
const LEFT: Direction = {
  move: (i, j) => ({ i, j: j - 1 }),
};
const LEFT_DOWN: Direction = {
  move: (i, j) => ({ i: i + 1, j: j - 1 }),
};
const DOWN: Direction = {
  move: (i, j) => ({ i: i + 1, j }),
};
const DOWN_RIGHT: Direction = {
  move: (i, j) => ({ i: i + 1, j: j + 1 }),
};
const RIGHT: Direction = {
  move: (i, j) => ({ i, j: j + 1 }),
};
const UP_RIGHT: Direction = {
  move: (i, j) => ({ i: i - 1, j: j + 1 }),
};

const DIRECTIONS: Direction[] = [UP, UP_LEFT, LEFT, LEFT_DOWN, DOWN, DOWN_RIGHT, RIGHT, UP_RIGHT];

const getWords = (puzzle: string[][], i: number, j: number) => {
  return DIRECTIONS.map((dir) => {
    let char: string | undefined = puzzle[i]?.[j];
    let pos = { i, j };
    let word = "";
    while (char && word.length < 4) {
      word += char;
      pos = dir.move(pos.i, pos.j);
      char = puzzle[pos.i]?.[pos.j];
    }
    return word;
  });
};
const getXmasCount = (puzzle: string[][]) => {
  let totalCount = 0;
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < (puzzle[i]?.length ?? 0); j++) {
      const words = getWords(puzzle, i, j);
      totalCount = totalCount + words.filter((word) => word === "XMAS").length;
    }
  }
  return totalCount;
};

const isX_MAS = (puzzle: string[][], i: number, j: number) => {
  const diag1 = [puzzle[i - 1]?.[j - 1], puzzle[i]?.[j], puzzle[i + 1]?.[j + 1]]
    .filter((i) => i)
    .join("");
  const diag2 = [puzzle[i - 1]?.[j + 1], puzzle[i]?.[j], puzzle[i + 1]?.[j - 1]]
    .filter((i) => i)
    .join("");
  return (
    diag1.length === 3 &&
    diag2.length === 3 &&
    (diag1 === "MAS" || diag1 === "SAM") &&
    (diag2 === "MAS" || diag2 === "SAM")
  );
};

const getX_MASCount = (puzzle: string[][]) => {
  let totalCount = 0;
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < (puzzle[i]?.length ?? 0); j++) {
      if (isX_MAS(puzzle, i, j)) totalCount = totalCount + 1;
    }
  }
  return totalCount;
};

export { getXmasCount, getX_MASCount };
