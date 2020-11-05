function isPalindromeNumber(number) {
  return number.toString() === number.toString().split('').reverse().join('');
}

let largestPalindromeNumber = 0;
for (let x = 100; x <= 999; x += 1) {
  for (let y = 100; y <= 999; y += 1) {
    let currentNumber = x * y;
    if (isPalindromeNumber(currentNumber) && currentNumber > largestPalindromeNumber) {
      largestPalindromeNumber = currentNumber;
    }
  }
}
console.log(largestPalindromeNumber);
