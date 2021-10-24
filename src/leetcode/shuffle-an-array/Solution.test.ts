import { Solution } from "./Solution";

const hash = (a: number[]) => {
    return a.reduce((prev, curr, i) => prev + Math.pow(10, a.length - i - 1) * curr, 0);
}

describe('Solution', () => {
    it('should work', () => {
        const solution = new Solution([1, 2, 3, 4]);
        const numberOfPermutations: { [i:number]: number} = {};
        for (let i = 0; i < 1000000; i++) {
            const shuffled = solution.shuffle();
            const hashed = hash(shuffled);
            numberOfPermutations[hashed] = (numberOfPermutations[hashed] || 0) + 1;
        }
        console.log(numberOfPermutations);
    })
})