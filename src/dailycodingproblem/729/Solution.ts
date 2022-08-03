const buildGraph = (rankedLists: number[][]) => {
  const graph: Record<number, number[]> = {};
  rankedLists.forEach((list) => {
    for (let i = 0; i < list.length - 1; i++) {
      const current = list[i];
      const next = list[i + 1];
      graph[current] = [...(graph[current] ?? []), next];
    }
  });
  return graph;
};
const traverse = (startNode: number, graph: Record<number, number[]>, visited: Set<number>): number[] => {
  if (visited.has(startNode)) return [];
  visited.add(startNode);
  const neigbors = graph[startNode] ?? []; 
  let result: number[] = [];
  neigbors.map((neigbor) => {
    result = [...traverse(neigbor, graph, visited), ...result];
  });
  return [startNode, ...result];
};

const topologicalSort = (graph: Record<number, number[]>): number[] => {
  let result: number[] = [];
  let visited = new Set<number>();
  Object.keys(graph).forEach((node) => {
    result = [...traverse(+node, graph, visited), ...result];
  });
  return result;
};

export function createPlaylist(rankedLists: number[][]): number[] {
  const graph = buildGraph(rankedLists);
  return topologicalSort(graph);
}
