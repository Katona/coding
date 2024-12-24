type Robot = {
  x: number;
  y: number;
  dx: number;
  dy: number;
};

const moveRobots = (robots: Robot[], time: number, width: number, height: number): Robot[] => {
  const movedRobots = robots
    .map((r) => ({
      ...r,
      x: (r.x + time * r.dx) % width,
      y: (r.y + time * r.dy) % height,
    }))
    .map((r) => ({ ...r, x: r.x >= 0 ? r.x : width + r.x, y: r.y >= 0 ? r.y : height + r.y }));
  return movedRobots;
};

type Quadrant = "top_left" | "top_right" | "bottom_left" | "bottom_right";

const getQuadrant = (robot: Robot, width: number, height: number): Quadrant | undefined => {
  const middleX = Math.floor(width / 2);
  const middleY = Math.floor(height / 2);
  if (robot.x < middleX) {
    if (robot.y < middleY) return "top_left";
    else if (robot.y > middleY) return "bottom_left";
  } else if (robot.x > middleX) {
    if (robot.y < middleY) return "top_right";
    else if (robot.y > middleY) return "bottom_right";
  }
  return undefined;
};
const groupRobots = (robots: Robot[], width: number, height: number) => {
  return robots.reduce<Record<Quadrant, number>>((grouped, robot) => {
    const quadrant = getQuadrant(robot, width, height);
    if (!quadrant) return grouped;
    return { ...grouped, [quadrant]: (grouped[quadrant] ?? 0) + 1 };
  }, {} as any);
};

const calculateSafetyFactor = (robots: Robot[], time: number, width: number, height: number) => {
  const movedRobots = moveRobots(robots, time, width, height);
  const robotCountPerQuadrant = groupRobots(movedRobots, width, height);
  const safetyFactor = Object.values(robotCountPerQuadrant).reduce((acc, curr) => acc * curr, 1);
  return safetyFactor;
};

const getMirrorCount = (map: number[][], robots: Robot[]): number => {
  const hasMirror = robots.map((r) => map[r.y].at(-r.x - 1) === map[r.y].at(r.x));
  const mirrorCount = hasMirror.reduce<number>((acc, curr) => acc + (curr ? 1 : 0), 0);
  return mirrorCount;
};
const getVerticalMirrorCount = (map: number[][], robots: Robot[]): number => {
  const hasMirror = robots.map((r) => map[r.y][r.x] === map.at(-r.y - 1)?.at(r.x));
  const mirrorCount = hasMirror.reduce<number>((acc, curr) => acc + (curr ? 1 : 0), 0);
  return mirrorCount;
};

const getMaxConsequtiveRobotCountRow = (row: number[]): number => {
  let longestConsequtiveRobotCount = 0;
  let currConsequtiveRobotCount = 0;
  for (let i = 0; i < row.length; i++) {
    if (row[i] > 0) {
      currConsequtiveRobotCount++;
    } else {
      longestConsequtiveRobotCount = Math.max(
        longestConsequtiveRobotCount,
        currConsequtiveRobotCount,
      );
      currConsequtiveRobotCount = 0;
    }
  }
  return Math.max(longestConsequtiveRobotCount, currConsequtiveRobotCount);
};

const getMaxConsequtiveRobotCountColumn = (map: number[][], column: number): number => {
  let longestConsequtiveRobotCount = 0;
  let currConsequtiveRobotCount = 0;
  for (let i = 0; i < map.length; i++) {
    if (map[i][column] > 0) {
      currConsequtiveRobotCount++;
    } else {
      longestConsequtiveRobotCount = Math.max(
        longestConsequtiveRobotCount,
        currConsequtiveRobotCount,
      );
      currConsequtiveRobotCount = 0;
    }
  }
  return Math.max(longestConsequtiveRobotCount, currConsequtiveRobotCount);
};

const getMaxConsequtiveRobotCount = (map: number[][]) => {
  const consequtiveRobotCounts = map.map(getMaxConsequtiveRobotCountRow);
  const max = consequtiveRobotCounts.reduce((acc, curr) => Math.max(acc, curr));
  return max;
};

const getMaxConsequtiveRobotVertically = (map: number[][]) => {
  const consequtiveRobotCounts = Array(map[0].length)
    .fill(0)
    .map((_, columnIndex) => getMaxConsequtiveRobotCountColumn(map, columnIndex));
  const max = consequtiveRobotCounts.reduce((acc, curr) => Math.max(acc, curr));
  return max;
};

const getChristmasTreeTime = (robots: Robot[], width: number, height: number) => {
  if (width % 2 === 0) throw new Error("Width has to be odd");
  console.log({ robotCount: robots.length });

  const map = Array.from(Array(height), () => Array(width).fill(0));
  let currentRobots = robots;
  let time = 0;

  currentRobots.forEach((r) => {
    map[r.y][r.x]++;
  });
  // while (getMirrorCount(map, currentRobots) !== 200 && time < 10000) {
  while (getMaxConsequtiveRobotVertically(map) < 30 && time < 10000) {
    const movedRobots = moveRobots(robots, time, width, height);
    currentRobots.forEach((r) => (map[r.y][r.x] = 0));
    movedRobots.forEach((r) => map[r.y][r.x]++);
    currentRobots = movedRobots;
    time++;
  }
  console.log(getMaxConsequtiveRobotCount(map));
  const mapStr = map.map((row) => row.map((value) => (value > 0 ? "*" : ".")).join("")).join("\n");
  console.log(mapStr);
  return time;
};
export {
  moveRobots,
  groupRobots,
  calculateSafetyFactor,
  getChristmasTreeTime,
  getMirrorCount as isChristmasTree,
  getMaxConsequtiveRobotCountRow,
};
export type { Robot };
