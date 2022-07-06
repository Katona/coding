export function searchMatrix(matrix: number[][], target: number): boolean {
  const search = (
    startRow: number,
    startColumn: number,
    endRow: number,
    endColumn: number
  ): boolean => {
    if (startRow > endRow || startColumn > endColumn) return false;

    const mRow = Math.floor((startRow + endRow) / 2);
    const mColumn = Math.floor((startColumn + endColumn) / 2);
    const mValue = matrix[mRow][mColumn];
    if (target === mValue) return true;
    else if (target < mValue) {
      return (
        search(startRow, startColumn, mRow - 1, endColumn) ||
        search(mRow, startColumn, endRow, mColumn - 1)
      );
    } else {
      // target > mValue
      return (
        search(mRow + 1, startColumn, endRow, endColumn) ||
        search(startRow, mColumn + 1, mRow, endColumn)
      );
    }
  };
  const rows = matrix.length;
  const columns = matrix[0].length;
  return search(0, 0, rows - 1, columns - 1);
}
