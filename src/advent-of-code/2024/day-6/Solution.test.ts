import { BIG, parseMap, SMALL } from "./input";
import { getNumberOfObstructions, predictPath } from "./Solution";

const MAP = `.#..
.>..
#...
..#.`;
describe("predictPath", () => {
  it("should work", () => {
    // expect(predictPath(parseMap(SMALL))).toBe(41);
    //
    //
    // console.time("start");
    // expect(predictPath(parseMap(BIG))).toBe(5199);
    // console.timeEnd("start");
    // expect(getNumberOfObstructions(parseMap(MAP))).toBe(2);
    // expect(getNumberOfObstructions(parseMap(SMALL))).toBe(6);
    expect(getNumberOfObstructions(parseMap(BIG))).toBe(6);
  });
});
