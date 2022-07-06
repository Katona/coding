import { countElements } from "./Solution";

describe("countElements", () => {
  it("should work", () => {
    const p = { row: 1, column: 1 };
    expect(
      countElements(p, p, [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toBe(8);
  });
  it("should work #2", () => {
    const p1 = { row: 1, column: 1 };
    const p2 = { row: 2, column: 2 };
    expect(
      countElements(p1, p2, [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ])
    ).toBe(6);
  });
  it("should work #3", () => {
    const p1 = { row: 1, column: 1 };
    const p2 = { row: 2, column: 2 };
    expect(
      countElements(p1, p2, [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ])
    ).toBe(10);
  });
  it("should work #4", () => {
    const p1 = { row: 1, column: 1 };
    const p2 = { row: 3, column: 3 };
    expect(
      countElements(p1, p2, [
        [1, 3, 7, 10, 15, 20],
        [2, 6, 9, 14, 22, 25],
        [3, 8, 10, 15, 25, 30],
        [10, 11, 12, 23, 30, 35],
        [20, 25, 30, 35, 40, 45],
      ])
    ).toBe(15);
  });
});
