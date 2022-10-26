// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`);

    console.log(checkTernary(20));

    const nome = "Gus";
    const modulos = [1];
    const empresa = {
      nome: "Trybe",
      nota: 8001,
    };

    modulos.push(3);
nome = "Batman";
empresa.nota = 8002;

     