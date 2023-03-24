type Tree = {
  value: number;
  left?: Tree;
  right?: Tree;
};

const constructCartesianTree = (inorderTraversal: number[]): Tree | undefined => {
  if (!inorderTraversal || inorderTraversal.length === 0) return undefined;

  const minIndex = inorderTraversal.reduce(
    (acc, curr, i) => (curr < inorderTraversal[acc] ? i : acc),
    0
  );
  const left = constructCartesianTree(inorderTraversal.slice(0, minIndex));
  const right = constructCartesianTree(inorderTraversal.slice(minIndex + 1));
  return { value: inorderTraversal[minIndex], left, right };
};

export default constructCartesianTree;

