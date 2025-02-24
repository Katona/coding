import { TreeNode } from "../../dailycodingproblem/common/tree";

const getPathTo = (tree: TreeNode, node: TreeNode): TreeNode[] => {
  if (tree === node) return [node];
  const leftPath = tree.left ? getPathTo(tree.left, node) : [];
  const rightPath = tree.right ? getPathTo(tree.right, node) : [];
  return leftPath.length > 0
    ? [tree, ...leftPath]
    : rightPath.length > 0
      ? [tree, ...rightPath]
      : [];
};

const getCommonAncestor = (tree: TreeNode, nodeA: TreeNode, nodeB: TreeNode) => {
  const pathToA = getPathTo(tree, nodeA);
  const pathToB = getPathTo(tree, nodeB);

  let commonAncestor = tree;
  let i = 0;
  while (pathToA[i] === pathToB[i]) {
    commonAncestor = pathToA[i];
    i++;
  }
  return commonAncestor;
};

export default getCommonAncestor;
