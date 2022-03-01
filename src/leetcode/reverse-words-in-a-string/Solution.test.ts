import { reverseWords } from "./Solution";

describe("reverseWords", () => {
    it("should work", () => {
        expect(reverseWords("sky")).toBe("sky");
        expect(reverseWords("sky is")).toBe("is sky");
        expect(reverseWords("sky is falling")).toBe("falling is sky");
        expect(reverseWords("sky is   falling")).toBe("falling is sky");

    })
})