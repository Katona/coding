export const segregate = (chars: string[]) => {
    const swap = (i: number, j: number) => {
        const tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp; 
    }
    let endOfRs = 0;
    let startOfBs = chars.length - 1;
    let i = 0;
    while (i <= startOfBs) {
        if (chars[i] === 'R') swap(endOfRs++, i++);
        else if (chars[i] === 'G') i++;
        else swap(i, startOfBs--); 
    }
    return chars;
}