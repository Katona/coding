import { BIG, parseInput, SMALL } from "./input";
import { isPossible, sumOfPossibles } from "./Solution";

describe("isPossible", () => {
  it("should work", () => {
    // expect(isPossible(190, [19, 10])).toBe(true);
    expect(isPossible(3267, [81, 40, 27])).toBe(true);
  });
});

describe("sumOfPossibles", () => {
  it("should work", () => {
    expect(sumOfPossibles(parseInput(SMALL))).toBe(11387);
    expect(sumOfPossibles(parseInput(BIG))).toBe(204976636995111);
  });
});
