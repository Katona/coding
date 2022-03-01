export function reverseWords(s: string): string {
    const charList = s.trim().replace(/\s+/g, " ").split('');

    const reverse = (l: string[], start: number, end: number) => {
        for (let i = 0; i <= (end - start) >> 1; i++) {
            const tmp = l[i + start];
            l[i+start] = l[end - i];
            l[end - i] = tmp;
        }
    }
    const words = [];
    let start = 0;
    for (let i = 0; i < charList.length; i++) {
        if (charList[i] === ' ') {
            words.push({ start, end: i - 1});
            start = i + 1;
        }
    }
    words.push({start, end: charList.length - 1});

    words.forEach(w => reverse(charList, w.start, w.end));
    reverse(charList, 0, charList.length - 1);
    return charList.join("");
};