import { minimalTree, Node } from "./Solution";

describe("minimalTree", () => {
  it("basic", () => {
    expect(minimalTree({ value: 1 })).toStrictEqual({
      value: 1,
      right: undefined,
      left: undefined,
    });
  });
  it("simple", () => {
    const tree: Node = {
      value: 1,
      left: {
        value: 2,
      },
      right: {
        value: 3,
      },
    };
    const expectedTree: Node = {
      value: 1,
      left: {
        value: 3,
        left: undefined,
        right: undefined,
      },
      right: {
        value: 3,
        left: undefined,
        right: undefined,
      },
    };
    expect(minimalTree(tree)).toStrictEqual(expectedTree);
  });
  it("still simple", () => {
    const tree: Node = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 2,
        },
        right: {
          value: 1,
        },
      },
      right: {
        value: 5,
      },
    };
    const expectedTree: Node = {
      value: 1,
      left: {
        value: 3,
        left: {
          value: 2,
          left: undefined,
          right: undefined,
        },
        right: {
          value: 2,
          left: undefined,
          right: undefined,
        },
      },
      right: {
        value: 5,
        left: undefined,
        right: undefined,
      },
    };
    expect(minimalTree(tree)).toStrictEqual(expectedTree);
  });
});
