type Match = {
  // inclusive
  from: number;
  // exclusive
  to: number;
};

type Matcher = {
  matchGreedy(s: string, from: number): Match | undefined;
  shrink(match: Match): Match | undefined;
};

const createLetterMatcher = (l: string): Matcher => ({
  matchGreedy: (s: string, from: number) =>
    s[from] === l ? { from: from, to: from + 1 } : undefined,
  shrink: (match: Match) => undefined,
});

const createAnyLetterMatcher = (): Matcher => ({
  matchGreedy: (s: string, from: number) => ({ from: from, to: from + 1 }),
  shrink: (match: Match) => undefined,
    // match.to > match.from ? { from: match.from, to: match.from } : undefined,
});

const createManyLetterMatcher = (l?: string): Matcher => ({
  matchGreedy: (s: string, from: number) => {
    if (!l) return { from: from, to: s.length };
    else {
      let to = from;
      while (s[to] === l) to += 1;
      return { from, to };
    }
  },
  shrink: (match: Match) =>
    match.to > match.from ? { from: match.from, to: match.to - 1 } : undefined,
});

const createLineEndMatcher = (): Matcher => ({
  matchGreedy: (s: string, from: number) =>
    from === s.length ? { from: s.length, to: s.length } : undefined,
  shrink: () => undefined,
});

const compilePattern = (p: string): Matcher[] => {
  let result: Matcher[] = [];
  let i = 0;
  while (i < p.length) {
    if (p[i] === ".") {
      if (i < p.length - 1 && p[i + 1] === "*") {
        result.push(createManyLetterMatcher());
        i += 2;
      } else {
        result.push(createAnyLetterMatcher());
        i += 1;
      }
    } else {
      if (i < p.length - 1 && p[i + 1] === "*") {
        result.push(createManyLetterMatcher(p[i]));
        i += 2;
      } else {
        result.push(createLetterMatcher(p[i]));
        i += 1;
      }
    }
  }
  result.push(createLineEndMatcher());
  return result;
};

export function isMatch(s: string, p: string): boolean {
  const matchers = compilePattern(p);
  let matches = Array<Match>(matchers.length);
  let currentMatcherIndex = 0;
  let isMatch = false;
  while (currentMatcherIndex >= 0) {
    if (currentMatcherIndex === matchers.length) {
      isMatch = true;
      break;
    }

    const currentMatcher = matchers[currentMatcherIndex];
    const currentMatch = matches[currentMatcherIndex];
    if (currentMatch) {
      const nextMatch = currentMatcher.shrink(currentMatch);
      if (nextMatch) {
        matches[currentMatcherIndex] = nextMatch;
        currentMatcherIndex += 1;
      } else {
        // backtrack
        delete matches[currentMatcherIndex];
        currentMatcherIndex -= 1;
      }
    } else {
      const from = currentMatcherIndex > 0 ? matches[currentMatcherIndex - 1].to : 0;
      const firstMatch = currentMatcher.matchGreedy(s, from);
      if (firstMatch) {
        matches[currentMatcherIndex] = firstMatch;
        currentMatcherIndex += 1;
      } else {
        currentMatcherIndex -= 1;
      }
    }
  }
  return isMatch;
}
