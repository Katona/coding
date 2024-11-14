import { TreeNode } from "../common/tree";
import { ceiling, floor } from "./Solution";

const tree: TreeNode = {
  value: 8,
  left: {
    value: 3,
    left: { value: 1 },
    right: { value: 6, left: { value: 4 }, right: { value: 7 } },
  },
  right: { value: 10, right: { value: 14, left: { value: 13 } } },
};

describe("floor", () => {
  it("should find the floor of the given element", () => {
    const tree: TreeNode = {
      value: 3,
      left: { value: 1 },
      right: { value: 5 },
    };
    expect(floor(2, tree)).toBe(1);
    expect(floor(3, tree)).toBe(1);
    expect(floor(4, tree)).toBe(3);
    expect(floor(6, tree)).toBe(5);
    expect(floor(1, tree)).toBeUndefined();
  });

  it("should find the floor of the given element #2", () => {
    expect(floor(12, tree)).toBe(10);
    expect(floor(14, tree)).toBe(13);
    expect(floor(8, tree)).toBe(7);
    expect(floor(7, tree)).toBe(6);
    expect(floor(5, tree)).toBe(4);
    expect(floor(1, tree)).toBeUndefined();
  });
});
describe("ceiling", () => {
  it("should find the ceiling of the given element", () => {
    expect(ceiling(12, tree)).toBe(13);
    expect(ceiling(1, tree)).toBe(3);
    expect(ceiling(3, tree)).toBe(4);
    expect(ceiling(9, tree)).toBe(10);
    // expect(floor(14, tree)).toBe(13);
    // expect(floor(8, tree)).toBe(7);
    // expect(floor(7, tree)).toBe(6);
    // expect(floor(5, tree)).toBe(4);
    // expect(floor(1, tree)).toBeUndefined();
  });
});
