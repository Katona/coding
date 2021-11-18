import { numRollsToTarget } from "./Solution"

describe('numRollsToTarget', () => {
    it('should work', () =>{
        expect(numRollsToTarget(1, 6, 6)).toBe(1);
        // expect(numRollsToTarget(1, 6, 7)).toBe(0);
        // expect(numRollsToTarget(2, 6, 7)).toBe(6);
        // expect(numRollsToTarget(2, 6, 1)).toBe(0);
        // expect(numRollsToTarget(2, 6, 17)).toBe(0);
        expect(numRollsToTarget(30, 30, 500)).toBe(222616187);
    })
})