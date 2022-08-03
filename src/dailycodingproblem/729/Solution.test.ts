import { createPlaylist } from "./Solution";

describe("createPlaylist", () => {
  it("should work", () => {
    expect(createPlaylist([[1, 2, 3]])).toStrictEqual([1, 2, 3]);
    expect(
      createPlaylist([
        [1, 2, 3],
        [4, 3],
      ])
    ).toStrictEqual([4, 1, 2, 3]);
    expect(
      createPlaylist([
        [4, 3],
        [1, 2, 3],
      ])
    ).toStrictEqual([4, 1, 2, 3]);
    expect(
      createPlaylist([
        [1, 7, 3],
        [2, 1, 6, 7, 9],
        [3, 9, 5],
      ])
    ).toStrictEqual([2, 1, 6, 7, 3, 9, 5]);
  });
});
