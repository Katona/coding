import { maximalSquare } from "./Solution";

describe("maximalSquare", () => {
  it("should work", () => {
    expect(maximalSquare([])).toBe(0);
    expect(maximalSquare([["0"]])).toBe(0);
    expect(maximalSquare([["1"]])).toBe(1);
    expect(
      maximalSquare([
        ["1", "1"],
        ["1", "1"],
      ]),
    ).toBe(4);
    expect(
      maximalSquare([
        ["1", "1"],
        ["1", "0"],
      ]),
    ).toBe(1);
  });

  it("should work with bigger data", () => {
    expect(
      maximalSquare([
        ["1", "0", "0", "1", "1"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ]),
    ).toBe(4);
    expect(
      maximalSquare([
        ["1", "0", "1", "0", "0"],
        ["1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "0"],
      ]),
    ).toBe(9);
    expect(
      maximalSquare([
        ["1", "0", "1", "1", "1"],
        ["0", "1", "1", "1", "1"],
        ["0", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "0"],
      ]),
    ).toBe(9);
  });
});
