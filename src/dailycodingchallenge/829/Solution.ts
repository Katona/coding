type Node<T> = {
  data: T;
  prev?: Node<T>;
  next?: Node<T>;
};

class NodeList<T> {
  private head?: Node<T>;
  private tail?: Node<T>;

  insertAfter = (node: Node<T>, data: T): Node<T> => {
    let newNode: Node<T> = {
      data,
      prev: node,
      next: node.next,
    };
    if (node.next) {
      node.next.prev = newNode;
    }
    node.next = newNode;
    if (this.tail === node) this.tail = newNode;

    return newNode;
  };

  insertBefore = (node: Node<T>, data: T): Node<T> => {
    let newNode: Node<T> = {
      data,
      prev: node.prev,
      next: node,
    };
    if (node.prev) {
      node.prev.next = newNode;
    }
    node.prev = newNode;
    if (this.head === node) this.head = newNode;
    return newNode;
  };

  insertFirst = (data: T): Node<T> => {
    const newNode = {
      data,
      next: this.head,
    };
    if (this.head) this.head.prev = newNode;
    this.head = newNode;
    if (!newNode.next) this.tail = newNode;
    return newNode;
  };

  delete = (node: Node<T>) => {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    if (this.head === node) this.head = node.next;
    if (this.tail === node) this.tail = node.prev;
  };
  getHead = (): Node<T> | undefined => this.head;
  getTail = (): Node<T> | undefined => this.tail;
}

type Data = {
  key: string;
  bucketNode: Node<Bucket>;
};

type Bucket = {
  nodes: NodeList<Data>;
  value: number;
};

export class ConstantMap {
  private buckets: NodeList<Bucket> = new NodeList<Bucket>();
  private nodeMap: Record<string, Node<Data>> = {};

  plus = (key: string) => {
    if (!this.nodeMap[key]) {
      let bucketNode = this.buckets.getHead();
      if (bucketNode) {
        let dataNode;
        if (bucketNode.data.value === 1) {
          dataNode = bucketNode.data.nodes.insertFirst({ key, bucketNode });
        } else {
          bucketNode = this.buckets.insertBefore(bucketNode, {
            value: 1,
            nodes: new NodeList<Data>(),
          });
          dataNode = bucketNode.data.nodes.insertFirst({ key, bucketNode });
        }
        this.nodeMap[key] = dataNode;
      } else {
        bucketNode = this.buckets.insertFirst({ value: 1, nodes: new NodeList<Data>() });
        this.nodeMap[key] = bucketNode.data.nodes.insertFirst({ key, bucketNode });
      }
    } else {
      const currNode = this.nodeMap[key];
      const currBucketNode = currNode.data.bucketNode;
      currBucketNode.data.nodes.delete(currNode);
      if (currBucketNode.next?.data.value === currBucketNode.data.value + 1) {
        const dataNode = currBucketNode.next.data.nodes.insertFirst({
          bucketNode: currBucketNode.next,
          key,
        });
        this.nodeMap[key] = dataNode;
      } else {
        const newBucketNode = this.buckets.insertAfter(currBucketNode, {
          nodes: new NodeList<Data>(),
          value: currBucketNode.data.value + 1,
        });
        const dataNode = newBucketNode.data.nodes.insertFirst({ key, bucketNode: newBucketNode });
        this.nodeMap[key] = dataNode;
      }
      if (!currBucketNode.data.nodes.getHead()) this.buckets.delete(currBucketNode);
    }
  };

  minus = (key: string) => {
    const currNode = this.nodeMap[key];
    if (!currNode) return;
    const currBucketNode = currNode.data.bucketNode;
    currBucketNode.data.nodes.delete(currNode);
    if (currBucketNode.data.value === 1) {
      delete this.nodeMap[key];
      if (!currBucketNode.data.nodes.getHead()) this.buckets.delete(currBucketNode);
      return;
    }
    if (currBucketNode.prev?.data.value === currBucketNode.data.value - 1) {
      const dataNode = currBucketNode.prev.data.nodes.insertFirst({
        key,
        bucketNode: currBucketNode.prev,
      });
      this.nodeMap[key] = dataNode;
    } else {
      const newBucketNode = this.buckets.insertBefore(currBucketNode, {
        value: currBucketNode.data.value - 1,
        nodes: new NodeList<Data>(),
      });
      const dataNode = newBucketNode.data.nodes.insertFirst({ key, bucketNode: newBucketNode });
      this.nodeMap[key] = dataNode;
    }
    if (!currBucketNode.data.nodes.getHead()) this.buckets.delete(currBucketNode);
  };

  getMax = () => {
    const tail = this.buckets.getTail();
    return tail && tail.data.nodes.getHead()?.data.key;
  };

  getMin = () => {
    const head = this.buckets.getHead();
    return head && head.data.nodes.getHead()?.data.key;
  };
}
