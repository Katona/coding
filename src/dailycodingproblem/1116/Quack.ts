class Quack {
  private pushStack: number[] = [];
  private reverseStack: number[] = [];
  private pullStack: number[] = [];
  private pulledElementCount = 0;
  private poppedElementCount = 0;
  private popLevel = 0;

  /**
   * add a new item x to the left end of the list
   */
  push(x: number) {
    this.pushStack.push(x);
    this.popLevel -= 1;
  }

  /**
   * Remove and return the item on the left end of the list
   */
  pop(): number | undefined {
    if (this.pushStack.length > this.pulledElementCount) {
      const result = this.pushStack.pop();
      this.popLevel += 1;
      this.poppedElementCount = Math.max(this.poppedElementCount, this.popLevel);
      return result;
    } else {
      // Quack is empty
      return undefined;
    }
  }

  /**
   * Remove the item on the right end of the list.
   */
  pull(): number | undefined {
    this.fillPullStack();
    if (this.pullStack.length > 0) {
      this.pulledElementCount += 1;
      return this.pullStack.pop();
    }
    return undefined;
  }
  private fillPullStack() {
    if (this.pullStack.length <= this.poppedElementCount) {
      const remainingElements = this.pushStack.reverse()
        .slice(0, this.pulledElementCount > 0 ? -this.pulledElementCount : undefined);
      this.pullStack = [];
      this.reverseStack = [];
      remainingElements.forEach((e) => {
        this.pullStack.push(e);
        this.reverseStack.push(e);
      });
      this.pushStack = this.reverseStack.reverse();
      this.pulledElementCount = 0;
      this.poppedElementCount = 0;
      this.popLevel = 0;
    }
  }
}

export { Quack };
