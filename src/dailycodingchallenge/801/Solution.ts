export const getSevenishNumber = (n: number) => {
  let numbers: number[] = [1];
  let power: number = 1;

  while (numbers.length < n) {
    const newPower = Math.pow(7, power);
    power += 1;
    numbers = [...numbers, newPower, ...numbers.map((num) => num + newPower)];
  }
  return numbers[n - 1];
};


export const getSevenishNumber2 = (n: number) => {

    let result = 0;
    let power = 1;
    while (n > 0) {
        const bit = n & 1;
        if (bit === 1) {
            result += power;
        }
        power *= 7;
        n = Math.floor(n / 2);
    }
    return result;
}