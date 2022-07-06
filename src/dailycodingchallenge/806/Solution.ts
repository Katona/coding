type Point = {
  row: number;
  column: number;
};

export const countElements = (p1: Point, p2: Point, matrix: number[][]) => {
  return countSmallerElements(p1, matrix) + countGreaterElements(p2, matrix);
};

const countSmallerElements = (p: Point, matrix: number[][]) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const target = matrix[p.row][p.column];
  let currRow = 0;
  let currColumn = columns - 1;
  let result = 0;

  while (currColumn >= 0) {
    if (currRow < rows && matrix[currRow][currColumn] < target) {
      currRow++;
    } else {
      result += currRow;
      currColumn--;
    }
  }
  return 0;
};

const countGreaterElements = (p: Point, matrix: number[][]) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const target = matrix[p.row][p.column];
  let currRow = 0;
  let currColumn = columns - 1;
  let result = 0;

  while (currColumn >= 0) {
    if (currRow < rows && matrix[currRow][currColumn] <= target) {
      currRow++;
    } else {
      result += rows - currRow;
      currColumn--;
    }
  }
  return result;
};
