import { BIG, parseInput, SMALL } from "./input";
import { fixReport, fixReports, getValidReports } from "./Solution";

const input = parseInput(SMALL.RULES, SMALL.UPDATES);
const bigInput = parseInput(BIG.RULES, BIG.UPDATES);

describe("solution", () => {
  it("should work", () => {
    expect(getValidReports(input.rules, input.updates)).toBe(143);
    expect(getValidReports(bigInput.rules, bigInput.updates)).toBe(4766);
  });
});

describe("fixReport", () => {
  it("should work", () => {
    expect(fixReport(input.rules, [61, 13, 29])).toEqual([61, 29, 13]);
    expect(fixReport(input.rules, [75, 97, 47, 61, 53])).toEqual([97, 75, 47, 61, 53]);
    expect(fixReport(input.rules, [97, 13, 75, 29, 47])).toEqual([97, 75, 47, 29, 13]);
  });
});

describe("fixReports", () => {
  it("should work", () => {
    expect(fixReports(input.rules, input.updates)).toBe(123);
    expect(fixReports(bigInput.rules, bigInput.updates)).toBe(6257);
  });
});
