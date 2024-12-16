type Block = {
  start: number;
  size: number;
  id?: number;
};
const uncompress = (input: number[]): number[] => {
  const length = input.reduce((acc, curr) => acc + curr);

  let result = new Array(length);
  let freespace = false;
  let id = 0;
  let offset = 0;
  for (let i = 0; i < input.length; i++) {
    const size = input[i]!;
    if (!freespace) {
      result.fill(id, offset, offset + size);
      id = id + 1;
    }
    offset += size;
    freespace = !freespace;
  }
  return result;
};

const getFsChecksum = (input: number[]) => {
  const uncompressed = uncompress(input);
  let start = 0;
  let end = uncompressed.length - 1;
  while (start < end) {
    while (start < end && uncompressed[start] !== undefined) start++;
    while (end > start && uncompressed[end] === undefined) end--;
    const temp = uncompressed[start]!;
    uncompressed[start] = uncompressed[end]!;
    uncompressed[end] = temp;
  }

  return uncompressed
    .filter((e) => e !== undefined)
    .reduce((acc, curr, index) => acc + curr * index);
};

const getBlocks = (input: number[]): Block[] => {
  let result: Block[] = [];
  let freespace = false;
  let id = 0;
  let offset = 0;
  for (let i = 0; i < input.length; i++) {
    const size = input[i]!;
    if (!freespace) {
      result.push({ start: offset + size, size, id });
      id = id + 1;
    } else {
      result.push({ start: offset + size, size });
    }
    offset += size;
    freespace = !freespace;
  }
  return result;
};

const getFiles = (input: number[]): [number, number][] => {
  let fileEnd = input.length - 1;
  let fileStart = fileEnd;
  let result: [number, number][] = [];

  while (fileEnd > 0) {
    while (fileEnd >= 0 && input[fileEnd] === undefined) fileEnd--;
    fileStart = fileEnd;
    while (fileStart >= 0 && input[fileStart] !== undefined && input[fileStart] === input[fileEnd])
      fileStart--;
    result.push([fileStart + 1, fileEnd]);
    fileEnd = fileStart;
  }
  return result;
};
const getFreeSpaces = (input: number[]): [number, number][] => {
  let freeStart = 0;
  let freeEnd = freeStart;
  let result: [number, number][] = [];

  while (freeStart < input.length) {
    while (freeStart < input.length && input[freeStart] !== undefined) freeStart++;
    freeEnd = freeStart;
    while (freeEnd < input.length && input[freeEnd] === undefined) freeEnd++;
    result.push([freeStart, freeEnd - 1]);
    freeStart = freeEnd;
  }
  return result;
};

const move = (input: number[], file: [number, number], freeSpace: [number, number]) => {
  const size = file[1] - file[0];
  const id = input[file[0]];
  input.fill(id!, freeSpace[0], freeSpace[0] + size + 1);
  input.fill(undefined!, file[0], file[1] + 1);
};

const getFsChecksum2 = (input: number[]) => {
  const uncompressed = uncompress(input);
  const files = getFiles(uncompressed);
  files.forEach((file) => {
    const fileSize = file[1] - file[0];

    const freeSpaces = getFreeSpaces(uncompressed);
    const freeSpace = freeSpaces.find((freeSpace) => freeSpace[1] - freeSpace[0] >= fileSize);
    if (freeSpace && freeSpace[1] < file[0]) {
      move(uncompressed, file, freeSpace);
    }
  });

  return uncompressed.reduce((acc, curr, index) => (curr !== undefined ? acc + curr * index : acc));
};

export { getFsChecksum, getFsChecksum2, uncompress };
