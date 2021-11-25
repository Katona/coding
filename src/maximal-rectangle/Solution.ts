export function maximalRectangle(matrix: string[][]): number {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const elementCount = rowCount * colCount;

  const onesTable: number[][] = [...Array(rowCount)].map((x) => Array(colCount).fill(0));

  for (let i = 0; i < elementCount; i++) {
    const row = Math.floor(i / colCount);
    const col = i % colCount;
    const top = row > 0 ? onesTable[row - 1][col] : 0;
    const left = col > 0 ? onesTable[row][col - 1] : 0;
    const topLeft = row > 0 && col > 0 ? onesTable[row - 1][col - 1] : 0;
    const onesCount = top + left - topLeft + Number(matrix[row][col]);
    onesTable[row][col] = onesCount;
  }

  let result = 0;

  for (let i = 0; i < elementCount; i++) {
    const row1 = Math.floor(i / colCount);
    const col1 = i % colCount;
    for (let row2 = row1; row2 < rowCount; row2++) {
      for (let col2 = col1; col2 < colCount; col2++) {
        const top = row1 > 0 ? onesTable[row1 - 1][col2] : 0;
        const left = col1 > 0 ? onesTable[row2][col1 - 1] : 0;
        const topLeft = row1 > 0 && col1 > 0 ? onesTable[row1 - 1][col1 - 1] : 0;
        const onesCount = onesTable[row2][col2] - left - top + topLeft;
        const elemCount = (row2 - row1 + 1) * (col2 - col1 + 1);
        if (onesCount === elemCount && onesCount > result) result = onesCount;
      }
    }
  }
  return result;
}

export function maximalRectangle2(matrix: string[][]): number {
  const columns = matrix.length > 0 ? matrix[0].length : 0;
  const heights = Array(columns).fill(0);
  const firstSmallerToLeft = Array(columns).fill(-1);
  const firstSmallerToRight = Array(columns).fill(columns);

  let result = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < columns; column++) {
      heights[column] = matrix[row][column] === '1' ? heights[column] + 1 : 0;
    }

    let rightMostZeroFromLeft = -1;
    for (let column = 0; column < columns; column++) {
      firstSmallerToLeft[column] = Math.max(firstSmallerToLeft[column], rightMostZeroFromLeft);
      if (matrix[row][column] === "0") {
        rightMostZeroFromLeft = column;
        firstSmallerToLeft[column] = -1;
      }
    }

    let leftMostZeroFromRight = columns;
    for (let column = columns; column >= 0; column--) {
      firstSmallerToRight[column] = Math.min(firstSmallerToRight[column], leftMostZeroFromRight);
      if (matrix[row][column] === "0") {
        leftMostZeroFromRight = column; 
        firstSmallerToRight[column] = columns;
      }
    }
    for (let column = 0; column < columns; column++) {
      const width = firstSmallerToRight[column] - firstSmallerToLeft[column] - 1;
      const area = heights[column] * width;
      result = Math.max(result, area);
    }
  }
  return result;
}