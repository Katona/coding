/*
  0 0 0 0
  0 0 0 0
  0 0 0 0
  0 0 0 0
*/
function numOfWays(map: number[][]) {
  const height = map.length;
  const width = map[0].length;
  const cache = Array.from(Array(height), () => new Array<number>(width));
  cache[0][0] = 1;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i === 0 && j === 0) continue;
      if (map[i][j] === 0) {
        const left = cache[i][j - 1] ?? 0;
        const up = cache[i - 1]?.[j] ?? 0;
        cache[i][j] = left + up;
      }
    }
  }
  console.log(cache);
  return cache[height - 1][width - 1];
}

export default numOfWays;
