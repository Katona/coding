import { BIG, parseMap, SMALL } from "./input";
import { getAntinodeCount, getAntinodeCount2 } from "./Solution";

describe("getAntinodes", () => {
  it("should work", () => {
    expect(getAntinodeCount(parseMap(SMALL))).toBe(14);
    expect(getAntinodeCount(parseMap(BIG))).toBe(376);
  });
});

describe("getAntinodeCount2", () => {
  it("should work", () => {
    expect(getAntinodeCount2(parseMap(SMALL))).toBe(34);
    expect(getAntinodeCount2(parseMap(BIG))).toBe(1352);
  });
});
