export const getStepWords = (input: string, dictionary: string[]): string[] => {
  return dictionary.reduce<string[]>((stepWords, currentWord) => {
    if (currentWord.length != input.length + 1) return stepWords;
    for (let i = 0; i < input.length; i++) {
      if (!currentWord.includes(input.charAt(i))) return stepWords;
    }
    return [currentWord, ...stepWords];
  }, []);
};
