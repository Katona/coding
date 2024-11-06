type TreeNode = {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
};

type KTreeNode = {
  value: number;
  children: (KTreeNode | undefined)[];
};

export { TreeNode, KTreeNode };
