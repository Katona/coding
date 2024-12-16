import { BIG, parseInput, SMALL } from "./input";
import { getFsChecksum, getFsChecksum2, uncompress } from "./Solution";

describe("uncompress", () => {
  it("should work", () => {
    expect(uncompress(parseInput(SMALL))).toEqual([]);
  });
});
describe("getFsChecksum", () => {
  it("should work", () => {
    expect(getFsChecksum(parseInput(SMALL))).toEqual(1928);
    expect(getFsChecksum(parseInput(BIG))).toEqual(1928);
  });
});

describe("getFsChecksum2", () => {
  it("should work", () => {
    expect(getFsChecksum2(parseInput(SMALL))).toEqual(2858);
    expect(getFsChecksum2(parseInput(BIG))).toEqual(1928);
  });
});
