import { isMatch } from "./Solution"

describe("isMatch", () => {
    it("should work", () => {
        expect(isMatch("a", "a")).toBeTruthy();
        expect(isMatch("b", "a")).toBeFalsy();
        expect(isMatch("b", ".")).toBeTruthy();
        expect(isMatch("ab", ".")).toBeFalsy();
        expect(isMatch("ab", "..")).toBeTruthy();
        expect(isMatch("ab", ".*")).toBeTruthy();
        expect(isMatch("aab", "a.*")).toBeTruthy();
        expect(isMatch("abcdb", "a.*b")).toBeTruthy();
        expect(isMatch("abc", "a.c")).toBeTruthy();
        expect(isMatch("abcefgc", "a.*e.*c")).toBeTruthy();
        expect(isMatch("abcefgcc", "a.*e.*c")).toBeTruthy();


        expect(isMatch("abe", "ab*e")).toBeTruthy();
        expect(isMatch("ae", "ab*e")).toBeTruthy();
        expect(isMatch("abbbbe", "ab*be")).toBeTruthy();
        expect(isMatch("abbbbe", "ab*.*e")).toBeTruthy();
        expect(isMatch("abbbbe", "a.*")).toBeTruthy();
        expect(isMatch("abb", "abb.*")).toBeTruthy();
        expect(isMatch("abb", ".*abb")).toBeTruthy();
        expect(isMatch("abb", "c*abb")).toBeTruthy();
        expect(isMatch("a", "..")).toBeFalsy();
        expect(isMatch("a", ".*..a*")).toBeFalsy();
    })
})