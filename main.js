const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n
rl.question('Enter n to find n-th prime number ', (answer) => {
  n = answer
  console.log("Prime is " + nth(3))
  rl.close()
});

function nth(n){
  let last = 1
  for(let i = 1; i < n * 2; i+=2)
    last = i
    
  return last
}