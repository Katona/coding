import palindromize from "./Solution";

describe("palindromize", () => {
    it("should work", () => {
        expect(palindromize("ab")).toEqual("aba");
        expect(palindromize("ba")).toEqual("aba");
        expect(palindromize("cba")).toEqual("abcba");
        expect(palindromize("test")).toEqual("teset");
        expect(palindromize("race")).toEqual("ecarace");
    }) 
})