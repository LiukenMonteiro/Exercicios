//objeto é igual a chave-valor;

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };

//  console.log(car.type);

let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  
  diasDaSemana[1]; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo