type Courses = Map<string, Array<string>>;

const solution = (courses: Courses): Array<string> => {
  const nodeStates: Map<string, "visiting" | "visited"> = new Map();
  const traverse = (start: string): Array<string> | undefined => {
    let result: string[] = [];
    if (nodeStates.get(start) === "visiting") throw new Error("Loop detected");
    if (nodeStates.get(start) === "visited") return undefined;

    nodeStates.set(start, "visiting");
    result.push(start);
    const prerequisites = courses.get(start);
    if (prerequisites) {
      const sortedPrerequisites = prerequisites
        .map((p) => traverse(p))
        .filter((e): e is Array<string> => !!e)
        .reverse()
        .flat();
      result = [...result, ...sortedPrerequisites];
    }
    nodeStates.set(start, "visited");

    return result;
  };

  let result: Array<string> = [];

  for (const courseId of courses.keys()) {
    if (nodeStates.get(courseId) === "visited") continue;
    const courseList = traverse(courseId);
    if (courseList) {
      result = [...courseList, ...result];
    }
  }
  return result.reverse();
};

export { solution };
