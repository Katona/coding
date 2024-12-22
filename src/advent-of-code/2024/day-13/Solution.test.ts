import { BIG, parseInput, SMALL } from "./input";
import {
  getSmallestToken,
  getSmallestTokenForMachine,
  getSmallestTokenForMachine2,
} from "./Solution";

describe("getSmallestTokenForMachine", () => {
  it("should work", () => {
    expect(
      getSmallestTokenForMachine({
        buttonA: { dx: 94, dy: 34 },
        buttonB: { dx: 22, dy: 67 },
        prize: { x: 8400, y: 5400 },
      }),
    ).toBe(280);
    expect(
      getSmallestTokenForMachine({
        buttonA: { dx: 26, dy: 66 },
        buttonB: { dx: 67, dy: 21 },
        prize: { x: 12748, y: 12176 },
      }),
    ).toBe(Number.MAX_VALUE);
    expect(
      getSmallestTokenForMachine({
        buttonA: { dx: 17, dy: 86 },
        buttonB: { dx: 84, dy: 37 },
        prize: { x: 7870, y: 6450 },
      }),
    ).toBe(200);
    expect(
      getSmallestTokenForMachine({
        buttonA: { dx: 69, dy: 23 },
        buttonB: { dx: 27, dy: 71 },
        prize: { x: 18641, y: 10279 },
      }),
    ).toBe(Number.MAX_VALUE);
  });
});
describe("getSmallestTokenForMachine2", () => {
  it("should work", () => {
    expect(
      getSmallestTokenForMachine2({
        buttonA: { dx: 42, dy: 27 },
        buttonB: { dx: 22, dy: 67 },
        prize: { x: 84, y: 54 },
      }),
    ).toBe(6);
    expect(
      getSmallestTokenForMachine2({
        buttonA: { dx: 94, dy: 34 },
        buttonB: { dx: 22, dy: 67 },
        prize: { x: 8400, y: 5400 },
      }),
    ).toBe(280);
    expect(
      getSmallestTokenForMachine2({
        buttonA: { dx: 26, dy: 66 },
        buttonB: { dx: 67, dy: 21 },
        prize: { x: 12748, y: 12176 },
      }),
    ).toBe(Number.MAX_VALUE);
    expect(
      getSmallestTokenForMachine2({
        buttonA: { dx: 17, dy: 86 },
        buttonB: { dx: 84, dy: 37 },
        prize: { x: 7870, y: 6450 },
      }),
    ).toBe(200);
    expect(
      getSmallestTokenForMachine2({
        buttonA: { dx: 69, dy: 23 },
        buttonB: { dx: 27, dy: 71 },
        prize: { x: 18641, y: 10279 },
      }),
    ).toBe(Number.MAX_VALUE);
  });
});

describe("getSmallestToken", () => {
  it("part 1", () => {
    // expect(getSmallestToken({ dx: 94, dy: 34 }, { dx: 22, dy: 67 }, { x: 1880, y: 1360 })).toBe(
    //   280,
    // );
    // expect(getSmallestToken(parseInput(SMALL))).toBe(480);
    expect(getSmallestToken(parseInput(BIG), getSmallestTokenForMachine2)).toBe(35997);
    // parseInput(SMALL);
  });
  it("part 2", () => {
    // expect(getSmallestToken({ dx: 94, dy: 34 }, { dx: 22, dy: 67 }, { x: 1880, y: 1360 })).toBe(
    //   280,
    // );
    // expect(getSmallestToken(parseInput(SMALL))).toBe(480);
    expect(
      getSmallestToken(
        parseInput(BIG).map((m) => ({
          ...m,
          prize: { x: m.prize.x + 10000000000000, y: m.prize.y + 10000000000000 },
        })),
        getSmallestTokenForMachine2,
      ),
    ).toBe(82510994362072);
    // parseInput(SMALL);
  });
});
