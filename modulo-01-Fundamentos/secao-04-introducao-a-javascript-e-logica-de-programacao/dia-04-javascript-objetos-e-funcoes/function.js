function greet(name){
    console.log('Hey, ' + name + ' tudo bem?');
}

greet('Samanta');
greet('Luis');

//SOMA
function sum (num1, num2){
    return num1 + num2;
}

console.log(sum(10, 20));

//MAIOR VALOR
function bigges(firstNUmber, secondNUmber){
    if(firstNUmber > secondNUmber){
        return 'O maior valor é: ' + firstNUmber
    }else if (secondNUmber > firstNUmber){
        return 'O maior valor é: ' + secondNUmber
    }else{
        return 'Os valores são iguais'
    }
}
console.log(bigges(20, 10));