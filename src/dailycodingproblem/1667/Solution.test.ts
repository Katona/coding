import { solution } from "./Solution";

describe("Solution", () => {
  it("should work", () => {
    const sorted = solution(
      new Map([
        ["CSC300", ["CSC100", "CSC200"]],
        ["CSC200", ["CSC100"]],
      ]),
    );
    expect(sorted).toEqual(["CSC100", "CSC200", "CSC300"]);
  });
  it("should work #2", () => {
    const sorted = solution(
      new Map([
        ["CSC300", ["CSC100", "CSC200"]],
        ["CSC200", ["CSC100"]],
        ["CSC400", ["CSC200"]],
        ["CSC100", ["CSC500"]],
      ]),
    );
    expect(sorted).toEqual(["CSC500", "CSC100", "CSC200", "CSC300", "CSC400"]);
  });

  it("should throw Error if loop detected", () => {
    const t = () =>
      solution(
        new Map([
          ["CSC300", ["CSC100", "CSC200"]],
          ["CSC200", ["CSC100", "CSC300"]],
        ]),
      );
    expect(t).toThrowError();
  });
});
