
outerloop:
for (let a = 1; a <= 1000; a++) {
  for (let b = a + 1; b <= 1000 - a; b++) {
    let c = 1000 - a - b;
    if (c < b) {
      continue;
    }
    if (a * a + b * b === c * c) {
      console.log(a * b * c);
      break outerloop;
    }
  }
}
