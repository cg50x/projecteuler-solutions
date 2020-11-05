let primes = [2, 3, 5, 7, 11, 13];
let currentNumber = 14;
while (primes.length < 10_001) {
  if(!primes.some(prime => currentNumber % prime === 0)) {
    primes.push(currentNumber);
  }
  currentNumber += 1;
}
console.log(primes[10_000]);
