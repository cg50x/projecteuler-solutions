
let numberList = new Array(2_000_001).fill(true);
let currentPrime = 2;
while (currentPrime < numberList.length) {
  for (let i = currentPrime * currentPrime; i < numberList.length; i += currentPrime) {
    numberList[i] = false;
  }
  currentPrime += 1;
  while (!numberList[currentPrime] && currentPrime < numberList.length) {
    currentPrime += 1;
  }
}

let sumOfPrimes = 0;
for (let i = 2; i < numberList.length; i++) {
  if (numberList[i]) {
    sumOfPrimes += i;
  }
}
console.log(sumOfPrimes);
