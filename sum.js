console.log('hello');

let total = 0;

// TODO: Use proper inputs
let numberStrings = [1, 2, 3, 6]; 

for (let numString of numberStrings) {
  let num = Number(numString);
  total += num; 

  console.log('num: ', num);
}

// for (let i = 0; i < values.length; i++) { 
//   let val = values[i]
// }

console.log('total:', total);

