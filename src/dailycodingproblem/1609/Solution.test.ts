import { initTree, query, update } from "./Solution";

describe("initTree", () => {
  it("should create an empty tree", () => {
    const tree = initTree({ start: 0, end: 23 });
    expect(tree).not.toBeUndefined();
    expect(tree.start).toBe(0);
    expect(tree.end).toBe(23);
    expect(tree.left).not.toBeUndefined();
    expect(tree.left?.start).toBe(0);
    expect(tree.left?.end).toBe(11);
    expect(tree.right).not.toBeUndefined();
    expect(tree.right?.start).toBe(12);
    expect(tree.right?.end).toBe(23);
  });
});

describe("update", () => {
  it("update the tree", () => {
    const tree = initTree({ start: 0, end: 23 });
    let updated = update(tree, 0, 1);
    expect(updated?.value).toBe(1);

    updated = update(updated, 23, 3);
    expect(updated?.value).toBe(4);
  });
});

describe("query", () => {
  it("should query the tree", () => {
    const tree = initTree({ start: 0, end: 23 });
    let updated = update(tree, 0, 1);
    updated = update(updated, 2, 1);
    updated = update(updated, 4, 2);
    updated = update(updated, 14, 3);
    expect(query(updated, 0, 23)).toBe(7);
    expect(query(updated, 0, 12)).toBe(4);
    expect(query(updated, 12, 23)).toBe(3);
    updated = update(updated, 14, 5);
    expect(query(updated, 0, 23)).toBe(12);
    expect(query(updated, 14, 14)).toBe(8);
  });
});
