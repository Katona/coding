import { getStepWords } from "./Solution";

describe("getStepWords", () => {
    it("should work", () => {

        expect(getStepWords("apple", ["appeal"])).toStrictEqual(["appeal"]);
        expect(getStepWords("apple", ["appeal", "no"])).toStrictEqual(["appeal"]);
        expect(getStepWords("apples", ["appeal"])).toStrictEqual([]);
    });
})