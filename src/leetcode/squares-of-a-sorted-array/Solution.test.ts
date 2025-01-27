import { sortedSquares } from "./Solution";

describe("sortedSquares", () => {
  it("should work", () => {
    expect(sortedSquares([0, 1, 2, 3])).toEqual([0, 1, 4, 9]);
    expect(sortedSquares([-3, -2, -1, 0])).toEqual([0, 1, 4, 9]);
    expect(sortedSquares([-4, -2, 0, 1, 3, 5])).toEqual([0, 1, 4, 9, 16, 25]);
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });
});
