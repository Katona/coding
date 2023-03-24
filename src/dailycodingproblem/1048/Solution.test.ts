import constructCartesianTree from "./Solution";

describe("constructCartesianTree", () => {
  it("should work", () => {
    expect(constructCartesianTree([1])).toEqual({ value: 1 });
    expect(constructCartesianTree([2, 1])).toEqual({ value: 1, left: { value: 2 } });
    expect(constructCartesianTree([1, 2])).toEqual({ value: 1, right: { value: 2 } });
    expect(constructCartesianTree([3, 1, 2])).toEqual({
      value: 1,
      left: { value: 3 },
      right: { value: 2 },
    });
    expect(constructCartesianTree([3, 2, 6, 1, 9])).toEqual({
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 6 } },
      right: { value: 9 },
    });
  });
});
