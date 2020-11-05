
function getPrimeFactors(inputNumber) {
  let primeFactors = [1];
  let divisor = 2;
  while (inputNumber > 1) {
    while (inputNumber % divisor === 0) {
      primeFactors.push(divisor);
      inputNumber /= divisor;
    }
    divisor += 1;
  }
  return primeFactors;
}

let maxPrimeCounts = {};
let maxNumber = 20;
for (let i = 1; i <= maxNumber; i++) {
  let primeCounts = {};
  let primeFactors = getPrimeFactors(i);
  primeFactors.forEach(factor => primeCounts[factor] = (primeCounts[factor] || 0) + 1);
  Object.keys(primeCounts).forEach(key => {
    if (!maxPrimeCounts.hasOwnProperty(key) || maxPrimeCounts[key] < primeCounts[key]) {
      maxPrimeCounts[key] = primeCounts[key];
    }
  });
}

let smallestMultiple = Object.keys(maxPrimeCounts).reduce((acc, factor) => {
  return acc * Math.pow(factor, maxPrimeCounts[factor]);
}, 1);

console.log(smallestMultiple);
