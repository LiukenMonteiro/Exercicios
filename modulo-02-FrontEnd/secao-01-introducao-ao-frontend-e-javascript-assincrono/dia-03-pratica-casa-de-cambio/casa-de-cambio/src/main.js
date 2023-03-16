import Swal from 'sweetalert2';

const searchButton = document.querySelector('.search-btn');//captura botão de pesquisa

const coinInput = document.querySelector('#coin-input');//captura o que for digitado na barra de pesquisa.

const coinsList = document.querySelector('.coins');//captura ul, onde vai ficar a lista;

function fetchAPI(coin){ //cria função que chama api
    const url = `https://api.exchangerate.host/latest?base=${coin}`;//cria const url que guarda o valor da api
    return fetch(url)//chama a fetch usando essa const url como parâmetro
    .then((response) => response.json())//trasnforma valor recebido da promise em .json
    .then((data) => {
        if(data.base !== coin.toUpperCase()){
            throw new Error('Moeda não existente!')
        }
        return data.rates;
    })//printa esse mesmo valor que foi guardado em data, já no formato .json
}

function renderCoins(coins){//cria função que vai redenrizar as moedas
    coinsList.innerHTML = '';//insere no html espaço para alocar as coins

    const coinsArray = Object.entries(coins);//transforma o objeto de coins em um array de arrays
    console.log(coinsArray); //printa o array de arrays

    coinsArray.forEach((coin) => { //percorre o array coin
        //COIN = [ ['SSS, 222], ['DDD', 222] ]
        //COINAME=SSS VALUE=222;
        //COINNAME=DDD VALUE=222;
        const [coinName, value] = coin;//salva os valores de coin, dentro de coinName e value;

        const li = document.createElement('li');//cria elemento de <li> e salva dentro de li
        li.textContent = `${coinName} - ${value}`;//chama coinName e value e agrega dentro de li = <li>
        coinsList.appendChild(li)//agrega li dentro de coinsList, que no caso é ul = <ul>
        // console.log(coinName);
        // console.log(value);
    })
}

function handlerSearch(){//cria função que printa a pesquisa a cada vez clicada no botão de pesquisa
    const coin = coinInput.value;//captura e guarda de coinInput.value dentro da const coin
    console.log(coin)

    if(!coin){ //se coin = vazio, tratativa de erro.
       return Swal.fire({ //chamada de error, com pacote 'sweetalert2'
            icon:"error",
            title:'Opsss...',
            text: 'Você precisa digitar uma moeda'
        })
    //se cair no erro, retorna a tratativa de erro, encerrando o código aqui.
    }

    fetchAPI(coin)//chama a função fetchAPI, passando o valor.
    .then(renderCoins)
    .catch((error) => {
        Swal.fire({ //chamada de error, com pacote 'sweetalert2'
            icon:"error",
            title:'Opsss...',
            text: error.message
        })
    })
    // ================================
    // const result = fetchAPI(coin)
    // console.log(result);

}

searchButton.addEventListener('click', handlerSearch);//adiciona evento de clique no botão de pesquisa, que retorna a função qque chama api, utilizando a url como parâmetro