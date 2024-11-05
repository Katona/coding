import numOfWays from "./Solution";

describe("numOfWays", () => {
  it("works", () => {
    expect(
      numOfWays([
        [0, 0],
        [0, 0],
      ])
    ).toBe(2);
    expect(
      numOfWays([
        [0, 1],
        [0, 0],
      ])
    ).toBe(1);
    expect(
      numOfWays([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ])
    ).toBe(6);
    expect(
      numOfWays([
        [0, 0, 1],
        [0, 0, 1],
        [1, 0, 0],
      ])
    ).toBe(2);
    expect(
      numOfWays([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ])
    ).toBe(20);
    expect(
      numOfWays([
        [0, 0, 0, 1],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0],
      ])
    ).toBe(6);
  });
});
