const MOD = 10 ** 9 + 7;

function countWays(ranges: [number, number][]): number {
  const sortedEndpoints = ranges
    .map(([start, end]) => [
      { value: start, type: "START" },
      { value: end, type: "END" },
    ])
    .flat()
    .sort((a, b) => {
      const valueCompare = a.value - b.value;
      if (valueCompare !== 0) return valueCompare;
      return a.type === "START" ? -1 : 1;
    });

  let currentlyIntersecting = 0;
  let groupCount = 0;
  for (const endpoint of sortedEndpoints) {
    if (endpoint.type === "START") currentlyIntersecting += 1;
    else currentlyIntersecting -= 1;
    if (currentlyIntersecting === 0) groupCount += 1;
  }

  return Number(BigInt(2) ** BigInt(groupCount) % BigInt(MOD));
}

export { countWays };
