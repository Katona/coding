import { BIG, parseMap, SMALL } from "./input";
import { getTrailHeadScores, getTrailHeadScores2 } from "./Solution";

describe("getTrailHeadScores", () => {
  it("should work", () => {
    expect(getTrailHeadScores([[0]])).toBe(0);
    expect(getTrailHeadScores([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]])).toBe(1);
    expect(
      getTrailHeadScores([
        [0, 1, 2, 3, 4],
        [9, 8, 7, 6, 5],
      ]),
    ).toBe(1);
    expect(getTrailHeadScores(parseMap(SMALL))).toBe(36);
    expect(getTrailHeadScores2(parseMap(SMALL))).toBe(81);
    expect(getTrailHeadScores(parseMap(BIG))).toBe(566);
    expect(getTrailHeadScores2(parseMap(BIG))).toBe(1324);
  });
});
