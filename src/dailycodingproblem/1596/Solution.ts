import { KTreeNode, TreeNode } from "../common/tree";

const reflect = (tree: KTreeNode | undefined): KTreeNode | undefined => {
  if (tree === undefined) return undefined;
  const reflectedChildren = tree.children.map(reflect);
  return { value: tree.value, children: [...reflectedChildren].reverse() };
};

const equals = (left?: KTreeNode, right?: KTreeNode): boolean => {
  if (left && right) {
    if (left.value !== right.value) return false;
    return left.children.every((leftChild, index) => equals(leftChild, right.children[index]));
  }
  return !left && !right ? true : false;
};

const isKTree = (tree: any): tree is KTreeNode => "children" in tree;
const toKTree = (tree?: TreeNode): KTreeNode | undefined => {
  if (!tree) return undefined;
  const firstChild = toKTree(tree.left);
  const secondChild = toKTree(tree.right);
  return { value: tree.value, children: [firstChild, secondChild] };
};

function isSymmetric(tree: TreeNode): boolean;
function isSymmetric(tree: KTreeNode): boolean;
function isSymmetric(tree: any): boolean {
  const kTree = isKTree(tree) ? tree : toKTree(tree);

  const reflectedTree = reflect(kTree);
  return equals(kTree, reflectedTree);
}

export default isSymmetric;
export { reflect, equals, toKTree };
