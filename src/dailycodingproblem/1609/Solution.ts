type Interval = {
  start: number;
  end: number;
};

type IntervalNode = Interval & {
  left?: IntervalNode;
  right?: IntervalNode;
  value: number;
};

const update = (
  root: IntervalNode | undefined,
  hour: number,
  value: number,
): IntervalNode | undefined => {
  if (!root) return root;
  if (root.left && root.left?.start <= hour && root.left?.end >= hour) {
    return { ...root, left: update(root.left, hour, value), value: root.value + value };
  }
  if (root.right && root.right?.start <= hour && root.right?.end >= hour) {
    return { ...root, right: update(root.right, hour, value), value: root.value + value };
  }
  return { ...root, value: root.value + value };
};

const intersects = (a: Interval, b: Interval) =>
  (a.start <= b.start && a.start >= b.end) || (a.end >= b.start && a.end <= b.end);

const contains = (a: Interval, b: Interval) => a.start <= b.start && a.end >= b.end;
const getValue = (node: IntervalNode | undefined, interval: Interval) => {
  if (!node) return 0;
  if (contains(interval, node)) return node.value;
  if (intersects(interval, node)) return query(node, interval.start, interval.end);
  return 0;
};

const query = (root: IntervalNode | undefined, start: number, end: number): number => {
  if (!root) return 0;

  const leftValue = getValue(root.left, { start, end });
  const rightValue = getValue(root.right, { start, end });
  return leftValue + rightValue;
};

const initTree = ({ start, end }: Interval): IntervalNode => {
  const middle = Math.floor((start + end) / 2);
  const left = start !== end ? initTree({ start, end: middle }) : undefined;
  const right = start !== end ? initTree({ start: middle + 1, end }) : undefined;
  return {
    start,
    end,
    value: 0,
    left: left,
    right: right,
  };
};

export { initTree, update, query };
