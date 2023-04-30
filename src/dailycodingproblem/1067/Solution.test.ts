import pruneZeroSubtrees from "./Solution";

describe("pruneZeroSubtrees", () => {
  it("should prune subtrees with zero values only", () => {
    expect(pruneZeroSubtrees({ value: 0 })).toBeUndefined();
    expect(pruneZeroSubtrees({ value: 0, left: { value: 0 } })).toBeUndefined();
    expect(
      pruneZeroSubtrees({ value: 0, left: { value: 0 }, right: { value: 0 } })
    ).toBeUndefined();
    expect(pruneZeroSubtrees({ value: 1, left: { value: 0 }, right: { value: 0 } })).toEqual({
      value: 1,
    });
    expect(pruneZeroSubtrees({ value: 0, left: { value: 1 } })).toEqual({
      value: 0,
      left: { value: 1 },
    });
    //     0
    //     / \
    //    1   0
    //       / \
    //      1   0
    //     / \
    //    0   0
    expect(
      pruneZeroSubtrees({
        value: 0,
        left: { value: 1 },
        right: {
          value: 0,
          left: { value: 1, left: { value: 0 }, right: { value: 0 } },
          right: { value: 0 },
        },
      })
      //    0
      //   / \
      //  1   0
      //     /
      //    1
    ).toEqual({
      value: 0,
      left: { value: 1 },
      right: { value: 0, left: { value: 1 } },
    });
  });
});
