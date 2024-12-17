import { blink } from "./Solution";

describe("blink", () => {
  it("should work", () => {
    expect(blink([125, 17], 6)).toBe(22);
    expect(blink([125, 17], 25)).toBe(55312);
    expect(blink([7725, 185, 2, 132869, 0, 1840437, 62, 26310], 75)).toBe(276661131175807);
  });
});
