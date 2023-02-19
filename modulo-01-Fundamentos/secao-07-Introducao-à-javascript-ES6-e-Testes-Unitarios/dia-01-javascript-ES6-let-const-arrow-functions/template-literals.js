// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');
// ---------------------------------------------------------------------------------
// let nome = 'Tamara';

// // console.log('Olá ' + nome + '!');

// console.log(`Olá ${nome}!`);

let pessoa = {
    nome: 'Márcia',
    sobrenome: 'Albuquerque',
    anoNascimento: 1979
}

console.log(`Paciente: ${pessoa.nome} ${pessoa.sobrenome}
Idade: ${2022 - pessoa.anoNascimento} anos`);