type Lock = [number, number, number, number];

const incDigit = (d: number) => (d + 1) % 10;
const decDigit = (d: number) => (d === 0 ? 9 : d - 1);

const getCombinationsFrom = (n: Lock) => {
  const result: Lock[] = [];
  for (let pos = 0; pos < n.length; pos++) {
    let next: Lock = [...n];
    next[pos] = incDigit(next[pos]);
    let prev: Lock = [...n];
    prev[pos] = decDigit(prev[pos]);
    result.push(next);
    result.push(prev);
  }
  return result;
};

const asNumber = (l: Lock) => Number([...l].reverse().join(""));

function openLock(deadends: string[], target: string): number {
  const targetNumber = Number(target);
  let queue: { lock: Lock; rotationCount: number }[] = [{ lock: [0, 0, 0, 0], rotationCount: 0 }];
  // let queue: Lock[][] = [[[0, 0, 0, 0]]];
  let visited = new Set<number>(deadends.map((s) => Number(s)));

  while (queue.length > 0) {
    const curr = queue.shift();
    if (!curr) {
      continue;
    }
    const currNumber = asNumber(curr.lock);
    if (currNumber === targetNumber) {
      return curr.rotationCount;
    }

    if (visited.has(currNumber)) {
      continue;
    }
    visited.add(currNumber);
    const combinations = getCombinationsFrom(curr.lock).map((c) => ({
      lock: c,
      rotationCount: curr.rotationCount + 1,
    }));
    queue.push(...combinations);
  }
  return -1;
}

export { openLock };
