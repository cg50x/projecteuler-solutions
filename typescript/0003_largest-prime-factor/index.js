let target = 600_851_475_143;
let primeFactors = [1];
for (let i = 2; target > 1; i++) {
  let isFactor = false;
  while (target % i === 0) {
    target /= i;
    isFactor = true;
  }
  if (isFactor) {
    primeFactors.push(i);
  }
}
console.log(Math.max(...primeFactors));
