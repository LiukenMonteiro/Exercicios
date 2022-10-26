const substituax = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome; // troca o valor do x dentro do array pelo nome recebido por parâmetro
    }
  }
  return fraseArray.join(' ');
}

console.log(substituax('Bebeto'));



const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `
    ${func}
  
    Minhas três principais habilidades são:`;
  
    skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
      resultado = `${resultado}
      - ${skill}`;
    }); // reatribui e adiciona a skill atual a variável resultado
    return resultado;
  };
  
  console.log(minhasSkills(substituax('Bebeto')));