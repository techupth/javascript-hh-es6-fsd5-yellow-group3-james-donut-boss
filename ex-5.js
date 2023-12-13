function sum(...numbers) {
  // Start coding here !
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
