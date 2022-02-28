export const minMoves = (board: number[][]) => {
  const N = board.length;
  const cache: boolean[] = Array(N * N);
  let queue: [number, number][] = [];
  queue.push([0, 0]);
  let result = -1;
  while (queue.length > 0 && result == -1) {
    const [curr, stepCount] = queue.shift()!;
    if (curr === N * N - 1) {
      result = stepCount;
    }
    if (!cache[curr]) {
      cache[curr] = true;
      for (let dice = 1; dice <= 6 && curr + dice < N * N; dice++) {
        const next = curr + dice;
        const row = N - 1 - Math.floor(next / N);
        const col = (N - 1 - row) % 2 === 0 ? next % N : N - 1 - (next % N);

        if (board[row][col] > 0) queue.push([board[row][col] - 1, stepCount + 1]);
        else queue.push([curr + dice, stepCount + 1]);
      }
    }
  }
  return result;
};
