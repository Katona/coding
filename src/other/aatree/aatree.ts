type TreeNode = {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
};

export class AATree {
  private root?: TreeNode;

  constructor(root?: TreeNode) {
    this.root = root;
  }

  public contains = (value: number): boolean => {
    return this.findNode(this.root, value) != null;
  };

  private findNode = (root: TreeNode | undefined, value: number): TreeNode | undefined => {
    if (!root) return undefined;
    if (root.value === value) return root;
    if (value < root.value) return this.findNode(root.left, value);
    else if (value > root.value) return this.findNode(root.right, value);
  };
  public add = (n: number): AATree => {
    return new AATree(this.insert(this.root, n));
  };

  private insert = (root: TreeNode | undefined, n: number): TreeNode => {
    if (root == null) return { value: n };
    let result = root;
    if (n < root.value) {
      result = { ...root, left: this.insert(root.left, n) };
    } else if (n > root.value) {
      result = { ...root, right: this.insert(root.right, n) };
    }
    return result;
  };

  public delete = (value: number) => {
    return new AATree(this.deleteNode(this.root, value));
  };

  private deleteNode = (root: TreeNode | undefined, n: number): TreeNode | undefined => {
    if (root == null) return undefined;
    let result: TreeNode | undefined = root;
    if (n < root.value) {
      result = { ...root, left: this.deleteNode(root.left, n) };
    } else if (n > root.value) {
      result = { ...root, right: this.deleteNode(root.right, n) };
    } else if (root.left == null || root.right == null) result = root.left || root.right;
    else {
      const successor = this.findSuccessor(root.right);
      if (root.right === successor) {
        // Successor is direct right child, we simply elevate it with preserving the original left tree
        result = { ...successor, left: root.left };
      } else {
        // Successor is somewhere else in the right tree, remove it first.
        const newRight = this.deleteNode(root.right, successor.value);
        // Delete the node by making its successor take it's place.
        result = { value: successor.value, left: root.left, right: newRight};
      }
    }
    return result;
  };

  private findSuccessor = (root: TreeNode): TreeNode => {
    let minNode = root.right!;
    let parent = root;
    while (minNode.left) {
      parent = minNode;
      minNode = minNode.left;
    }
    return minNode;
  };

  public toString = (): string => {
    return this.toStringNode(this.root, 1);
  };

  private indent = (level: number) => [...Array(level)].map(() => " ").join("|");
  private toStringNode = (root: TreeNode | undefined, level: number) => {
    if (root == null) return `${this.indent(level)}+ null`;
    const leftString = this.toStringNode(root.left, level + 1);
    const rightString = this.toStringNode(root.right, level + 1);

    const result: string = `${this.indent(level)}+ ${root.value}\n${rightString}\n${leftString}`;
    return result;
  };
}
