const enviar = document.querySelector('#enviar');
let nome = document.querySelector('#id-name');

// enviar.addEventListener('click', (event) => {
//     event.preventDefault();
// });

enviar.addEventListener('click', ()=>{
    const inputNome = document.forms['trybertrip']['id-nome'].value;
    const inputEmail = document.forms['trybertrip']['id-email'].value;
    inputNome == '' || inputEmail == '' ?
      alert('Dados Inválidos') :
      alert(`Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip`,
      );
  });




