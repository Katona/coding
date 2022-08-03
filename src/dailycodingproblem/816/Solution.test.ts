import { xOrY, xOrYBitwise } from "./Solution";

describe("xOrY", () => {
  it("should work", () => {
    expect(xOrY(10, 20, 1)).toBe(10);
    expect(xOrY(10, 20, 0)).toBe(20);
  });
});

describe("xOrYBitwise", () => {
  it("should work", () => {
    expect(xOrYBitwise(10, 20, 1)).toBe(10);
    expect(xOrYBitwise(10, 20, 0)).toBe(20);
  });
});
