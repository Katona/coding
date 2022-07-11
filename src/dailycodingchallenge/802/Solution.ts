type TreeNode = {
  probability: number;
  left: Tree;
  right: Tree;
};

type Leaf = {
  value: number;
};

type Tree = TreeNode | Leaf;

const isLeaf = (t: Tree): t is Leaf => (t as Leaf).value != null;

const createTree = (nums: number[], weights: number[], pBase: number = 0): Tree => {
  if (nums.length === 1) {
    return { value: nums[0] };
  }
  const middle = Math.floor(nums.length / 2);
  const leftNums = nums.slice(0, middle);
  const leftWeights = weights.slice(0, middle);
  const rightNums = nums.slice(middle);
  const rightWeights = weights.slice(middle);
  const p = leftWeights.reduce((acc, c) => acc + c, 0);
  return {
    probability: pBase + p,
    left: createTree(leftNums, leftWeights, pBase),
    right: createTree(rightNums, rightWeights, pBase + p),
  };
};
const findValueForP = (tree: Tree, p: number): number => {
  if (isLeaf(tree)) {
    return tree.value;
  }
  return p < tree.probability ? findValueForP(tree.left, p) : findValueForP(tree.right, p);
};

export const createWeightedRnd = (nums: number[], weights: number[]): (() => number) => {
  const tree = createTree(nums, weights);
  return () => findValueForP(tree, Math.random());
};

export const weightedRandom = (nums: number[], weights: number[]) => {
  return createWeightedRnd(nums, weights)();
};

type NumWithWeight = {
  value: number;
  cumulativeWeight: number;
};

const processNums = (nums: number[], weights: number[]): NumWithWeight[] => {

  return nums.slice(1).reduce<NumWithWeight[]>(
    (acc, num, i) => [
      ...acc,
      { value: num, cumulativeWeight: acc[acc.length - 1].cumulativeWeight + weights[i + 1] },
    ],
    [{ value: nums[0], cumulativeWeight: weights[0]}]
  );
}

// 0.3  0.6 1
// p = 0.2
const find = (weights: NumWithWeight[], p: number) => {
    // console.log("looking for p=", p);
    let left = 0;
    let right = weights.length;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2); 
        if (weights[middle].cumulativeWeight < p) left = middle + 1;
        else right = middle - 1; 
    }
    // console.log("found", weights[left])
    return weights[left].value;

}
export const createWeightedRnd2 = (nums: number[], weights: number[]): () => number => {
    const sortedWeights = processNums(nums, weights);
    console.log(sortedWeights)
    return () => find(sortedWeights, Math.random());
};
