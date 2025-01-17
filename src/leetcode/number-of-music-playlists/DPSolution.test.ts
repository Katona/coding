import { numMusicPlaylists } from "./DPSolution";

describe("numMusicPlaylists", () => {
  it("should work", () => {
    // expect(numMusicPlaylists(1, 1, 1)).toBe(3);
    // expect(numMusicPlaylists(3, 1, 0)).toBe(3);
    // expect(numMusicPlaylists(3, 1, 1)).toBe(3);
    expect(numMusicPlaylists(3, 3, 1)).toBe(6);
    // expect(numMusicPlaylists(2, 3, 0)).toBe(6);
    // expect(numMusicPlaylists(2, 3, 1)).toBe(2);
    // expect(numMusicPlaylists(3, 3, 0)).toBe(6);
    // expect(numMusicPlaylists(16, 16, 4)).toBe(789741546);
  });
});
