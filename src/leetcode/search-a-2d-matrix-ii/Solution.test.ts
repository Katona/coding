import { searchMatrix } from "./Solution";

describe("searchMatrix", () => {
  it("should work for 1x1 matrices", () => {
    expect(searchMatrix([[1]], 1)).toBe(true);
    expect(searchMatrix([[1]], 2)).toBe(false);
    expect(
      searchMatrix(
        [
          [1, 2],
          [3, 4],
        ],
        2
      )
    ).toBe(true);
    expect(
      searchMatrix(
        [
          [1, 2],
          [3, 4],
        ],
        4
      )
    ).toBe(true);
    expect(
      searchMatrix(
        [
          [1, 2],
          [3, 4],
        ],
        5
      )
    ).toBe(false);
  });
  it("should work for 2x2 matrices", () => {
    expect(
      searchMatrix(
        [
          [1, 2],
          [3, 4],
        ],
        2
      )
    ).toBe(true);
    expect(
      searchMatrix(
        [
          [1, 2],
          [3, 4],
        ],
        4
      )
    ).toBe(true);
    expect(
      searchMatrix(
        [
          [1, 2],
          [3, 4],
        ],
        1
      )
    ).toBe(true);
    expect(
      searchMatrix(
        [
          [1, 2],
          [3, 4],
        ],
        3
      )
    ).toBe(true);
    expect(
      searchMatrix(
        [
          [1, 2],
          [3, 4],
        ],
        0
      )
    ).toBe(false);
    expect(
      searchMatrix(
        [
          [1, 2],
          [3, 4],
        ],
        5
      )
    ).toBe(false);
  });
  it("should work for 3x3 matrices", () => {
    expect(
      searchMatrix(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        6
      )
    ).toBe(true);
    expect(
      searchMatrix(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        1
      )
    ).toBe(true);
    expect(
      searchMatrix(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        10
      )
    ).toBe(false);
  });
});
