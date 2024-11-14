import { TreeNode } from "../common/tree";

const floor = (value: number, root?: TreeNode): number | undefined => {
  if (!root) return undefined;
  if (root.value < value) {
    return floor(value, root.right) ?? root.value;
  } else {
    return floor(value, root.left);
  }
};

const ceiling = (value: number, root?: TreeNode): number | undefined => {
  if (!root) return undefined;
  if (root.value > value) {
    return ceiling(value, root.left) ?? root.value;
  } else {
    return ceiling(value, root.right);
  }
};

export { floor, ceiling };
