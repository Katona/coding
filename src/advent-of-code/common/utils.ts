const lines = (input: string) => input.split(`\n`).map((line) => line.trim());
const cells = (line: string) =>
  line
    .split(" ")
    .map((cell) => cell.trim())
    .filter((cell) => cell.length > 0);

export { lines, cells };
