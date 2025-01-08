import { numMusicPlaylists } from "./Solution";

describe("numMusicPlaylists", () => {
  it("should work", () => {
    expect(numMusicPlaylists(3, 3, 1)).toBe(6);
    expect(numMusicPlaylists(2, 3, 0)).toBe(6);
    expect(numMusicPlaylists(2, 3, 1)).toBe(2);
    expect(numMusicPlaylists(3, 3, 0)).toBe(6);
    expect(numMusicPlaylists(16, 16, 4)).toBe(789741546);
  });
});
