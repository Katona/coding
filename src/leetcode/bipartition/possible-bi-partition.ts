type AdjacencyList = {
  [index: number]: number[];
};

export function possibleBipartition(n: number, dislikes: number[][]): boolean {
  const dislikeGraph: AdjacencyList = dislikes.reduce((prev, curr) => {
    const [source, target] = curr;
    if (prev[source - 1] == null) prev[source-1] = [];
    if (prev[target - 1] == null) prev[target-1] = [];
    prev[source-1].push(target - 1);
    prev[target-1].push(source - 1);
    return prev;
  }, {} as AdjacencyList);

  const canBePartitioned = (
    current: number,
    graph: AdjacencyList,
    partitions: { [index: number]: number }
  ): boolean => {
    const dislikedPeople = graph[current] || [];
    const partitioning = dislikedPeople.map((d) => {
      if (partitions[d] === partitions[current]) return false;
      if (partitions[d] == null) {
        partitions[d] = 1 - partitions[current];
        return canBePartitioned(d, graph, partitions);
      }
      return true;
    });

    return partitioning.reduce((prev, current) => prev && current, true);
  };

  let partitions: { [index: number]: number } = {}
  for (let i = 0; i < n; i++) {
    if (partitions[i] == null) partitions[i] = 0;
    if (!canBePartitioned(i, dislikeGraph, partitions)) return false;
  }
  return true;
}
