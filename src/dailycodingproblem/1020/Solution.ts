import { TreeNode } from "../common/tree";

const inorderTraversal = (root?: TreeNode): number[] => {
  if (!root) return [];
  const leftNodes = inorderTraversal(root.left);
  const rightNodes = inorderTraversal(root.right);
  return [...leftNodes, root.value, ...rightNodes];
};
const getNumbersWithSum = (sum: number, tree: TreeNode): [number, number] | undefined => {
  const values = inorderTraversal(tree);
  let start = 0;
  let end = values.length - 1;
  while (start < end) {
    const currentSum = values[start] + values[end];
    if (sum === currentSum) {
      return [values[start], values[end]];
    } else if (currentSum < sum) start++;
    else end--;
  }
  return undefined;
};

export default getNumbersWithSum;
export type { TreeNode };
