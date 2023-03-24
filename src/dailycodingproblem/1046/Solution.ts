const palindromize = (input: string) => {
  let left = 0;
  let right = input.length - 1;
  let chars = input.split("");
  while (left < right) {
    const leftChar = chars[left];
    const rightChar = chars[right];
    if (rightChar !== leftChar) {
      if (rightChar < leftChar) chars.splice(left, 0, rightChar);
      else chars.splice(right + 1, 0, leftChar);
      right++;  // accounts for the inserted character
    }
    left++;
    right--;
  }
  return chars.join("");
};

export default palindromize;
