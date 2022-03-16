type N = {
  left?: N;
  right?: N;
  hourStart: number;
  hourEnd: number;
  subscriberCount: number;
};

export class SubscriberCounter {
  private root: N;
  constructor(subscribers: number[]) {
    const createTree = (start: number, end: number): N | undefined => {
      if (start > end || end < start) return;
      const middle = (start + end) >> 1;
      if (start < end) {
        const leftTree = createTree(start, middle);
        const rightTree = createTree(middle + 1, end);
        return {
          left: leftTree,
          right: rightTree,
          hourStart: start,
          hourEnd: end,
          subscriberCount: leftTree!.subscriberCount + rightTree!.subscriberCount,
        };
      } else {
        return { hourStart: start, hourEnd: end, subscriberCount: subscribers[middle] };
      }
    };
    this.root = createTree(0, subscribers.length - 1)!;
  }

  update(hour: number, value: number) {
    let updateCount = 0;
    const _update = (node: N | undefined) => {
      if (node == null) return;
      if (node.hourStart <= hour && hour <= node.hourEnd) {
      updateCount++;
        node.subscriberCount += value;
        _update(node.left);
        _update(node.right);
      }
    };
    _update(this.root);
    console.log("updateCount", updateCount);
  }

  query(start: number, end: number) {
      const sum = (node: N | undefined): number => {
          if (node == undefined) return 0;
          if (end < node.hourStart || node.hourEnd < start) return 0;
          if (start <= node.hourStart && node.hourEnd <= end) return node.subscriberCount;
          return sum(node.left) + sum(node.right);
      }
      return sum(this.root);
  }
}
