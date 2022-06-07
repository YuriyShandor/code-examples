class NumbersHelper {
  getXRandomNumbersBetweenTwoNumbers(numbersQty: number, fromNumber: number, toNumber: number) {
    const generateRandomInteger = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1 - min));
    const randomNumbers: number[] = [];
    for (let i = 0; i <= numbersQty; i++) {
      randomNumbers.push(generateRandomInteger(fromNumber, toNumber));
    }
    return randomNumbers;
  }
}

export default new NumbersHelper();
