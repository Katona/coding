import { segregate } from "./Solution";

describe("segregate", () => {
  it("should work", () => {
    expect(segregate(["B", "R", "G"])).toEqual(["R", "G", "B"]);
    expect(segregate(["R", "R", "G"])).toEqual(["R", "R", "G"]);
    expect(segregate(["G", "B", "R", "R", "B", "R", "G"])).toEqual([
      "R",
      "R",
      "R",
      "G",
      "G",
      "B",
      "B",
    ]);
  });
});
