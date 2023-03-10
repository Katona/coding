type Tree = { value: number, left?: Tree, right?: Tree };

const last = (array: number[]) => array[array.length - 1];

const constructBST = (postOrderResult: number[]): Tree | undefined => {
    if (!postOrderResult?.length) return undefined;

    const root = last(postOrderResult);
    const i = postOrderResult.findIndex(e => e >= root);
    const leftElements = postOrderResult.slice(0, i);
    const rightElements = postOrderResult.slice(i, postOrderResult.length - 1);
    const left = constructBST(leftElements);
    const right = constructBST(rightElements);
    return { value: root, left, right };
}

export { constructBST };