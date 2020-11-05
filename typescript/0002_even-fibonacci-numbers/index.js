let lastNumber = 2;
let secondToLastNumber = 1;
let nextNumber = lastNumber + secondToLastNumber;
let sum = 2;
while (nextNumber < 4_000_000) {
  if (nextNumber % 2 === 0) {
    sum += nextNumber;
  }
  [secondToLastNumber, lastNumber] = [lastNumber, nextNumber];
  nextNumber = lastNumber + secondToLastNumber;
}
console.log(sum);
