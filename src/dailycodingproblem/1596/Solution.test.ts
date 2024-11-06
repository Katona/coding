import isSymmetric, { equals, reflect, toKTree } from "./Solution";

describe("Reflect", () => {
  it("should reflect the tree", () => {
    const reflectedTree = reflect({
      value: 1,
      children: [
        { value: 2, children: [] },
        { value: 3, children: [] },
        { value: 4, children: [] },
      ],
    });
    expect(reflectedTree).toEqual({
      value: 1,
      children: [
        { value: 4, children: [] },
        { value: 3, children: [] },
        { value: 2, children: [] },
      ],
    });
  });

  it("should reflect the tree #2", () => {
    const reflectedTree = reflect({
      value: 1,
      children: [
        {
          value: 2,
          children: [
            { value: 5, children: [] },
            { value: 6, children: [] },
          ],
        },
        { value: 3, children: [] },
        { value: 4, children: [] },
      ],
    });
    expect(reflectedTree).toEqual({
      value: 1,
      children: [
        { value: 4, children: [] },
        { value: 3, children: [] },
        {
          value: 2,
          children: [
            { value: 6, children: [] },
            { value: 5, children: [] },
          ],
        },
      ],
    });
  });
});

describe("equals", () => {
  describe("should check if the given trees are equal", () => {
    it("in case of undefined", () => {
      expect(equals(undefined, { value: 1, children: [] })).toBe(false);
      expect(equals({ value: 1, children: [] }, undefined)).toBe(false);
      expect(equals(undefined, undefined)).toBe(false);
    });
    it("in case of trees", () => {
      expect(equals({ value: 1, children: [] }, { value: 1, children: [] })).toBe(true);
      expect(equals({ value: 2, children: [] }, { value: 1, children: [] })).toBe(false);
      expect(
        equals(
          {
            value: 1,
            children: [
              { value: 1, children: [] },
              { value: 1, children: [] },
            ],
          },
          { value: 1, children: [] },
        ),
      ).toBe(false);
      expect(
        equals(
          {
            value: 1,
            children: [
              { value: 1, children: [] },
              { value: 1, children: [] },
            ],
          },
          {
            value: 1,
            children: [
              { value: 1, children: [] },
              { value: 1, children: [] },
            ],
          },
        ),
      ).toBe(true);
    });
  });
});
describe("isSymmetric", () => {
  it("should return true for symmetric trees", () => {
    expect(isSymmetric({ value: 1, children: [] })).toBe(true);
    expect(isSymmetric({ value: 1, children: [{ value: 1, children: [] }] })).toBe(true);
    expect(
      isSymmetric({
        value: 1,
        children: [
          { value: 1, children: [] },
          { value: 2, children: [] },
        ],
      }),
    ).toBe(false);
    expect(
      isSymmetric({
        value: 1,
        children: [
          { value: 1, children: [] },
          { value: 2, children: [] },
          { value: 1, children: [] },
        ],
      }),
    ).toBe(true);
    expect(
      isSymmetric({
        value: 1,
        children: [
          {
            value: 2,
            children: [
              { value: 3, children: [undefined, undefined] },
              { value: 4, children: [undefined, undefined] },
            ],
          },
          {
            value: 2,
            children: [
              { value: 4, children: [undefined, undefined] },
              { value: 3, children: [undefined, undefined] },
            ],
          },
        ],
      }),
    ).toBe(true);
  });
});
describe("isSymmetric(tree: TreeNode)", () => {
  it("should return true for symmetric trees", () => {
    expect(
      isSymmetric({
        value: 1,
        left: {
          value: 2,
          left: { value: 3 },
          right: { value: 4 },
        },
        right: {
          value: 2,
          left: { value: 4 },
          right: { value: 3 },
        },
      }),
    ).toBe(true);
  });
});
