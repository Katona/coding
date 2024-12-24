import { SMALL, parseInput, BIG } from "./input";
import {
  calculateSafetyFactor,
  getChristmasTreeTime,
  getMaxConsequtiveRobotCountRow,
  groupRobots,
  isChristmasTree,
  moveRobots,
} from "./Solution";

describe("moveRobots", () => {
  it("should work", () => {
    expect(moveRobots([{ x: 2, y: 4, dx: 2, dy: -3 }], 5, 11, 7)).toEqual([
      { x: 1, y: 3, dx: 2, dy: -3 },
    ]);
  });
});

describe("groupRobots", () => {
  it("should work", () => {
    expect(groupRobots([{ x: 4, y: 4, dx: 2, dy: -3 }], 11, 7)).toEqual({ bottom_left: 1 });
    expect(groupRobots([{ x: 4, y: 2, dx: 2, dy: -3 }], 11, 7)).toEqual({ top_left: 1 });
    expect(groupRobots([{ x: 6, y: 2, dx: 2, dy: -3 }], 11, 7)).toEqual({ top_right: 1 });
    expect(groupRobots([{ x: 6, y: 4, dx: 2, dy: -3 }], 11, 7)).toEqual({ bottom_right: 1 });

    expect(groupRobots([{ x: 5, y: 4, dx: 2, dy: -3 }], 11, 7)).toEqual({});
    expect(groupRobots([{ x: 6, y: 3, dx: 2, dy: -3 }], 11, 7)).toEqual({});
  });
});

describe("calculateSafetyFactor", () => {
  it("should work", () => {
    expect(calculateSafetyFactor(parseInput(SMALL), 100, 11, 7)).toBe(12);
    expect(calculateSafetyFactor(parseInput(BIG), 100, 101, 103)).toBe(229868730);
  });
});

describe("getChristmasTreeTime", () => {
  it("should work", () => {
    expect(getChristmasTreeTime(parseInput(BIG), 101, 103)).toEqual(50);
  });
});

describe("isChristmasTree", () => {
  it("should work", () => {
    expect(
      isChristmasTree(
        [
          [0, 1, 0],
          [1, 0, 1],
        ],
        [
          { x: 0, y: 1, dx: 0, dy: 0 },
          { x: 2, y: 1, dx: 0, dy: 0 },
          { x: 1, y: 0, dx: 0, dy: 0 },
        ],
      ),
    ).toBe(true);
  });
});

describe("getConsequtiveRobotCountInRow", () => {
  it("should work", () => {
    expect(getMaxConsequtiveRobotCountRow([1, 0, 1])).toBe(1);
    expect(getMaxConsequtiveRobotCountRow([1, 1, 1])).toBe(3);
    expect(getMaxConsequtiveRobotCountRow([1, 1, 0])).toBe(2);
    expect(getMaxConsequtiveRobotCountRow([0, 1, 1])).toBe(2);
  });
});
