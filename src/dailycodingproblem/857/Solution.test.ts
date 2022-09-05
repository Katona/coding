import { getDepth } from "./Solution"

describe("getDepth", () => {
    it("should work", () => {
       expect(getDepth("(00)")).toBe(1)
       expect(getDepth("((00)(00))")).toBe(2)
       expect(getDepth("((((00)0)0)0)")).toBe(4)
    })
})