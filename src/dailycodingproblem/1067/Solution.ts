import { TreeNode } from "../common/tree";

const pruneZeroSubtrees = (root?: TreeNode): TreeNode | undefined => {
  if (root === undefined) return undefined;
  const prunedLeft = pruneZeroSubtrees(root.left);
  const prunedRight = pruneZeroSubtrees(root.right);

  return root.value === 0 && !prunedLeft && !prunedRight
    ? undefined
    : { value: root.value, left: prunedLeft, right: prunedRight };
};

export default pruneZeroSubtrees;
