
let sum = 0;
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    if (i !== j) {
      sum += i * j;
    }
  }
}
console.log(sum);
