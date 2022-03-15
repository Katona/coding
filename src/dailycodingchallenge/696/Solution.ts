type N = {
  left?: N;
  right?: N;
  hour: number;
  subscriberCount: number;
  subscribeCountToRight: number;
};

export class SubscriberCounter {
  private root: N;
  constructor(subscribers: number[]) {
    const createTree = (start: number, end: number): N | undefined => {
      if (start > end || end < start) return;
      const middle = (start + end) >> 1;
      if (start < end) {
        const leftTree = createTree(start, middle - 1);
        const rightTree = createTree(middle + 1, end);
        const subscribeCountToRight = rightTree
          ? rightTree.subscriberCount + rightTree.subscribeCountToRight
          : 0;
        return {
          left: leftTree,
          right: rightTree,
          hour: middle,
          subscriberCount: subscribers[middle],
          subscribeCountToRight,
        };
      } else {
        return { hour: middle, subscriberCount: subscribers[middle], subscribeCountToRight: 0 };
      }
    };
    this.root = createTree(0, subscribers.length - 1)!;
  }

  update(hour: number, value: number) {
    const _update = (node: N | undefined) => {
      if (node == null) return;
      if (node.hour === hour) node.subscriberCount += value;
      else if (hour < node.hour) _update(node.left);
      else {
        _update(node.right);
        node.subscribeCountToRight += value;
      }
    };
    _update(this.root);
  }

  query(start: number, end: number) {
      const find = (node: N, hour: number): N[] => {
          if (node.hour == hour) return [node];
          else if (hour < node.hour) return [...find(node.left!, hour), node];
          else return find(node.right!, hour);
      }
      const startNodes = find(this.root, start);
      const endNodes = find(this.root, end);
      const subsAfterStart = startNodes.reduce((acc, c) => acc + c.subscribeCountToRight + c.subscriberCount, 0);
      const subsAfterEnd = endNodes.reduce((acc, c) => acc + c.subscribeCountToRight + c.subscriberCount, 0);
      return subsAfterStart - subsAfterEnd + endNodes[0].subscriberCount;
  }
}
