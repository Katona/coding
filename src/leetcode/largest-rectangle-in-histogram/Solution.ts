type Bar = {
  height: number;
  index: number;
};

export function largestRectangleArea(h: number[]): number {
  let stack: Bar[] = [];
  let result = 0;
  let heights = [...h, 0];

  for (let i = 0; i < heights.length; i++) {
    const current = { height: heights[i], index: i };
    let top = stack.length > 0 ? stack[stack.length - 1] : null;
    while (top && top.height > current.height) {
      stack.pop();
      const width = stack.length > 0 ? i - (stack[stack.length - 1].index + 1) : i;
      const area = top.height * width;
      result = Math.max(area, result);
      top = stack.length > 0 ? stack[stack.length - 1] : null;
    }
    stack.push({ height: heights[i], index: i });
  }
  return result;
}
