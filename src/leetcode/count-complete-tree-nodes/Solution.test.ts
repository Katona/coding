import { countNodes, TreeNode } from "./Solution"

describe("countNodes", () => {
    it("should work", () => {
        const root: TreeNode = {
            val: 1,
            left: null,
            right: null,
        }
        expect(countNodes(root)).toBe(1);
        root.left = {
            val: 2,
            left: null,
            right: null,
        }
        expect(countNodes(root)).toBe(2);
    })
    it("should work 2", () => {
        const root: TreeNode = {
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 4,
                    left: null,
                    right: null
                },
                right: {
                    val: 5,
                    left: null,
                    right: null
                }
            },
            right: {
                val: 3,
                left: {
                    val: 6,
                    left: null,
                    right: null
                },
                right: null
            },
        }
        expect(countNodes(root)).toBe(6);
    })
})