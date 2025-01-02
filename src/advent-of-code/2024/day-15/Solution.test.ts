import { BIG, MEDIUM, parseInput, SMALL } from "./input";
import { getSumOfCoordinates } from "./Solution";

describe("getSumOfCoordinates", () => {
  it("should work", () => {
    expect(
      getSumOfCoordinates(
        [
          ["wall", "wall", "wall", "wall", "wall"],
          ["wall", "empty", "empty", "empty", "wall"],
          ["wall", "empty", "box", "empty", "wall"],
          ["wall", "empty", "empty", "empty", "wall"],
          ["wall", "wall", "wall", "wall", "wall"],
        ],
        { row: 3, column: 3 },
        ["up", "left", "left", "up"],
      ),
    ).toBe(201);
  });

  it("should work #2", () => {
    expect(
      getSumOfCoordinates(
        [
          ["wall", "wall", "wall", "wall", "wall"],
          ["wall", "empty", "empty", "empty", "wall"],
          ["wall", "box", "box", "empty", "wall"],
          ["wall", "empty", "empty", "empty", "wall"],
          ["wall", "wall", "wall", "wall", "wall"],
        ],
        { row: 3, column: 3 },
        ["up", "left", "left", "up"],
      ),
    ).toBe(403);
  });
  it("should work #3", () => {
    expect(
      getSumOfCoordinates(
        [
          ["wall", "wall", "wall", "wall", "wall", "wall"],
          ["wall", "empty", "box", "box", "empty", "wall"],
          ["wall", "wall", "wall", "wall", "wall", "wall"],
        ],
        { row: 1, column: 4 },
        ["left", "left"],
      ),
    ).toBe(203);
  });
  it("should work for small input", () => {
    const { warehouse, directions } = parseInput(SMALL);
    expect(getSumOfCoordinates(warehouse.warehouse, warehouse.start, directions)).toBe(2028);
  });

  it("should work for medium input", () => {
    const { warehouse, directions } = parseInput(MEDIUM);
    expect(getSumOfCoordinates(warehouse.warehouse, warehouse.start, directions)).toBe(10092);
  });
  it("should work for big input", () => {
    const { warehouse, directions } = parseInput(BIG);
    expect(getSumOfCoordinates(warehouse.warehouse, warehouse.start, directions)).toBe(10092);
  });
});
