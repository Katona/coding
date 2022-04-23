/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export type TreeNode = {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
export function countNodes(root: TreeNode | null): number {
    const leftHeight = (node: TreeNode | null): number => {
        if (node == null) return -1;
        let current = node;
        let height = 0;
        while (current?.left) {
            current = current.left;
            height += 1;
        }
        return height;
    }

    const nodeCount = (node: TreeNode | null): number => {
        if (node == null) return 0;
        const heightLeft = leftHeight(node.left);
        const heightRight = leftHeight(node.right);
        if (heightLeft === heightRight) {
            const leftCount = (1 << (heightLeft + 1)) - 1;
            const rightCount = nodeCount(node.right);
            return leftCount + rightCount + 1;
        } else {
            const rightCount = (1 << (heightRight + 1)) - 1;
            const leftCount = nodeCount(node.left);
            return leftCount + rightCount + 1;   
        }
    }

    return nodeCount(root);
};