const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n
rl.question('Enter n to find n-th prime number ', (answer) => {
  n = answer
  console.log("Prime is " + nth_prime(n))
  rl.close()
});

function nth_prime(n){
  let primes = [2]

  for(let current = 3; primes.length < n; current+=2){
    let prime = true
    for(let x = 0; x < primes.length; ++x)
      if (current % primes[x] === 0){
        prime = false
        break
      } 
    if(prime) primes.push(current)

    }
    
  return primes[primes.length - 1]
}