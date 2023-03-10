import getNumbersWithSum, { TreeNode } from "./Solution";

describe('getNumbersWithSum', () => {
    it('should work', () => {
        const tree: TreeNode = {
            value: 10,
            left: {
                value: 5,
                left: {
                    value: 3
                }
            },
            right: {
                value: 15,
                left: {
                    value: 11
                },
                right: {
                    value: 20
                }
            }
        }
        expect(getNumbersWithSum(20, tree)).toStrictEqual([5, 15]);
    })
})