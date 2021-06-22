function countPrimeNumbers() {
  let prime = [];
  for (let i = 2; i < 100; i++) {
    if (i % 2 != 0)
      prime.push(i);
  }
  return prime;
}

function loop() {
  for (let k = 0; k < 100; ++k) {
    countPrimeNumbers();
  }
}

let start = performance.now();
setTimeout(loop(), 0);
let end = performance.now();
let final = end - start;

console.log(`Execution time of printing countPrimeNumbers was ${final} milliseconds.`);
