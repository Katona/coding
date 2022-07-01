import { getSevenishNumber, getSevenishNumber2 } from "./Solution";

describe("getSevenishNumber", () => {
  it("should work", () => {
    expect(getSevenishNumber(1)).toBe(1);
    expect(getSevenishNumber(2)).toBe(7);
    expect(getSevenishNumber(3)).toBe(8);
    expect(getSevenishNumber(4)).toBe(49);
    expect(getSevenishNumber(5)).toBe(50);
    expect(getSevenishNumber(6)).toBe(56);
    expect(getSevenishNumber(7)).toBe(57);
    expect(getSevenishNumber(8)).toBe(7 * 7 * 7);
  });
});

describe("getSevenishNumber2", () => {
  it("should work", () => {
    expect(getSevenishNumber2(1)).toBe(1);
    expect(getSevenishNumber2(2)).toBe(7);
    expect(getSevenishNumber2(3)).toBe(8);
    expect(getSevenishNumber2(4)).toBe(49);
    expect(getSevenishNumber2(5)).toBe(50);
    expect(getSevenishNumber2(6)).toBe(56);
    expect(getSevenishNumber2(7)).toBe(57);
    expect(getSevenishNumber2(8)).toBe(7 * 7 * 7);

    expect(getSevenishNumber2(100)).toBe(getSevenishNumber2(100));
  });
});
