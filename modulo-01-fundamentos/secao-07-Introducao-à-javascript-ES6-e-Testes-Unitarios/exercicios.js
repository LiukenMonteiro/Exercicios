// Crie uma função que receba um número e retorne seu fatorial.

const factorial = (n) => {

    if (n === 0 || n === 1)
    return 0;
  for (let index = n - 1; index >= 1; index-= 1) {
   result = n *= index;
  }
  return result;
}

console.log(`Esse é o fatorial: ${factorial(5)}`);