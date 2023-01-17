type TreeNode = {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
  level: number;
};

export class AATree {
  private root?: TreeNode;

  constructor(root?: TreeNode) {
    this.root = root;
  }

  public contains = (value: number): boolean => {
    return this.findNode(this.root, value) != null;
  };

  public add = (n: number): AATree => {
    return new AATree(this.insert(this.root, n));
  };

  public delete = (value: number) => {
    return new AATree(this.deleteNode(this.root, value));
  };

  private findNode = (root: TreeNode | undefined, value: number): TreeNode | undefined => {
    if (!root) return undefined;
    if (root.value === value) return root;
    if (value < root.value) return this.findNode(root.left, value);
    else if (value > root.value) return this.findNode(root.right, value);
  };

  private insert = (root: TreeNode | undefined, n: number): TreeNode => {
    if (root == null) return { value: n, level: 1 };
    let result = root;
    if (n < root.value) {
      result = { ...root, left: this.insert(root.left, n) };
    } else if (n > root.value) {
      result = { ...root, right: this.insert(root.right, n) };
    }
    // Re-balance
    result = this.skew(result);
    result = this.split(result);
    return result;
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
        result = { ...successor, left: root.left, level: root.level };
      } else {
        // Successor is somewhere else in the right tree, remove it first.
        const newRight = this.deleteNode(root.right, successor.value);
        // Delete the node by making its successor take it's place.
        result = { value: successor.value, left: root.left, right: newRight, level: root.level };
      }
    }
    // Re-balance
    result = this.decreaseLevel(result);
    result = this.skew(result);
    result = result && { ...result, right: this.skew(result?.right) };
    if (result?.right) {
      result = { ...result, right: { ...result.right, right: this.skew(result.right.right) } };
    }
    result = this.split(result);
    result = result && { ...result, right: this.split(result.right) };

    return result;
  };

  private findSuccessor = (root: TreeNode): TreeNode => {
    let minNode = root;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode;
  };

  /**
   *        |                   |
   *        v                   v
   *   L <- T                   L -> T
   *  / \    \      =>         /    / \
   * A   B    X               A    B   X
   *
   */
  private skew(oldT: TreeNode): TreeNode;
  private skew(oldT: TreeNode | undefined): TreeNode | undefined;
  private skew(oldT: TreeNode | undefined) {
    if (!oldT || !oldT.left || oldT.left.level < oldT.level) return oldT;
    const newT: TreeNode = {
      ...oldT,
      left: oldT.left.right,
    };
    const newL = {
      ...oldT.left,
      right: newT,
    };
    return newL;
  }

  /**
   *     |                      |
   *     v                      v
   *     T -> R -> X    =>      R
   *    /   /                  /  \
   *   A   B                  T    X
   *                         / \
   *                        A   B
   */
  private split(oldT: TreeNode): TreeNode;
  private split(oldT: TreeNode | undefined): TreeNode | undefined;
  private split(oldT: TreeNode | undefined): TreeNode | undefined {
    if (!oldT || !oldT.right || oldT.right.right == null || oldT.level > oldT.right.right.level) {
      return oldT;
    }
    const newT = {
      ...oldT,
      right: oldT.right.left,
    };
    const newR = {
      ...oldT.right,
      left: newT,
      level: oldT.right.level + 1,
    };

    return newR;
  }

  private decreaseLevel = (root: TreeNode | undefined): TreeNode | undefined => {
    if (!root) return undefined;
    let result = root;
    const newLevel = Math.min(root.left?.level ?? 0, root.right?.level ?? 0) + 1;

    if (newLevel < root.level) {
      const newRight =
        root.right && newLevel < root.right.level ? { ...root.right, level: newLevel } : root.right;
      result = { ...root, level: newLevel, right: newRight };
    }
    return result;
  };

  public toString = (): string => {
    return this.toStringNode(this.root, 1);
  };

  private indent = (level: number) => [...Array(level)].map(() => " ").join("|");

  private toStringNode = (root: TreeNode | undefined, level: number) => {
    if (root == null) return `${this.indent(level)}+ null`;
    const leftString = this.toStringNode(root.left, level + 1);
    const rightString = this.toStringNode(root.right, level + 1);

    const result: string = `${this.indent(level)}+ ${root.value}(l: ${
      root.level
    })\n${rightString}\n${leftString}`;
    return result;
  };
}
