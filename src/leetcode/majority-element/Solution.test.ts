import { majority2Element, majorityElement } from "./Solution";

describe("majorityElement", () => {
  it("should work", () => {
    expect(majorityElement([1, 2, 2])).toBe(2);
    expect(majorityElement([1, 2, 2, 1, 1])).toBe(1);
  });
});
describe("majority2Element", () => {
  it("should work", () => {
    expect(majority2Element([1, 2, 2])).toEqual([2]);
    expect(majority2Element([1, 2, 2, 1, 1])).toEqual([1, 2]);
    expect(majority2Element([1, 1, 2, 3, 1, 4, 5, 6])).toEqual([1]);
  });
});
