const fs = require('fs').promises;

// QUESTÃO 1?
async function readAllComAsyncAwait() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({id, name }) => `${id} - ${name}`);

    strings.forEach((string) => console.log(string));
}

// QUESTÃO 2
async function getSimpsonById(id){
    const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8')

    const simpsons = JSON.parse(fileContent)
    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
    if(!chosenSimpson){
      throw new Error('id não encontrado');
    }
    return chosenSimpson;
}

function main() {
    // readAllComAsyncAwait();
    getSimpsonById(3)
    .then((simpson) => console.log(simpson));
}

main();