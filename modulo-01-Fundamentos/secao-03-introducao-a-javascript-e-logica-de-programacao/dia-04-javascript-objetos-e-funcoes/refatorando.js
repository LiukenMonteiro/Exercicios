//MÉDIA ENTRE OS NUMEROS
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;


// let firstName = 'Jack';
// let lastName = 'Sparrow';

// function fullName(firstName, lastName){
//     return (firstName + ' ' + lastName);
// }

// console.log(fullName('Jack', 'Xablau'));

//========================================
//GERARR UM ARRAY COM 100 CARACTTERES IGUAIS

function generateArray(character, num){
    let characterArray = [];
    for (let index = 0; index < num; index += 1){
        characterArray.push(character);
    }
    return characterArray;
}

console.log(generateArray('*', 10));
console.log(generateArray(0, 1000))