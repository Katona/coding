import swapBits from "./Solution";

describe("swapBits", () => {
  it("should work", () => {
    expect(swapBits(0b01010101)).toBe(0b10101010);
    expect(swapBits(0b10101010)).toBe(0b01010101);
    expect(swapBits(0b11100010)).toBe(0b11010001);
    expect(swapBits(0b00000000)).toBe(0b00000000);
    expect(swapBits(0b11111111)).toBe(0b11111111);
  });
});
