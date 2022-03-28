import { trap, trap2 } from "./Solution";

describe("trap", () => {
  it("should work", () => {
    expect(trap([2, 1, 2])).toBe(1);
    expect(trap([0, 2, 1, 3])).toBe(1);
    expect(trap([2, 1, 3, 0, 4])).toBe(4);
    expect(trap([2, 1, 3, 0, 2])).toBe(3);
    expect(trap([4, 1, 3, 0, 5])).toBe(8);
    expect(trap([5, 1, 3, 0, 5])).toBe(11);
    expect(trap([0, 0, 0])).toBe(0);
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });
});
describe("trap2", () => {
  it("should work", () => {
    expect(trap2([2, 1, 2])).toBe(1);
    expect(trap2([0, 2, 1, 3])).toBe(1);
    expect(trap2([2, 1, 3, 0, 4])).toBe(4);
    expect(trap2([2, 1, 3, 0, 2])).toBe(3);
    expect(trap2([4, 1, 3, 0, 5])).toBe(8);
    expect(trap2([5, 1, 3, 0, 5])).toBe(11);
    expect(trap2([0, 0, 0])).toBe(0);
    expect(trap2([4, 2, 0, 3, 2, 5])).toBe(9);
  });
});
