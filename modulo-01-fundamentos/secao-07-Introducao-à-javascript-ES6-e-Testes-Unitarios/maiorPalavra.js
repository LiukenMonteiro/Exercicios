// // longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// function maiorPalavra(string) {
//     let arrayStr = string.split(" ");
//     let maior = 0;
//     let palavra = null;
    
//     arrayStr.forEach(function(str) {
//         if (maior < str.length) {
//             maior = str.length;
//             palavra = str;
//         }
//     });
//     return palavra;
// }

// console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'));

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));