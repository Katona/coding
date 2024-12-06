import getInput from "./input";
import { isSafeReport, safeReportCounts, safeReportCountsWithDampener } from "./Solution";

describe("isSafeReport", () => {
  it("should work", () => {
    expect(isSafeReport([1, 2, 3])).toBe(true);
    expect(isSafeReport([1, 2, 1])).toBe(false);
    expect(isSafeReport([1, 2, 6])).toBe(false);
    expect(isSafeReport([1, 1, 2])).toBe(false);
  });
  it("should work with the input", () => {
    expect(safeReportCounts(getInput())).toBe(371);
  });
});
describe("safeReportCountsWithDampener", () => {
  it("should work", () => {
    expect(safeReportCountsWithDampener([[1, 2, 3]])).toBe(1);
    expect(safeReportCountsWithDampener([[1, 2, 9, 3]])).toBe(1);
    expect(safeReportCountsWithDampener([[1, 2, 3, 9]])).toBe(1);
    expect(safeReportCountsWithDampener([[1, 2, 3, 9, 10]])).toBe(0);
    expect(safeReportCountsWithDampener(getInput())).toBe(426);
  });
});
