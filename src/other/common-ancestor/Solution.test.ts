import { TreeNode } from "../../dailycodingproblem/common/tree";
import getCommonAncestor from "./Solution";

describe("getCommonAncestor", () => {
  it("should work", () => {
    const nodeA: TreeNode = { value: 5 };
    const nodeB: TreeNode = { value: 6 };
    const nodeC: TreeNode = { value: 9 };

    const tree: TreeNode = {
      value: 1,
      left: { value: 2, left: nodeA, right: nodeB },
      right: { value: 7, left: { value: 8, right: nodeC } },
    };
    expect(getCommonAncestor(tree, nodeA, nodeB).value).toBe(2);
    expect(getCommonAncestor(tree, nodeA, nodeC).value).toBe(1);
  });

  it("should work for degenerate", () => {
    const nodeA: TreeNode = { value: 5 };
    const nodeB: TreeNode = { value: 2, left: nodeA, right: { value: 11 } };

    const tree: TreeNode = {
      value: 1,
      left: nodeB,
      right: { value: 7, left: { value: 8 } },
    };
    expect(getCommonAncestor(tree, nodeA, nodeB).value).toBe(2);
  });
});
