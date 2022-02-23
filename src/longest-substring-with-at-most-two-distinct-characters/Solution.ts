export const getLongestSubstring = (input: string) => {
  let longestSubstring: { start: number; end: number } = { start: 0, end: 1 };
  let histogram: Record<string, number> = {};
  let charTypes = 0;
  let start = 0;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    const charCount = histogram[c] || 0;
    if (charCount === 0) charTypes++;
    histogram[c] = charCount + 1;
    while (charTypes > 2 && start < i) {
      const startChar = input[start];
      histogram[startChar] -= 1;
      if (histogram[startChar] === 0) charTypes -= 1;
      start += 1;
    }
    if (i - start + 1 > longestSubstring.end - longestSubstring.start + 1) {
      longestSubstring = { start: start, end: i };
    }
  }
  return longestSubstring;
};
