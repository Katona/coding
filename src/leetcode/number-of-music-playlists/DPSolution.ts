// songs: 3, goal: 2, k: 0 = ?
const numMusicPlaylists = (songs: number, goal: number, k: number): number => {
  const getPlaylistCount = (length: number, uniqueSongs: number): number => {
    let result = 0;
    let playlistsWithoutNewSong = 0;
    let playlistsWithNewSong = 0;
    if (length === 1 && uniqueSongs === 1) result = songs;
    // else if (uniqueSongs === 1) result = 1;
    // if (length === 0 && uniqueSongs === 0) result = 1;
    else if (length < 0 || uniqueSongs < 0 || uniqueSongs > length) result = 0;
    else {
      playlistsWithoutNewSong =
        uniqueSongs > k ? getPlaylistCount(length - 1, uniqueSongs) * (uniqueSongs - k) : 0;
      playlistsWithNewSong =
        getPlaylistCount(length - 1, uniqueSongs - 1) * (songs - uniqueSongs + 1);
      result = playlistsWithNewSong + playlistsWithoutNewSong;
    }
    console.log("getPlaylistCount", {
      length,
      uniqueSongs,
      result,
      playlistsWithoutNewSong,
      playlistsWithNewSong,
    });
    return result;
  };
  return getPlaylistCount(goal, songs);
};

export { numMusicPlaylists };
