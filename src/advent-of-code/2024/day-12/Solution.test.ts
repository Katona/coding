import { BIG, parseInput, SMALL } from "./input";
import { getFenceCost, getFenceCost2, matchAnyRotations, _90, _90_2 } from "./Solution";

describe("getFenceCost", () => {
  it("should work", () => {
    expect(getFenceCost(parseInput(SMALL))).toBe(1930);
    expect(getFenceCost(parseInput(BIG))).toBe(1465968);
  });
});
describe("getFenceCost2", () => {
  it("should work", () => {
    expect(getFenceCost2(parseInput(SMALL))).toBe(1206);
    expect(getFenceCost2(parseInput(BIG))).toBe(897702);
  });
});
describe("match", () => {
  it("should work", () => {
    expect(matchAnyRotations({ row: 1, column: 2 }, parseInput(SMALL), _90_2.pattern)).toBe(false);
  });
});
