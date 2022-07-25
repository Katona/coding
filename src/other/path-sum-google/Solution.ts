export type Node = {
  left?: Node;
  right?: Node;
  value: number;
};

type NodeWithSum = {
  left?: NodeWithSum;
  right?: NodeWithSum;
  value: number;
  maxSumToLeaf: number;
};

const createTreeWithSums = (root?: Node, sum = 0): NodeWithSum | undefined => {
  if (!root) return undefined;
  const pathSum = sum + root.value;
  const leftChild = createTreeWithSums(root.left, pathSum);
  const rightChild = createTreeWithSums(root.right, pathSum);
  return {
    left: leftChild,
    right: rightChild,
    value: root.value,
    maxSumToLeaf:
      root.value + Math.max(leftChild?.maxSumToLeaf ?? 0, rightChild?.maxSumToLeaf ?? 0),
  };
};

const equalizePathSums = (targetSum: number, root?: NodeWithSum, pathSum = 0): Node | undefined => {
  if (!root) return undefined;
  const extraValue = targetSum - pathSum - root.maxSumToLeaf;
  const newValue = root.value + extraValue;
  return {
    left: equalizePathSums(targetSum,root.left , pathSum + newValue),
    right: equalizePathSums(targetSum, root.right, pathSum + newValue),
    value: newValue,
  };
};

export const minimalTree = (root: Node) => {
  const treeWithSums = createTreeWithSums(root);
  console.log(treeWithSums)
  return equalizePathSums(treeWithSums!.maxSumToLeaf, treeWithSums);
};
