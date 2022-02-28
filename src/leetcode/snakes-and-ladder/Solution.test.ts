import { minMoves } from "./Solution";

describe("minMoves", () => {
  it("should work", () => {
    expect(
      minMoves([
        [-1, -1],
        [-1, -1],
      ])
    ).toBe(1);
    expect(
      minMoves([
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, 16, -1],
      ])
    ).toBe(1);
    expect(
      minMoves([
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, 35, -1, -1, 13, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, 15, -1, -1, -1, -1],
      ])
    ).toBe(4);
    expect(
      minMoves([
        [-1, 1, 2, -1],
        [2, 13, 15, -1],
        [-1, 10, -1, -1],
        [-1, 6, 2, 8],
      ])
    ).toBe(2);
    expect(
      minMoves([
        [-1, -1, 30, 14, 15, -1],
        [23, 9, -1, -1, -1, 9],
        [12, 5, 7, 24, -1, 30],
        [10, -1, -1, -1, 25, 17],
        [32, -1, 28, -1, -1, 32],
        [-1, -1, 23, -1, 13, 19],
      ])
    ).toBe(2);
  });
});
