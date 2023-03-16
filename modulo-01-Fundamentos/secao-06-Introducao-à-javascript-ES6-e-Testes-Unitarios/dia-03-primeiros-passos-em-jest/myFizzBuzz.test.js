const myFizzBuzz = require('./myFizzBuzz');

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', ()=>{
    it('Se o numero for divisível por 3 e 5, retorna a frase "fizzbuzz"', ()=>{
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Se o numero for divisível por 3, retorna a frase "fizz"', ()=>{
        expect(myFizzBuzz(6)).toBe('fizz');
    });
    it('Se o numero for divisível por 5, retorna a frase "buzz"', ()=>{
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('Se o numero não for divisível nem por 3 ou 5, retorna a false', ()=>{
        expect(myFizzBuzz(4)).not.toBe(true);
    });
    it('Se não for um número, retorna a false', ()=>{
        expect(myFizzBuzz('4')).not.toBe(true);
    });
});
